import { Component, OnInit } from '@angular/core';

enum HomeComponentListEnum {
  // COMP1 = 'comp1',
  // COMP2 = 'comp2',
  // COMP3 = 'comp3',
  // COMP4 = 'comp4',
  COMP5 = 'comp5',
  COMP6 = 'comp6',
  COMP7 = 'comp7',
  COMP8 = 'comp8',
  COMP9 = 'comp9'
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.componentVisibilityDict = Object.entries(HomeComponentListEnum).reduce((a: any, i: Array<any>) => {
      a[i[0]] = { key: i[1], value: false };
      return a;
    }, {});
    this.componentVisibility = Object.keys(this.componentVisibilityDict);
  }

  set: number = 50;
  count: number = 0;
  list: any[] = Array.from(new Array(this.set), (e, indx) => indx);

  visibilityTrackIndex: number = -1;
  componentVisibility: any[] = [];
  componentVisibilityDict: any = {};

  onScrollDown() {
    // if (this.count == 5) return;
    // console.log(++this.count);
    // this.list.push(
    //   ...Array.from(new Array(this.set), (e, indx) => this.set * this.count + indx)
    // );

    if (this.visibilityTrackIndex === this.componentVisibility.length - 1) return;
    console.log('b:', this.visibilityTrackIndex);
    this.componentVisibilityDict[this.componentVisibility[++this.visibilityTrackIndex]].value = true;
    console.log('a:', this.visibilityTrackIndex, this.componentVisibilityDict);
  }

  onScrollUp() {
    console.log(--this.count);
  }

}
