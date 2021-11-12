import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp9',
  templateUrl: './comp9.component.html',
  styleUrls: ['./comp9.component.scss']
})
export class Comp9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(`!!! Component9 Loaded !!!`);
  }

}
