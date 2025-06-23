import { Component, signal, inject, PLATFORM_ID, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-drawer',
  imports: [MatButtonModule, MatSelectModule,
    MatFormFieldModule, MatSidenavModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './drawer.html',
  styleUrl: './drawer.scss'
})
export class Drawer { 
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  
  drawerOpen = signal(false);
  
  // Signal to trigger rechecking of cookie on navigation changes
  private navigationTrigger = signal(0);
  
  isLoggedIn = computed(() => {
    // Access the navigation trigger to ensure this computed runs on navigation
    this.navigationTrigger();
    
    if (isPlatformBrowser(this.platformId)) {
      return this.getCookie('isLoggedIn') === 'true';
    }
    return false;
  });

  constructor() {
    // Update navigation trigger on route changes to refresh cookie check
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.navigationTrigger.update(v => v + 1);
        }
      });
    }
  }
  
  public toggle() {
    this.drawerOpen.update(value => !value);
    console.log("Drawer toggled, new state: " + this.drawerOpen());
  }

  private getCookie(name: string): string | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      // Remove the isLoggedIn cookie
      document.cookie = 'isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      // Refresh the page
      location.reload();
    }
  }
}
