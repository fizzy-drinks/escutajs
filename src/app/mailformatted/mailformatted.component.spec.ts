import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailformattedComponent } from './mailformatted.component';

describe('MailformattedComponent', () => {
  let component: MailformattedComponent;
  let fixture: ComponentFixture<MailformattedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailformattedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailformattedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
