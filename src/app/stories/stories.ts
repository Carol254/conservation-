import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable,map } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-stories',
  imports: [MatButtonModule ,MatCardModule ,AsyncPipe],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories  implements OnInit{
  

  constructor(private http: HttpClient){}
  stories$!: Observable<any[]>;

  ngOnInit(): void {
   this.stories$ = this.http.get<any>('assets/stories.json').pipe(
    map(data => data.conservation_stories)
   );
  }

}
