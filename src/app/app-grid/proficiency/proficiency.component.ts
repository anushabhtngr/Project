import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proficiency',
  templateUrl: './proficiency.component.html',
  styleUrls: ['./proficiency.component.scss']
})
export class ProficiencyComponent implements OnInit {

  @Input() proficiency:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  updateColor(proficiency:number) {
    if (proficiency<21){
       return 'primary';
    } else if (proficiency>80){
       return 'accent';
    } else {
      return 'warn';
    }
 }

}
