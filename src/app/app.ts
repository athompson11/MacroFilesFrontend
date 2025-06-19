import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Drawer } from './drawer/drawer';
import { Fileview } from "./fileview/fileview";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Drawer, Fileview],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  @ViewChild(Drawer) drawerComponent!: Drawer;
  protected title = 'MacroFilesFrontend';
}
