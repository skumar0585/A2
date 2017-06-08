import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleryTitle = "Comic Gallery";
  gallery=[];
  constructor(private _galleryService: GalleryService) { }  
  ngOnInit() {
      this._galleryService.getData()
        .subscribe(resGalleryData => this.gallery = resGalleryData);
       
  }

}
