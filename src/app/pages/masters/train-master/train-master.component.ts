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
  train_name: String;
  train_source: String;
  train_destination: String;
  depart_atsource: String;
  arrival_atdest: String;
  train_number: String;
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
      train_name: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      train_source: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      train_destination: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      depart_atsource: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      arrival_atdest: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      train_number: [null, Validators.compose([Validators.required])]
      
    });
  }

  onAddtrainSubmit(){
    const train = {
      train_name: this.train_name,
      train_source: this.train_source,
      train_destination: this.train_destination,
      depart_atsource: this.depart_atsource,
      arrival_atdest: this.arrival_atdest,
      train_number: this.train_number

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
