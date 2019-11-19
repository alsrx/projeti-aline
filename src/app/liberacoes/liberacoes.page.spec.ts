import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberacoesPage } from './liberacoes.page';

describe('LiberacoesPage', () => {
  let component: LiberacoesPage;
  let fixture: ComponentFixture<LiberacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiberacoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiberacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
