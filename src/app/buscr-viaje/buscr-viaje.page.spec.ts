import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscrViajePage } from './buscr-viaje.page';

describe('BuscrViajePage', () => {
  let component: BuscrViajePage;
  let fixture: ComponentFixture<BuscrViajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuscrViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
