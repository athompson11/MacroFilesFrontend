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
  files: string[] = [];
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
