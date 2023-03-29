import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAvlComponent } from './event-avl.component';

describe('EventAvlComponent', () => {
  let component: EventAvlComponent;
  let fixture: ComponentFixture<EventAvlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAvlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
