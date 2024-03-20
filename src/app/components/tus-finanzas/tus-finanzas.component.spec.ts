import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusFinanzasComponent } from './tus-finanzas.component';

describe('TusFinanzasComponent', () => {
  let component: TusFinanzasComponent;
  let fixture: ComponentFixture<TusFinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TusFinanzasComponent]
    });
    fixture = TestBed.createComponent(TusFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
