import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TypingAnimationComponent} from "./components/typing-animation/typing-animation.component";
import {NavComponent} from "./components/nav/nav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, TypingAnimationComponent, NavComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'dev-site-ui';
    phrases = ['the Developer', 'the Dad', 'the Husband', 'the Dungeon Master', 'the Gamer'];
    currentPhrase = '';
    currentIndex = 0;

    ngOnInit() {
        this.updatePhrase();
    }

    updatePhrase() {
        console.log('Updating phrase');
        this.currentPhrase = this.phrases[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
        setTimeout(() => this.updatePhrase(), 5000); // adjust display time here
    }
}
