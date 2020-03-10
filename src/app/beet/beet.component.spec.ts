import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeetComponent } from './beet.component';

describe('BeetComponent', () => {
  let component: BeetComponent;
  let fixture: ComponentFixture<BeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
