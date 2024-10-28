import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faThumbsUp, faAd} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './like-widget.component.html',
  styleUrl: './like-widget.component.scss',
  providers: [UniqueIdService]
})
export class LikeWidgetComponent implements OnInit{
  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id: string | null = null;

  public fonts = { faThumbsUp }

  constructor(private uniqueIdService: UniqueIdService){}

  public ngOnInit(): void {
    if(!this.id){
      this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget');
    }
  }

  public like(): void {
    this.liked.emit();
  }
}
