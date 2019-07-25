import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['',Validators.required],
    address: ['',Validators.required],
     area: ['',Validators.required],
     city : ['',Validators.required],
     pincode: ['',Validators.required],
     state: ['',Validators.required],
      age: ['',Validators.required],
      gender: ['',Validators.required],
      email: ['',Validators.required],
      m_no: ['',Validators.required],
      dob: ['',Validators.required],
      b_grp: ['',Validators.required]
  });
  
  myFunction(){
  
  }

  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
