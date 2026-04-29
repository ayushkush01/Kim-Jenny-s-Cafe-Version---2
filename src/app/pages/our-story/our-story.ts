import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './our-story.html',
  styles: []
})
export class OurStoryComponent {
  // Component logic can be added here if needed
  // Currently using CSS animations for scroll effects
}
