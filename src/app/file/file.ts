import { Component, Input, OnChanges, HostBinding } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-file',
  imports: [MatIconModule, MatListModule],
  templateUrl: './file.html',
  styleUrl: './file.scss'
})
export class File implements OnChanges {
  @Input() filename!: string;
  @Input() selected: boolean = false;

  @HostBinding('class.selected') get isSelected() {
    return this.selected;
  }

  filetype: string = 'text/plain';
  fileicon: string = 'text_snippet';

  ngOnChanges(): void {
    if (this.filename.endsWith('.txt')) {
      this.filetype = 'Text';
      this.fileicon = 'text_snippet';
    }
    else if (this.filename.endsWith('.jpg') || this.filename.endsWith('.jpeg')) {
      this.filetype = 'Jpeg';
      this.fileicon = 'image';
    }
    else if (this.filename.endsWith('.png')) {
      this.filetype = 'Png';
      this.fileicon = 'image';
    }
    else if (this.filename.endsWith('.pdf')) {
      this.filetype = 'Pdf';
      this.fileicon = 'picture_as_pdf';
    }
    else if (this.filename.endsWith('.mp3')) {
      this.filetype = 'Mp3';
      this.fileicon = 'audio_file';
    }
    else if (this.filename.endsWith('.mp4')) {
      this.filetype = 'Mp4';
      this.fileicon = 'video_file';
    }
    else if (this.filename.endsWith('.zip')) {
      this.filetype = 'Zip';
      this.fileicon = 'folder_zip';
    }
    else {
      this.filetype = 'Other';
      this.fileicon = 'insert_drive_file';
    }
  }
}
