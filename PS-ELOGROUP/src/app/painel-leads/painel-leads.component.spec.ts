import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelLeadsComponent } from './painel-leads.component';

describe('PainelLeadsComponent', () => {
  let component: PainelLeadsComponent;
  let fixture: ComponentFixture<PainelLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelLeadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
