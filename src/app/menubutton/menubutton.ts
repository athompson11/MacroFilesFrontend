import { Component, EventEmitter, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menubutton',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './menubutton.html',
  styleUrl: './menubutton.scss'
})
export class Menubutton {
  @Output() toggleDrawer = new EventEmitter<void>();
}
