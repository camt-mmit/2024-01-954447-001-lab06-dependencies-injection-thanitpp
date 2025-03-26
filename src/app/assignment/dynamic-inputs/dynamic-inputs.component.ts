import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DynamicDataService } from '../dynamic-data.service';

@Component({
  selector: 'app-dynamic-inputs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-inputs.component.html',
  styleUrls: ['./dynamic-inputs.component.scss'],
})
export class DynamicInputsComponent implements OnInit, OnDestroy {
  @Input() sectionIndex!: number;
  @Input() sectionCount = 1;
  @Input() set initialValues(values: number[]) {
    this.inputs.clear();
    values.forEach((value) =>
      this.inputs.push(new FormControl<number | null>(value)),
    );
    this.loadFromLocalStorage();
  }
  @Output() inputsChange = new EventEmitter<number[]>();
  @Output() removeSection = new EventEmitter<number>();

  inputs = new FormArray<FormControl<number | null>>([
    new FormControl<number | null>(0),
  ]);
  total = 0; // Store the total as a component property
  private subscription: Subscription = new Subscription();

  constructor(private dataService: DynamicDataService) {
    this.loadFromLocalStorage();
  }

  ngOnInit() {
    // Initialize total on load
    this.updateTotal();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Clean up subscription
  }

  addInput() {
    this.inputs.push(new FormControl<number | null>(0));
    // Total doesn't update here - only on Enter
  }

  removeInput(index: number) {
    if (this.inputs.length > 1) {
      this.inputs.removeAt(index);
      // Total doesn't update here - only on Enter
    }
  }

  removeThisSection() {
    this.removeSection.emit(this.sectionIndex);
    this.dataService.removeSection(this.sectionIndex);
  }

  onKeyPress(event: KeyboardEvent, index: number) {
    if (event.key === 'Enter') {
      const target = event.target as HTMLInputElement;
      const value = target.value;
      const numericValue = parseFloat(value) || 0;
      this.inputs.at(index).setValue(numericValue);
      this.saveToLocalStorage();
      this.emitChanges();
      this.updateTotal(); // Update total only when Enter is pressed
    }
  }

  private updateTotal() {
    this.total = (this.inputs.value as (number | null)[])
      .map((value) => value ?? 0)
      .reduce((sum, num) => sum + num, 0);
  }

  emitChanges() {
    const values = (this.inputs.value as (number | null)[]).map((v) => v ?? 0);
    this.inputsChange.emit(values);
  }

  private saveToLocalStorage() {
    const values = (this.inputs.value as (number | null)[]).map((v) => v ?? 0);
    this.dataService.saveSection(this.sectionIndex, values);
  }

  private loadFromLocalStorage() {
    const storedValues = this.dataService.loadSection(this.sectionIndex);
    if (storedValues) {
      this.inputs.clear();
      storedValues.forEach((value) =>
        this.inputs.push(new FormControl<number | null>(value)),
      );
    } else if (this.inputs.length === 0) {
      this.inputs.push(new FormControl<number | null>(0));
    }
    this.updateTotal(); // Update total after loading
  }

  get isRemoveSectionDisabled(): boolean {
    return this.sectionCount <= 1 && this.sectionIndex === 0;
  }
}
