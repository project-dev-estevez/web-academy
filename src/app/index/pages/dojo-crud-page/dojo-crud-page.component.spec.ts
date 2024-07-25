import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DojoCrudPageComponent } from './dojo-crud-page.component';

describe('DojoCrudPageComponent', () => {
  let component: DojoCrudPageComponent;
  let fixture: ComponentFixture<DojoCrudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DojoCrudPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DojoCrudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
