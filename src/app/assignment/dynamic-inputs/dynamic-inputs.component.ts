import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-inputs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-inputs.component.html',
  styleUrls: ['./dynamic-inputs.component.scss'], // Optional
})
export class DynamicInputsComponent {
  @Input() sectionIndex!: number;
  @Input() sectionCount: number = 1; // Default to 1 if not provided
  @Input() set initialValues(values: number[]) {
    this.inputs.clear();
    values.forEach((value) => this.inputs.push(new FormControl(value)));
  }
  @Output() inputsChange = new EventEmitter<number[]>();
  @Output() removeSection = new EventEmitter<number>();

  inputs = new FormArray<FormControl<number | null>>([new FormControl(null)]);

  constructor() {
    this.inputs.valueChanges.subscribe(() => {
      this.emitChanges();
    });
  }

  addInput() {
    this.inputs.push(new FormControl(null));
  }

  removeInput(index: number) {
    if (this.inputs.length > 1) {
      this.inputs.removeAt(index);
    }
  }

  removeThisSection() {
    this.removeSection.emit(this.sectionIndex);
  }

  getTotal(): number {
    return this.inputs.value
      .map((value) => parseFloat(value as any) || 0)
      .reduce((sum, num) => sum + num, 0);
  }

  emitChanges() {
    const values = this.inputs.value.map((v) => parseFloat(v as any) || 0);
    this.inputsChange.emit(values);
  }

  get isRemoveSectionDisabled(): boolean {
    return this.sectionCount <= 1 && this.sectionIndex === 0; // Disabled only if it's the last section
  }
}
