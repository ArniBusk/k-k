import { Component, OnInit, Input } from "@angular/core";
import { Item } from "../Classes/item";
import { DataService } from "../data.service";

@Component({
  selector: "app-selected-image",
  templateUrl: "./selected-image.component.html",
  styleUrls: ["./selected-image.component.css"]
})
export class SelectedImageComponent implements OnInit {
  constructor() {}

  @Input() selectedImg: Item;

  ngOnInit() {}

  openInNewTab() {
    window.open(this.selectedImg.link, "_blank");
  }

  viewArticleInNewTab() {
    window.open(this.selectedImg.image.contextLink, "_blank");
  }
}
