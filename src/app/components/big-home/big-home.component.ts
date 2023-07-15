import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-big-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './big-home.component.html'
})
export class BigHomeComponent {

}
