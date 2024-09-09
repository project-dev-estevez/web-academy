import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSpikesComponent } from './our-spikes.component';

describe('OurSpikesComponent', () => {
  let component: OurSpikesComponent;
  let fixture: ComponentFixture<OurSpikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurSpikesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurSpikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
