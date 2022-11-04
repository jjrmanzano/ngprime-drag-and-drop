import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SubjectParentComponent } from './subject-parent.component';
import { SubjectChildComponent } from '../subject-child/subject-child.component';

describe('SubjectParentComponent', () => {
  let component: SubjectParentComponent;
  let fixture: ComponentFixture<SubjectParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SubjectParentComponent,
        SubjectChildComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
