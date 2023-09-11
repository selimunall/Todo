import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    selector: 'calender',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'calender.component.html',
    imports: [NgClass, NgFor]
})

export class CalenderComponent implements OnInit {
    public ngOnInit(): void {
        const curr = new Date; // get current date
        const first = (curr.getDate() - curr.getDay()) +1; // First day is the day of the month - the day of the week
        const last = first + 6; // last day is the first day + 6

        const firstday = new Date(curr.setDate(first)).toUTCString();
        const lastday = new Date(curr.setDate(last)).toUTCString();

        console.log(firstday)
        "Sun, 06 Mar 2011 12:25:40 GMT"
        console.log(lastday)
        "Sat, 12 Mar 2011 12:25:40 GMT"
    }
    
}