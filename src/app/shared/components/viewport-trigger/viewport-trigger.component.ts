import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-viewport-trigger',
  templateUrl: './viewport-trigger.component.html',
  styleUrls: ['./viewport-trigger.component.scss']
})
export class ViewportTriggerComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    if (window.IntersectionObserver) {
      this.viewportListener = new IntersectionObserver(entries => {

        if (entries[0].isIntersecting === true) {
          // console.log(`Entries: ${entries}`)
          this.onViewVisibility();
        }
        else {
          // this.viewportVisibleFlag = false;
        }
      }, {
        root: null,
        rootMargin: "100px",
        threshold: 0.11
      });

      this.viewportListener.observe(this.el.nativeElement as HTMLElement);
    }
    else
      alert('Not Supported !');
  }

  viewportListener: any = new Subject();
  viewportVisibleFlag: boolean = false;
  @Output() onViewVisibile: any = new EventEmitter();

  onViewVisibility() {
    this.viewportVisibleFlag = true;
    // Probably needs to be called in production        
    this.viewportListener.disconnect();         // disconnect just after first view
    this.onViewVisibile.emit(this.viewportVisibleFlag);
  }

  ngOnDestroy() {
    this.viewportListener.disconnect();
  }

}
