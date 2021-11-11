import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IntersectionStatus } from '../shared/functions/scroll-listener';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home2Component implements OnInit {

  constructor() { }

  list: any = [];
  visibilityStatus: { [key: number]: IntersectionStatus } = {};
  intersectionStatus = IntersectionStatus;

  ngOnInit() {
    for (let n = 0; n < 1000; n++) {
      this.list.push(n);
    }
  }

  onVisibilityChanged(index: number, status: IntersectionStatus) {
    console.log('called')
    this.visibilityStatus[index] = status;
  }

  trackByIndex(index: number) {
    return index;
  }

}
