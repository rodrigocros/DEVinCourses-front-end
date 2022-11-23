import { Component, OnInit } from '@angular/core';
import { IRegistration } from 'src/app/models/registration';
import { IUser } from 'src/app/models/user';
import { TrainingService } from 'src/app/services/training/training.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'pro-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userActive!:IUser;

  registration:IRegistration= {
    id:0,
    userId: 0,
    trainingId:0,
    status:0
  };
  
  constructor(private user:UserService, private trainingService:TrainingService) {
  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.trainingService.getUserByToken(this.trainingService.token)
    .subscribe((user:IUser) => {
      this.userActive = user;
      this.registration.userId = this.userActive.id;      
    })
  }   
}
