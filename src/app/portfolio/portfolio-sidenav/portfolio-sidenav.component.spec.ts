import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSidenavComponent } from './portfolio-sidenav.component';

describe('PortfolioSidenavComponent', () => {
  let component: PortfolioSidenavComponent;
  let fixture: ComponentFixture<PortfolioSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSidenavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
