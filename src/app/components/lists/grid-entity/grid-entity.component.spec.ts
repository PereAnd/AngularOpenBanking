import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEntityComponent } from './grid-entity.component';

describe('GridEntityComponent', () => {
  let component: GridEntityComponent;
  let fixture: ComponentFixture<GridEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridEntityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
