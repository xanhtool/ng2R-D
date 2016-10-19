import { Component, Inject,  Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector : 'child',
    template : `
        <button (click)="sendNotification()">Notify my parent!</button>
    `
})
export class ChildToParentComponent {
    @Output() notifyParent: EventEmitter<any> = new EventEmitter();
    sendNotification() {
        this.notifyParent.emit('hello MaMa');
    }

}
