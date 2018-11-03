import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinFriendComponent } from './fin-friend.component';

describe('FinFriendComponent', () => {
  let component: FinFriendComponent;
  let fixture: ComponentFixture<FinFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
