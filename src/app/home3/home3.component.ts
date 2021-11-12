import { Component, OnInit } from '@angular/core';

enum SectionVisibilityEnum {
  S4 = 'S4',
  S5 = 'S5',
  S6 = 'S6',
  S7 = 'S7',
  S8 = 'S8',
  S9 = 'S9',
}

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.scss']
})
export class Home3Component implements OnInit {

  constructor() {
    this.visibileSectionsTrigger = {};
  }

  ngOnInit(): void { }

  visibileSectionsTrigger: any = {};
  sectionVisibilityEnum = SectionVisibilityEnum;

  // Function which gets triggered when the section is visible in viewport
  onViewVisibileMain(id: any) {
    // console.log(`MAIN ID: ${id}`)
    this.visibileSectionsTrigger[id] = true;          // Marking the section using Section-id as VISIBLE
  }

  // onNotSupported() {
  //   Object.values(SectionVisibilityEnum).forEach(section => {
  //     this.visibileSectionsTrigger[section] = true;
  //   });
  // }

}
