import { Injectable, signal } from '@angular/core';

@Injectable()
export class TagState {
    public isMenuOpen = signal(false);
    public listTagsMenuOpen = signal(false);
    public tagTagsMenuOpen = signal(false);
    public fromTag = signal(true);

    


    public openListTag(event: boolean){
        this.listTagsMenuOpen.set(event);
    }

    public openTagsTag(event:boolean){
        this.tagTagsMenuOpen.set(event);
    }
    
    
}
