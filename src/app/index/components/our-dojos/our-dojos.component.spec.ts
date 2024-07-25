import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDojosComponent } from './our-dojos.component';

describe('OurDojosComponent', () => {
  let component: OurDojosComponent;
  let fixture: ComponentFixture<OurDojosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurDojosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurDojosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
