import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {AuthService} from '../../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import { SharedService } from '../../../layouts/shared-service';
import { forEach } from '@angular/router/src/utils/collection';
import { ValidateService } from 'app/services/validate.service';
//import { Stream } from 'stream';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class PageCompanyListComponent implements OnInit {
  pageTitle: string = 'Company List';
  res: any;
  
  
 
  constructor( 
    private fb: FormBuilder, 
    private _sharedService: SharedService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService
     ) {
    this._sharedService.emitChange(this.pageTitle);
 
  }
  
  ngOnInit() {
    
      this.authService.listCompanies().subscribe(data => {
        
          this.res = data;
          console.log(this.res);
        
      },err => {
        console.log(err);
        return false;
      });    
    
  }

  deleteCompany(id){
    this.authService.deleteCompany(id).subscribe(data => {
        
      
      console.log(id+" deleted");
    
  },err => {
    console.log(err);
    return false;
  });
  }

 
}
