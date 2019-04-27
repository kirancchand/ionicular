import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

cugurl = 'http://localhost/directory_appv1/kc_controller/KC_Controller/cug_verification';
otpurl = 'http://localhost/directory_appv1/kc_controller/KC_Controller/otp_verification';
syncurl = 'http://localhost/directory_appv1/kc_controller/KC_Controller/sync';
updatedtimeurl = 'http://localhost/directory_appv1/kc_controller/KC_Controller/updated_time';
checkurl = 'http://localhost/directory_appv1/kc_controller/KC_Controller/check';

  constructor(private http: HttpClient) { }
/*
  cugVerify(cug_no): Promise
            	{
            		//console.log(email);
          	  	const obj={
          	  				cug_no:cug_no,
          	  			  };
          	  			//return cug_no;
             		 //return this.http.post(`${this.uri}/check`);

                  //this.http.get(`${this.url}/kc_controller/KC_Controller/cug_verify`, obj).subscribe(res => console.log(res));
                  this.http.get(`${this.url}/kc_controller/KC_Controller/cug_verify`,cug_no).subscribe(res => console.log(res));
            	}*/
     cugVerify(cug_no){
		    const url = `${this.cugurl}/?cug_no=${cug_no}`;
		    return this.http.get(url)
		      .subscribe(response => console.log(response));
		  }

	 otpVerify(cug_no,otp_no){
		    const url = `${this.otpurl}/?otp_no=${otp_no}&&cug_no=${cug_no}`;
		    return this.http.get(url)
		      .subscribe(response => console.log(response));
		  }

	 sync(cug_no){

		    const url = `${this.syncurl}/?cug_no=${cug_no}`;
		    return this.http.get(url)
		      .subscribe(response =>{

		      		console.log(response);
		      		let list = ['kc_category','kc_contacts','kc_email','kc_groups','kc_phone_number'];
		      
					for (var i = 0; i < list.length;i++) {

					    if(response[i][list[i]]['count']==1)
		      			{
		      				console.log(response[i][list[i]]);
		      			}
		      			else
			      		{
			      			console.log("no updates in "+list[i]);
			      		}
					}
 		

		      });
		  }

	 updatedTime(cug_no){
		    const url = `${this.updatedtimeurl}/?cug_no=${cug_no}`;
		    return this.http.get(url)
		      .subscribe(response => console.log(response));
		  }
	 check(){
		    const url = `${this.checkurl}`;
		    return this.http.get(url)
		    	.subscribe(response => {

		    				if(response==1)
		    				{
		    					console.log("response");
		    				}
		    			}


		    		);

		  }

}
