import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttperrorhandlerComponent } from './httperrorhandler.component';

describe('HttperrorhandlerComponent', () => {
  let component: HttperrorhandlerComponent;
  let fixture: ComponentFixture<HttperrorhandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttperrorhandlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttperrorhandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
