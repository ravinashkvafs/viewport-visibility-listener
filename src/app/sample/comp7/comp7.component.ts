import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp7',
  templateUrl: './comp7.component.html',
  styleUrls: ['./comp7.component.scss']
})
export class Comp7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(`!!! Component7 Loaded !!!`);
  }

}
