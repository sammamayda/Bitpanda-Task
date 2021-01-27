import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexesListComponent } from './indexes-list.component';

describe('IndexesListComponent', () => {
  let component: IndexesListComponent;
  let fixture: ComponentFixture<IndexesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
