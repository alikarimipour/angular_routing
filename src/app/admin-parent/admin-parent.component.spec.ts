import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParentComponent } from './admin-parent.component';

describe('AdminParentComponent', () => {
  let component: AdminParentComponent;
  let fixture: ComponentFixture<AdminParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
