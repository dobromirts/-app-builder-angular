import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxAvatarModule, IgxPieChartModule, IgxCategoryChartModule } from '@infragistics/igniteui-angular';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxAvatarModule, IgxPieChartModule, IgxCategoryChartModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
