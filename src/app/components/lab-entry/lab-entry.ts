import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lab-entry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lab-entry.html',
  styleUrl: './lab-entry.css'
})
export class LabEntryComponent {
  currentEntry = {
    obsDate: '',
    obsMarks: null,
    manualDate: '',
    manualMarks: null
  };

  entries: any[] = [];

  addEntry() {
    if(this.currentEntry.obsDate) {
      this.entries.push({ ...this.currentEntry });
      this.currentEntry = { obsDate: '', obsMarks: null, manualDate: '', manualMarks: null };
    }
  }
}
