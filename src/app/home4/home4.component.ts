import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.scss']
})
export class Home4Component implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  visibilityTrack: any = {};

  onViewVisibileMain(id: any) {
    console.log(`MAIN ID: ${id}`)
    this.visibilityTrack[id] = true;
  }

}
