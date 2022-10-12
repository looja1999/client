import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/ models/course.model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  addCourseData : Course = {
    id : '', 
    courseName : '', 
    courseTeacher : ''
  }; 

  constructor(private courseService : CoursesService, private router : Router) { }

  ngOnInit(): void {
  } 

  addCourse() {

    this.addCourseData.id = '888e6129-1e6d-4971-8e5a-8c7d69ef601f'

    this.courseService.addCourse(this.addCourseData).subscribe(
      {
        next : course => {
          this.router.navigate(["/course"])
        }, 
        error : response => {
          console.error(response); 
        }
      }
    ); 
  }

}
