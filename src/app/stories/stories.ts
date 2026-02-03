import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-stories',
  imports: [MatButtonModule ,MatCardModule],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories  implements OnInit{
  stories:any[]= [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<any>('assets/stories.json').subscribe(data =>{
      this.stories = data.conservation_stories;
    });
  }

}
