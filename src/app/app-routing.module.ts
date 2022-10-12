import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './components/courses/add-course/add-course.component';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { EditCourseComponent } from './components/courses/edit-course/edit-course.component';

const routes: Routes = [
  {
    path: "", 
    component : CourseListComponent
  }, 
  { 
    path : "course", 
    component : CourseListComponent
  }, {
    path : "course/add", 
    component : AddCourseComponent
  }, {
    path : "course/edit/:id", 
    component: EditCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
