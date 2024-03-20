import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowObjectsPage } from './show-objects.page';

describe('ShowObjectsPage', () => {
  let component: ShowObjectsPage;
  let fixture: ComponentFixture<ShowObjectsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowObjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
