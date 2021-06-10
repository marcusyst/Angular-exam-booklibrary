import { Component, Input } from '@angular/core'
import { IEvent } from './shared/event.model'

@Component ({
    selector: 'event-thumbnail',
    template: ` 
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div [ngClass]="getstartTimeClass()" 
     [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'9:00 am'">(Normal Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
    </div>
    <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location"> 
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
    </div>
            `, 
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .thumbnail { min-height: 210px }
            `] 
})
export class EventThumbnailComponent {
    @Input()
    event!: IEvent 

    getstartTimeClass() {
        if (this.event && this.event.time === '8:00 am')
            return 'green bold'
        return ''
    }
}
