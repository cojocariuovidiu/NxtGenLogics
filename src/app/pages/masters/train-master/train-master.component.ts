import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { SharedService } from '../../../layouts/shared-service';
import {AuthService} from '../../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';



@Component({
  selector: 'app-train-master',
  templateUrl: './train-master.component.html',
  styleUrls: ['./train-master.component.scss']
})
export class PageTrainMasterComponent implements OnInit {
  pageTitle: string = 'Train Master';
  tname: String;
  sname: String;
  dname: String;
  dtime: String;
  atime: String;
  trainno: String;
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
      tname: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      sname: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      dname: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      dtime: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      atime: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      trainno: [null, Validators.compose([Validators.required])]
      
    });
  }

  onAddtrainSubmit(){
    const train = {
      tname: this.tname,
      sname: this.sname,
      dname: this.dname,
      dtime: this.dtime,
      atime: this.atime,
      trainno: this.trainno

    }
    this.authService.addTrain(train).subscribe(data => {
      if(data.success){
        this.flashMessage.show('train added', {cssClass: 'alert-success', timeout: 3000});
       // this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
       // this.router.navigate(['/register']);
      }
    });
  }

}
