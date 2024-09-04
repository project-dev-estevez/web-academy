import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DojoGitflowPageComponent } from './dojo-gitflow-page.component';

describe('DojoGitflowPageComponent', () => {
  let component: DojoGitflowPageComponent;
  let fixture: ComponentFixture<DojoGitflowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DojoGitflowPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DojoGitflowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
