import { Component, VERSION , OnInit} from '@angular/core';
import {of, from } from 'rxjs';
import {map,tap, take} from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2,4,6,8).subscribe(console.log);
    
    from([20,15,10, 5])
    .pipe(
      tap(item => console.log(`emitted item ... ${item}`)),
      map(item => item * 2),
      map(item => item -10),
      map(item => {
        if(item === 0){
          throw new Error("zero detected ");
        }

        return item;
      }),
      take(3)
    )
    .subscribe(
      item => console.log(`resulting item .. ${item}`),
      err => console.error(`error occurred ... ${err}`),
      () => console.log('Complete')

    );

    of('Apple1', 'Apple2' , 'Apple3')
    .subscribe(
      apple => console.log(`Apple was emmited ... ${apple}`),
      err => console.error(`Error occured .. ${err}`),
      () => console.log('No more apples, go home')
    )
  }
}
