import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-viewport-trigger',
  templateUrl: './viewport-trigger.component.html',
  styleUrls: ['./viewport-trigger.component.scss']
})
export class ViewportTriggerComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    console.log('INIT Trigger');

    // if (window.IntersectionObserver) {
    //   this.viewportListener = new IntersectionObserver((entries, observer) => {
    //     console.log(`Entries: ${entries}`)
    //   }, {
    //     root: document.querySelector('#scrollArea'),
    //     rootMargin: '0px',
    //     threshold: 1.0          // 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked
    //   });
    // }
    // else {
    //   alert('no support')
    // }
  }

  ngAfterViewInit() {
    this.viewportListener = new IntersectionObserver(entries => {

      if (entries[0].isIntersecting === true) {
        console.log(`Entries: ${entries}`)
        this.onViewVisibility();
      }
      else {
        // this.viewportVisibleFlag = false;
      }
    }, {
      threshold: 0.75
    });

    this.viewportListener.observe(this.el.nativeElement as HTMLElement);
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
