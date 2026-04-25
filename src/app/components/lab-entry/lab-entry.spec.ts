import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabEntry } from './lab-entry';

describe('LabEntry', () => {
  let component: LabEntry;
  let fixture: ComponentFixture<LabEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabEntry],
    }).compileComponents();

    fixture = TestBed.createComponent(LabEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
