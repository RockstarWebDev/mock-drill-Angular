import { Component } from '@angular/core';

@Component({
  selector: 'app-char-counter',
  templateUrl: './char-counter.component.html',
  styleUrls: ['./char-counter.component.css']
})
export class CharCounterComponent {

  inputString: string = '';
  charCountResult: { [char: string]: number } = {};
  mostAppearingChar: string = '';
  count: number = 0;

  countChars(): void {
    const charCount: { [char: string]: number } = {};

    // Count occurrences of each character
    for (const char of this.inputString) {
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    let maxCount = 0;

    // Find the most appearing character
    for (const char in charCount) {
      if (charCount[char] > maxCount) {
        maxCount = charCount[char];
        this.mostAppearingChar = char;
      }
    }

    this.charCountResult = charCount;
    this.count = maxCount;
  }

}
