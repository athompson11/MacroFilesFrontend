import { Component, inject, PLATFORM_ID, signal, computed, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { File } from '../file/file';


@Component({
  selector: 'app-fileview',
  imports: [MatListModule, File],
  templateUrl: './fileview.html',
  styleUrl: './fileview.scss'
})
export class Fileview {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  
  files = signal<string[]>([]);
  selectedFiles: string[] = [];
  lastSelectedIndex: number | null = null;

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

    // Effect to watch for login state changes
    effect(() => {
      if (this.isLoggedIn()) {
        this.getUserFiles();
      } else {
        this.files.set([]);
        this.selectedFiles = [];
        this.lastSelectedIndex = null;
      }
    });
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

  private getUserFiles(): void {
    // For now, return a hardcoded array of filenames
    // In a real app, this would be an HTTP request to the backend
    const userFiles = [
  'file1.mp3', 'file2.mp4', 'file3.pdf', 'file4.docx', 'file5.jpg',
  'file6.png', 'file7.txt', 'file8.csv', 'file9.xlsx', 'file10.pptx',
  'file11.gif', 'file12.svg', 'file13.zip', 'file14.rar', 'file15.7z',
  'file16.tar', 'file17.gz', 'file18.json', 'file19.xml', 'file20.html',
  'file21.css', 'file22.js', 'file23.ts', 'file24.py', 'file25.java',
  'file26.cpp', 'file27.rb', 'file28.go', 'file29.sh', 'file30.bat',
  'file31.ini', 'file32.log', 'file33.conf', 'file34.md', 'file35.tex',
  'file36.heic', 'file37.webp', 'file38.mov', 'file39.avi', 'file40.flac'];
    this.files.set(userFiles);
  }

  onFileClick(event: MouseEvent, file: string): void {
    const filesArray = this.files();
    const index = filesArray.indexOf(file);

    if (event.shiftKey && this.lastSelectedIndex !== null) {
      // Select a range of files
      const start = Math.min(this.lastSelectedIndex, index);
      const end = Math.max(this.lastSelectedIndex, index);
      this.selectedFiles = [
        ...new Set([
          ...this.selectedFiles,
          ...filesArray.slice(start, end + 1),
        ]),
      ];
    } else if (event.ctrlKey || event.metaKey) {
      // Add or remove individual file
      if (this.selectedFiles.includes(file)) {
        this.selectedFiles = this.selectedFiles.filter(f => f !== file);
      } else {
        this.selectedFiles.push(file);
      }
    } else {
      // Select only the clicked file
      this.selectedFiles = [file];
    }

    this.lastSelectedIndex = index;
  }
}
