import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPlanoComponent } from './meu-plano.component';

describe('MeuPlanoComponent', () => {
  let component: MeuPlanoComponent;
  let fixture: ComponentFixture<MeuPlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPlanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
