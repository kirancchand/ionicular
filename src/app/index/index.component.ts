import { Component, OnInit } from '@angular/core';
import { VerifyService } from '../api/verify.service';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  cug_no;
  otp_no;
  updated_time;

  constructor( 
  			 private vs: VerifyService,
  			 private router: Router
  			 ) { }
   ngOnInit() {
  }

  async verifyCug()
  {
   const {cug_no} = this
	   try
	   {
	   	  const result=this.vs.cugVerify(cug_no);
	   	  //console.dir(result);
	   }
	   catch(err)
	   {

	   console.dir(err);

	   }
  }

    async verifyOtp()
  {

   const {cug_no,otp_no} = this
	   try
	   {
	   	  const result=this.vs.otpVerify(cug_no,otp_no);
	   	  //console.dir(result);
	   }
	   catch(err)
	   {

	   console.dir(err);

	   }
  }

     async sync()
  {
  	 const {cug_no} = this
  	 //const {updated_time} = '2019-04-05 16:29:43';
	   try
	   {
	   	  const result=this.vs.sync(cug_no);
	   	  //console.dir(result);
	   }
	   catch(err)
	   {

	   console.dir(err);

	   }
  }

  	async updatedTime()
  {
  	 const {cug_no} = this
	   try
	   {
	   	  const result=this.vs.updatedTime(cug_no);
	   	  //console.dir(result);
	   }
	   catch(err)
	   {

	   console.dir(err);

	   }
  }

  async check()
  {
	   try
	   {
	   	  const result=this.vs.check();

	   	  
	   }
	   catch(err)
	   {

	   console.dir(err);

	   }
  }

}
