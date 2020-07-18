import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
 
  name:string = "Angular Hooks";

  @ViewChild('btn') button: ElementRef



  ngOnChanges() {
    console.log('1changes');
  }
  ngOnInit() {
    console.log('2init')
  }
  ngDoCheck() {
    console.log('3docheck')
  }
  ngAfterContentInit() {
    console.log('4contentInit')
  }
  ngAfterContentChecked() {
    console.log('5AfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('6AfterViewInit')
  Observable.fromEvent(this.button.nativeElement, 'click').debounceTime(1000).subscribe(i => console.warn('After one second!!'));
  }
  ngAfterViewChecked() {
    console.log('7AfterViewChecked')
  }

  ngOnDestroy() {
    console.log('8Destroy')
  }


}
