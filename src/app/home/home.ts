import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Drawer } from '../drawer/drawer';
import { Fileview } from "../fileview/fileview";
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [Navbar, Drawer, Fileview],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  @ViewChild(Drawer) drawerComponent!: Drawer;
}
