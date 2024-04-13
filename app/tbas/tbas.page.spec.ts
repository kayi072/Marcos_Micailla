import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TbasPage } from './tbas.page';

describe('TbasPage', () => {
  let component: TbasPage;
  let fixture: ComponentFixture<TbasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TbasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
