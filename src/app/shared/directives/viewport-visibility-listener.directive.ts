import { ContentChild, Directive, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Home4Component } from 'src/app/home4/home4.component';

@Directive({
  selector: '[appViewportVisibilityListener]'
})
export class ViewportVisibilityListenerDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  viewportListener: any = null;
  trackObj: any = {};
  nextId: any = null;
  @Input() set appViewportVisibilityListenerNextTrack(trackObj: any) {
    this.trackObj = trackObj;
  }
  @Input() set appViewportVisibilityListenerNextId(nextId: any) {
    this.nextId = nextId;
  }

  ngOnInit() {
    // console.log(this.appViewportVisibilityListenerNextTrack, this.appViewportVisibilityListenerNextId);
  }

  disconnectOnceVisible() {
    this.viewportListener.disconnect();         // disconnect just after first view
  }

  @Input() set appViewportVisibilityListener(element: any) {

    const el = new ElementRef(element);

    this.viewportListener = new IntersectionObserver(entries => {

      if (entries[0].isIntersecting === true) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.disconnectOnceVisible();
        if (this.trackObj)
          this.trackObj[this.nextId] = true;
      }
      else {
        this.viewContainer.clear();
      }
    }, {
      root: null,
      rootMargin: "100px",
      threshold: 0.2     // 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked
    });

    this.viewportListener.observe(el.nativeElement as HTMLElement);

  }

  ngOnDestroy() {
    this.disconnectOnceVisible();
  }

}
