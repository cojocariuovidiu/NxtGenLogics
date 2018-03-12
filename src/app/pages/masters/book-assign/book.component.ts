import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { CustomValidators } from 'ng2-validation';
import {AuthService} from '../../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import { SharedService } from '../../../layouts/shared-service';


@Component({
  selector: 'app-book-assign',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class PageBookAssignComponent implements OnInit {
  pageTitle: string = 'Book Assign';
  book_no_from: Number;
  book_no_to: Number;
  issued_to: String;
  issue_date: Date;
  issued_by: String;
  status: String;
  users: any;
  booknos: any;
  public form: FormGroup;

  constructor( 
    private fb: FormBuilder,
    private _sharedService: SharedService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService 
  ) {
    
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.form = this.fb.group({
      book_no_from: [null, Validators.compose([Validators.required,Validators.minLength(1), Validators.maxLength(11), CustomValidators.digits])],
      book_no_to: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(11), CustomValidators.digits])],
      issued_to: [null, Validators.compose([Validators.required])],
      issue_date: [null],
      issued_by: [null]
    
    });

    this.authService.listUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
        },err => {
          console.log(err);
          return false;
      });

      this.authService.listBooknos().subscribe(data => {
        this.booknos = data;
        console.log(this.booknos);
          },err => {
            console.log(err);
            return false;
        });
  
  }

  deleteBookNo(id){
    this.authService.deleteBook(id).subscribe(data => {
      console.log(id+" deleted"); 
  },err => {
    console.log(err);
    return false;
  });
  }


  onBookAssignSubmit(){
    const book = {
      book_no_from: this.book_no_from,
      book_no_to: this.book_no_to,
      issued_to: this.issued_to,
      issue_date: this.issue_date,
      issued_by: 'admin',
      status: 'open'
    }
    this.authService.assignBook(book).subscribe(data => {
      if(data.status==201){
        this.flashMessage.show('Book Assign Successfull', {cssClass: 'alert-success', timeout: 3000});
       // this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
       // this.router.navigate(['/register']);
      }
    });
  }

 

}
