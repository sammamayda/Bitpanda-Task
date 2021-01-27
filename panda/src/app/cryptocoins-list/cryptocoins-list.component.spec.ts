import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocoinsListComponent } from './cryptocoins-list.component';

describe('CryptocoinsListComponent', () => {
  let component: CryptocoinsListComponent;
  let fixture: ComponentFixture<CryptocoinsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptocoinsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocoinsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
