import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaHeroesPage } from './lista-heroes.page';

describe('ListaHeroesPage', () => {
  let component: ListaHeroesPage;
  let fixture: ComponentFixture<ListaHeroesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHeroesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
