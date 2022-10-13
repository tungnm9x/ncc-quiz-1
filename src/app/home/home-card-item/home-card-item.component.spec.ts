import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardItemComponent } from './home-card-item.component';

describe('HomeCardItemComponent', () => {
  let component: HomeCardItemComponent;
  let fixture: ComponentFixture<HomeCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCardItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
