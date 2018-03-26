import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = true; // Change to false before deployment
  }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/signup');
    return this.http.post(ep, user,{headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/login');
    return this.http.post(ep, user,{headers: headers})
      .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/profile');
    return this.http.get(ep,{headers: headers})
      .map(res => res.json());
  }

  listUsers(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/userlist');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired();
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  prepEndpoint(ep){
    if(this.isDev){
      return 'http://localhost:3000/api/v1/'+ep;
    } else {
      return ep;
    }
  }
  addBooking(booking){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('booking');
    return this.http.post(ep, booking,{headers: headers})
      .map(res => res.json());
  }


  assignBook(book){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('book');
    return this.http.post(ep, book,{headers: headers})
      .map(res => res.json());
  }

  listBooknos(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('book');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }
  listBookentries(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('book/bookentry');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  getbookno(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('mix/book/one');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }
  deleteBook(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('book/'+id);
    return this.http.delete(ep,{headers: headers})
      .map(res => res.json());
  }

  listBookings(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('booking');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  deleteBooking(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('booking/'+id);
    return this.http.delete(ep,{headers: headers})
      .map(res => res.json());
  }
  getNewBookingById(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('booking/'+id);
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  getNewBookingAwb(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('mix/booking/one');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  companyBookings(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('mix/company/'+id);
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  listCompanies(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('company');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }
  getCompanyById(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('company/'+id);
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }
  deleteCompany(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('company/'+id);
    return this.http.delete(ep,{headers: headers})
      .map(res => res.json());
  }

  listBundles(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('bundle');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  listHubs(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('hubs');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  listHubBundles(hubcode){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('hubcode',hubcode);
    let ep = this.prepEndpoint('movements/bundles');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }
  listHubAwbs(hubcode){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('hubcode',hubcode);
    let ep = this.prepEndpoint('movements/awbs');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }
  listCurrentLoadings(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('movements/trainloadings');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  addBundle(bundle){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('bundle');
    return this.http.post(ep, bundle,{headers: headers})
      .map(res => res.json());
  }

  addMovement(movement){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('movements/add');
    return this.http.post(ep, movement,{headers: headers})
      .map(res => res.json());
  }

  updateMovement(movement){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('movements/update');
    return this.http.post(ep, movement,{headers: headers})
      .map(res => res.json());
  }

  addCompany(comp){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('company');
    return this.http.post(ep, comp,{headers: headers})
      .map(res => res.json());
  }
  
  updateCompany(comp,id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('company/'+id);
    return this.http.put(ep, comp,{headers: headers})
      .map(res => res.json());
  }
  
  addTrain(trains){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('trains');
    return this.http.post(ep, trains,{headers: headers})
      .map(res => res.json());

  }

  addDestination(destination){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('destination');
    return this.http.post(ep, destination,{headers: headers})
      .map(res => res.json());

  }

  listDestinations(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('destination');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json());
  }

  deleteDestination(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('destination/'+id);
    return this.http.delete(ep,{headers: headers})
      .map(res => res.json());
  }

  addHub(hubs){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('hub');
    return this.http.post(ep, hubs,{headers: headers})
      .map(res => res.json());

  }

}
