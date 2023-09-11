import { Injectable, Signal, WritableSignal, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConditionState {
  public isMenuOpen: WritableSignal<boolean> = signal<boolean>(false);
  public isSettingsOpen: WritableSignal<boolean> = signal<boolean>(false);

  public toggleMenuMenu = () => {
    this.isMenuOpen.set(!this.isMenuOpen());
  };

  public toggleSettingsMenu = () => {
    this.isSettingsOpen.set(!this.isSettingsOpen());
  };
}
