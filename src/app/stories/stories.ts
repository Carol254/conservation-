import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-stories',
  imports: [MatButtonModule ,MatCardModule],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {

}
