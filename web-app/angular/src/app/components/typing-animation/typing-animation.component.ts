import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-typing-animation',
  standalone: true,
  imports: [],
  templateUrl: './typing-animation.component.html',
  styleUrl: './typing-animation.component.css'
})
export class TypingAnimationComponent implements OnChanges {
  @Input() text = '';
  displayedText = '';
  private currentIndex = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['text']) {
      this.resetAnimation();
    }
  }

  private resetAnimation() {
    this.displayedText = '';
    this.currentIndex = 0;
    this.typeText();
  }

  private typeText() {
    if (this.currentIndex < this.text.length) {
      this.displayedText += this.text[this.currentIndex];
      this.currentIndex++;
      setTimeout(() => this.typeText(), 100); // adjust typing speed here
    }
  }
}
