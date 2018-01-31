import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { SharedService } from '../../../layouts/shared-service';
import {AuthService} from '../../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';



@Component({
  selector: 'app-hub-master',
  templateUrl: './hub-master.component.html',
  styleUrls: ['./hub-master.component.scss']
})
export class PageHubMasterComponent implements OnInit {
  pageTitle: string = 'Hub Master';
  hub_code: String;
  hub_name: String;
  address: String;
  state: String;
  city: String;
  phone: String;
  contact_person: String;
  
  public form: FormGroup;

  constructor( private fb: FormBuilder, 
    private _sharedService: SharedService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService
    
  ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.form = this.fb.group({
      hub_code: [null, Validators.compose([Validators.required])],
      hub_name: [null, Validators.compose([Validators.required])],
      address: [null],
      city: [null, Validators.compose([Validators.required])],
      phone: [null],
      contact_person: [null]
    });
  }

  onAddHubSubmit(){
    const hub = {
      hub_code: this.hub_code,
      hub_name: this.hub_name,
      address: this.address,
      city: this.city,
      phone: this.phone,
      contact_person: this.contact_person 

    }
    this.authService.addHub(hub).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Hub added', {cssClass: 'alert-success', timeout: 3000});
       // this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
       // this.router.navigate(['/register']);
      }
    });
  }

}
