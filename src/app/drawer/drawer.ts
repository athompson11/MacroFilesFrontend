import { Component, signal, ViewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-drawer',
  imports: [MatButtonModule, MatSelectModule,
    MatFormFieldModule, MatSidenavModule, MatListModule],
  templateUrl: './drawer.html',
  styleUrl: './drawer.scss'
})
export class Drawer { 
  drawerOpen = signal(false);
  public toggle() {
    this.drawerOpen.update(value => !value);
  }
}
