import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Item } from "../Classes/item";
import { Image } from "../Classes/image";

@Component({
  selector: "app-image-display",
  templateUrl: "./image-display.component.html",
  styleUrls: ["./image-display.component.css"]
})
export class ImageDisplayComponent implements OnInit {
  images: Item[];
  gridView: boolean;
  selectedImg: Item;
  selectedItem: Item;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.imagesToDisplay.subscribe(x => {
      this.images = x;
      this.selectedImg = null;
    });

    this.data.displayBoolean.subscribe(x => {
      this.gridView = x;
      this.selectedImg = null;
    });
  }

  selectImage(i: Item) {
    this.selectedImg = i;
  }

  selectItem(i: Item) {
    this.selectedItem = i;
  }
}
