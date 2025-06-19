import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { File } from '../file/file';
@Component({
  selector: 'app-fileview',
  imports: [MatListModule, File],
  templateUrl: './fileview.html',
  styleUrl: './fileview.scss'
})
export class Fileview {
  files: string[] = [
    'document1.txt',
    'image1.jpg',
    'image2.jpeg',
    'graphic1.png',
    'report1.pdf',
    'song1.mp3',
    'video1.mp4',
    'archive1.zip',
    'document2.txt',
    'image3.jpg',
    'graphic2.png',
    'report2.pdf',
    'song2.mp3',
    'video2.mp4',
    'archive2.zip',
    'document3.txt',
    'image4.jpeg',
    'graphic3.png',
    'report3.pdf',
    'song3.mp3',
    'video3.mp4',
    'archive3.zip',
    'document4.txt',
    'image5.jpg',
    'graphic4.png',
    'report4.pdf',
    'song4.mp3',
    'video4.mp4',
    'archive4.zip',
  ];
  selectedFiles: string[] = [];
  lastSelectedIndex: number | null = null;

  onFileClick(event: MouseEvent, file: string): void {
    const index = this.files.indexOf(file);

    if (event.shiftKey && this.lastSelectedIndex !== null) {
      // Select a range of files
      const start = Math.min(this.lastSelectedIndex, index);
      const end = Math.max(this.lastSelectedIndex, index);
      this.selectedFiles = [
        ...new Set([
          ...this.selectedFiles,
          ...this.files.slice(start, end + 1),
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
