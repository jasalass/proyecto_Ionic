import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesHeroesPage } from './detalles-heroes.page';

describe('DetallesHeroesPage', () => {
  let component: DetallesHeroesPage;
  let fixture: ComponentFixture<DetallesHeroesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesHeroesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
