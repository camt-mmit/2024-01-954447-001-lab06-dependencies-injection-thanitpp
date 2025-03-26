import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DynamicDataService } from '../dynamic-data.service';
import { DynamicInputsComponent } from '../dynamic-inputs/dynamic-inputs.component';

@Component({
  selector: 'app-dynamic-sections',
  standalone: true,
  imports: [CommonModule, DynamicInputsComponent],
  templateUrl: './dynamic-sections.component.html',
})
export class DynamicSectionsComponent implements OnInit {
  sections: number[][] = [[0]];

  constructor(private dataService: DynamicDataService) {}

  ngOnInit() {
    this.loadAllSections();
  }

  addSection() {
    this.sections.push([0]);
    this.saveAllSections();
  }

  removeSection(index: number) {
    if (
      this.sections.length > 1 &&
      index >= 0 &&
      index < this.sections.length
    ) {
      this.sections.splice(index, 1);
      this.reindexSections();
    }
  }

  updateInputs(index: number, values: number[]) {
    if (index >= 0 && index < this.sections.length) {
      this.sections[index] = values;
      this.dataService.saveSection(index, values); // Save immediately when inputs change
    }
  }

  private loadAllSections() {
    this.sections = [];
    let index = 0;
    while (true) {
      const values = this.dataService.loadSection(index);
      if (!values) break; // Stop when no more sections are found
      this.sections.push(values);
      index++;
    }
    // Ensure at least one section exists
    if (this.sections.length === 0) {
      this.sections.push([0]);
    }
  }

  private saveAllSections() {
    this.sections.forEach((section, index) =>
      this.dataService.saveSection(index, section),
    );
    // Clean up any orphaned sections
    for (let i = this.sections.length; ; i++) {
      const values = this.dataService.loadSection(i);
      if (!values) break;
      this.dataService.removeSection(i);
    }
  }

  private reindexSections() {
    // Re-save all sections with updated indices
    this.sections.forEach((section, index) =>
      this.dataService.saveSection(index, section),
    );
    // Remove any leftover sections beyond current length
    for (let i = this.sections.length; ; i++) {
      const values = this.dataService.loadSection(i);
      if (!values) break;
      this.dataService.removeSection(i);
    }
  }

  getSectionCount(): number {
    return this.sections.length;
  }
}
