import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { DragDropModule } from 'primeng/dragdrop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './direct/direct-parent/parent.component';
import { ChildComponent } from './direct/direct-child/child.component';
import { SubjectAncestorComponent } from './subject/subject-ancestor/subject-ancestor.component';
import { SubjectParentComponent } from './subject/subject-parent/subject-parent.component';
import { SubjectChildComponent } from './subject/subject-child/subject-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SubjectAncestorComponent,
    SubjectParentComponent,
    SubjectChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
