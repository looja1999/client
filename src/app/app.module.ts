import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCourseComponent } from './components/courses/add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { EditCourseComponent } from './components/courses/edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    AddCourseComponent,
    EditCourseComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
