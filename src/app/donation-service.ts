import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DonationService {

  constructor(private http:HttpClient){}

  donate(phone:string, amount: number){
    return this.http.post('http://localhost:3000/api/donate',{phone,amount});
  }
  
}
