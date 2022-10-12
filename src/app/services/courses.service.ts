import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../ models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseApiUrl : string = environment.baseApiUrl; 

  constructor(private http: HttpClient) { }

  getAllCourses () : Observable<Course[]> {
    return this.http.get<Course[]>(this.baseApiUrl + "/api/course")
  }

  addCourse (addCourseData : Course) : Observable<Course> {
    return this.http.post<Course>(this.baseApiUrl + "/api/course", addCourseData)
  } 

  getCourse(id : string) : Observable<Course>{
    return this.http.get<Course>(this.baseApiUrl + "/api/course/" + id)
  }

  updateCourse (id: string, updateCourseReq : Course) : Observable<Course> {
    return this.http.put<Course>(this.baseApiUrl + "/api/course/" + id, updateCourseReq)
  }

  deleteCourse (id : string) : Observable<Course>{
    return this.http.delete<Course>(this.baseApiUrl + "/api/course/" + id); 
  }
}
