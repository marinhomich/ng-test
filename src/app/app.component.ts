import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LikeWidgetComponent } from './shared/components/like-widget/like-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LikeWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-test';
  public likes = 0;

  public like(): void {
    this.likes++;
  }
}
