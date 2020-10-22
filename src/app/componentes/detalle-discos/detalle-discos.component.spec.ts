import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDiscosComponent } from './detalle-discos.component';

describe('DetalleDiscosComponent', () => {
  let component: DetalleDiscosComponent;
  let fixture: ComponentFixture<DetalleDiscosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDiscosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
