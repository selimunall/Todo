import { Injectable, Signal, WritableSignal, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConditionState {
  public isMenuOpen: WritableSignal<boolean> = signal<boolean>(true);
  public isSettingsOpen: WritableSignal<boolean> = signal<boolean>(false);

  public toggleMenuMenu = () => {
    this.isMenuOpen.set(!this.isMenuOpen());
  };

  public toggleSettingsMenu = (condition: boolean) => {
    this.isSettingsOpen.update((v) => !v);
    console.log('state', this.isSettingsOpen());
  };
}
