import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Observable,map } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-fauna',
  imports: [MatButtonModule,MatCardModule,AsyncPipe],
  templateUrl: './fauna.html',
  styleUrl: './fauna.css',
})
export class Fauna  implements OnInit{
   
  constructor(private http:HttpClient){}
  wildlife$!: Observable<any[]>;


  ngOnInit(): void {
    this.wildlife$ = this.http.get<any>('assets/wildlife_gallery.json').pipe(
      map(data => data.wildlife_gallery)
    );
  }
}
