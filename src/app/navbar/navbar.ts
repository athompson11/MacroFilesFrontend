import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Menubutton } from "../menubutton/menubutton";

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatIconModule, Menubutton],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @Input() siteName: string = '';
  @Output() toggleDrawer = new EventEmitter<void>();

  get siteTitle() {
    return this.siteName;
  }

  onToggleDrawer() {
    this.toggleDrawer.emit();
  }
}
