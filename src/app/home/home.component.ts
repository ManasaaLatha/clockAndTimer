import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription, Observable} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { timer } from 'rxjs/observable/timer';
import { take, map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showTimer: boolean;
  currentTime: number;
  showClock: boolean;
  private tick: number;
  countDown;
   count = 8;

  constructor() { }

  ngOnInit() {
    
  }

  clockClick () {
    this.showClock = true;
    this.currentTime = Date.now();
  }

  timerClick() {
    this.showTimer = true;
    this.countDown = timer(0,1000 * 60).pipe(
      take(this.count),
      map(()=> --this.count)
   );
  }
  
}
