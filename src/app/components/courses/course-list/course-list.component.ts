import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/ models/course.model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses : Course[] = []; 

  constructor( private coursesService : CoursesService ) { }

  ngOnInit(): void {
    this.coursesService.getAllCourses().subscribe(
      {
        next : courses => {
          console.log(courses)
          this.courses = courses
        } , 
        error : response => {
          console.error(response)
        }
      }
    )
  }

}
