import { Component, Input,OnChanges } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  ngOnChanges() {
    console.log('1 child  changes');
  }
  ngOnInit() {
    console.log('2 child init')
  }
  ngDoCheck() {
    console.log('3 child docheck')
  }
  ngAfterContentInit() {
    console.log('4 child contentInit')
  }
  ngAfterContentChecked() {
    console.log('5 child AfterContentChecked')
  }
    ngAfterViewInit() {
    console.log('6 child AfterViewInit')
  }
  ngAfterViewChecked() {
    console.log('7 child AfterViewChecked')
  }
   

  ngOnDestroy() {
    console.log('8 child  Destroy')
  }

}
