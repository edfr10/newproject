import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaPage } from './libreria.page';

describe('LibreriaPage', () => {
  let component: LibreriaPage;
  let fixture: ComponentFixture<LibreriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibreriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibreriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
