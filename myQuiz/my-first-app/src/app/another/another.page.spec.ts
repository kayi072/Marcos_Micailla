import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnotherPage } from './another.page';

describe('AnotherPage', () => {
  let component: AnotherPage;
  let fixture: ComponentFixture<AnotherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnotherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
