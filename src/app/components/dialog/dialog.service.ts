import { Injectable, Type, inject } from '@angular/core';
import { DialogComponent } from './dialog.component';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';

@Injectable()
export class DialogService {
    private readonly dialog = inject(Dialog)

    public open<T>(component: Type<T>, title: string) {
        this.dialog.open(DialogComponent,{
            width: '60%',
            height: '60%',
            backdropClass: ['backdrop-blur-sm', 'bg-black/30','w-full','h-full'],
            data: {
                component,
                title
            }
        })
    }
}