import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/ models/course.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  courseDetails : Course = {
    id : '', 
    courseName : '', 
    courseTeacher : ''
  }

  constructor(private route : ActivatedRoute, private courseService : CoursesService, private router : Router) {
    this.route.paramMap.subscribe(
      {
        next : (params) => {
          const id = params.get('id'); 

          if (id) { 
            this.courseService.getCourse(id).subscribe({
              next : response => {
                console.log(response)
                this.courseDetails = response; 
              }
            })
          }
        }
      }
    )
   }

  ngOnInit(): void {
  
  }
  
  updateCourse() {
    this.courseService.updateCourse(this.courseDetails.id, this.courseDetails).subscribe(
      {
        next : response => {
          this.router.navigate(['course']);
        }
      }
    ); 
  } 

  deleteCourse(id : string ) {
    this.courseService.deleteCourse(id).subscribe(
      {
        next : response => {
          this.router.navigate(['course']);
        }
      }
    ); 
  } 



}
