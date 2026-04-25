import { Component, signal } from '@angular/core';
import { LabEntryComponent } from './components/lab-entry/lab-entry';

@Component({
  selector: 'app-root', // <--- Change this to 'app-root'
  standalone: true,
  imports: [LabEntryComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab-notebook-app');
}
