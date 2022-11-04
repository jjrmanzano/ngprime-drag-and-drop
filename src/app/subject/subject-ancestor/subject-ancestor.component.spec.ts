import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SubjectAncestorComponent } from './subject-ancestor.component';
import { SubjectParentComponent } from '../subject-parent/subject-parent.component';
import {SubjectChildComponent} from "../subject-child/subject-child.component";

describe('SubjectAncestorComponent', () => {
  let component: SubjectAncestorComponent;
  let fixture: ComponentFixture<SubjectAncestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SubjectAncestorComponent,
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
    fixture = TestBed.createComponent(SubjectAncestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
