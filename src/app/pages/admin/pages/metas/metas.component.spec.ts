import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasComponent } from './metas.component';

describe('MetasComponent', () => {
  let component: MetasComponent;
  let fixture: ComponentFixture<MetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
