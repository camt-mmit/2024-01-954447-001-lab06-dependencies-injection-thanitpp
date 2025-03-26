import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynamicDataService {
  constructor() {}

  saveSection(sectionIndex: number, values: number[]): void {
    const storageKey = `dynamic-inputs-section-${sectionIndex}`;
    localStorage.setItem(storageKey, JSON.stringify(values));
  }

  loadSection(sectionIndex: number): number[] | null {
    const storageKey = `dynamic-inputs-section-${sectionIndex}`;
    const storedValues = localStorage.getItem(storageKey);
    return storedValues ? JSON.parse(storedValues) : null;
  }

  removeSection(sectionIndex: number): void {
    const storageKey = `dynamic-inputs-section-${sectionIndex}`;
    localStorage.removeItem(storageKey);
  }
}
