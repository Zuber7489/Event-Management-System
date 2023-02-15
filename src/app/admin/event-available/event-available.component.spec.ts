import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAvailableComponent } from './event-available.component';

describe('EventAvailableComponent', () => {
  let component: EventAvailableComponent;
  let fixture: ComponentFixture<EventAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
