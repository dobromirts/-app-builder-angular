import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxSelectModule, IgxInputGroupModule, IgxComboModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxDropDownModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxDialogModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxComboModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxDialogModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxComboModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxToggleModule } from '@infragistics/igniteui-angular';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxSelectModule, IgxInputGroupModule, IgxComboModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxDropDownModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxDialogModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxComboModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxDialogModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxComboModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxButtonModule, IgxRippleModule, IgxToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
