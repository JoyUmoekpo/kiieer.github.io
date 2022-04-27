import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingServiceComponent } from './mailing-service.component';

describe('MailingServiceComponent', () => {
  let component: MailingServiceComponent;
  let fixture: ComponentFixture<MailingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailingServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
