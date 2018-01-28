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
  hubcode: String;
  hname: String;
  haddress: String;
  hcity: String;
  contact: String;
  
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
      hubcode: [null, Validators.compose([Validators.required])],
      hname: [null, Validators.compose([Validators.required])],
      haddress: [null],
      hcity: [null, Validators.compose([Validators.required])],
      contact: [null]
      
    });
  }

  onAddHubSubmit(){
    const hub = {
      hubcode: this.hubcode,
      hname: this.hname,
      haddress: this.haddress,
      hcity: this.hcity,
      contact: this.contact
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
