
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulationsComponent } from './regulations.component';

describe('RegulationsComponent', () => {
  let component: RegulationsComponent;
  let fixture: ComponentFixture<RegulationsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
