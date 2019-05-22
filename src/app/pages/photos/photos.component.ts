import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photosRemote : any;

  constructor(private data: DataService){

  }

  ngOnInit() {
    this.photosRemote = this.data.getPhotos();
  }

}
