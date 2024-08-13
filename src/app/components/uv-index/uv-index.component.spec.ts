import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UVIndexComponent } from './uv-index.component';

describe('UvIndexComponent', () => {
  let component: UVIndexComponent;
  let fixture: ComponentFixture<UVIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UVIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UVIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
