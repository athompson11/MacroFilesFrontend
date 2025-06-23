import { Component, ViewChild } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Drawer } from '../drawer/drawer';
import { Fileview } from "../fileview/fileview";

@Component({
  selector: 'app-home',
  imports: [Navbar, Drawer, Fileview],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  @ViewChild(Drawer) drawerComponent!: Drawer;
}