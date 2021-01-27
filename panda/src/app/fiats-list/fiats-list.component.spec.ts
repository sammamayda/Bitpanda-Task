import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiatsListComponent } from './fiats-list.component';

describe('FiatsListComponent', () => {
  let component: FiatsListComponent;
  let fixture: ComponentFixture<FiatsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiatsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
