import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DynamicInputsComponent } from '../dynamic-inputs/dynamic-inputs.component';

@Component({
  selector: 'app-dynamic-sections',
  standalone: true,
  imports: [CommonModule, DynamicInputsComponent],
  templateUrl: './dynamic-sections.component.html',
})
export class DynamicSectionsComponent implements OnInit {
  sections: number[][] = [[0]];

  ngOnInit() {
    const savedData = localStorage.getItem('sections');
    if (savedData) {
      this.sections = JSON.parse(savedData);
    }
  }

  addSection() {
    this.sections.push([0]);
    this.saveToLocalStorage();
  }

  removeSection(index: number) {
    if (
      this.sections.length > 1 &&
      index >= 0 &&
      index < this.sections.length
    ) {
      this.sections.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

  updateInputs(index: number, values: number[]) {
    if (index >= 0 && index < this.sections.length) {
      this.sections[index].splice(0, this.sections[index].length);
      values.forEach((value) => this.sections[index].push(value));
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('sections', JSON.stringify(this.sections));
  }

  getSectionCount(): number {
    return this.sections.length; // Helper method to pass section count
  }
}
