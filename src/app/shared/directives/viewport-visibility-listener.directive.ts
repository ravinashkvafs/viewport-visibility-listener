import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appViewportVisibilityListener]'
})
export class ViewportVisibilityListenerDirective {

  constructor(private el: ElementRef) { }

  viewportListener: any = null;
  viewportVisibleFlag: boolean = false;
  @Output() onViewVisibile: any = new EventEmitter();

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
      threshold: 0.2     // 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked
    });

    this.viewportListener.observe(this.el.nativeElement as HTMLElement);
  }

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
