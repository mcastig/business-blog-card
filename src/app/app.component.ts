import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BusinessBlogCardComponent } from './business-blog-card/business-blog-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BusinessBlogCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'business-blog-card';
}
