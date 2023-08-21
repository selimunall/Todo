import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListColors } from 'src/app/model/colorType.model';

@Component({
  standalone: true,
  selector: 'list-components',
  templateUrl: './list-components.component.html',
  imports: [NgClass, NgIf],
})
export class ListComponentsComponent implements OnInit {
  @Input() public name!: String;
  @Input() public icon?: String;
  @Input() public color: ListColors | '' = '';
  @Input() public counter: Boolean = false;
  @Input() public selected: Boolean = false;
  @Input() public isMenuOpen: Boolean = false;

  ngOnInit(): void {
    console.log(this.color);
  }
}
