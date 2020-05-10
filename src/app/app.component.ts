import { Component } from '@angular/core';
import { User } from './user';
import {EnrollmentService} from"./enrollment.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topicHasError = true;
  topics = ['Angular','React', 'Vue']
  userModel = new User('Razib','razib@gmail.com', 9497777777, 'default', 'morning',true)

  constructor(private enrollmentService: EnrollmentService){ }

  topicValidate(value){
    if(value==="default"){
      this.topicHasError = true
    }else{
      this.topicHasError = false
    }
  }
  onSubmit(){
    this.enrollmentService.enroll(this.userModel)
    .subscribe(
      data=> console.log("success", data),
      error=> console.log('error', error)
    )

  }
}
