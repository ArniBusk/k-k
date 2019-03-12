import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { JsonPipe } from "@angular/common";
import { Images } from "../Classes/images";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  localDisplayBoolean = true;

  constructor(private data: DataService) {}

  ngOnInit() {}

  onEnter(v: any) {
    this.data.submitSearch(v).subscribe(x => {
      if (x.items) {
        this.data.cleanUpList(x.items);
      }
      if (!x.items) {
        this.data.imagesToDisplay.next(null);
      }
    });
  }

  selectView(n: boolean) {
    this.data.displayBoolean.next(n);
    this.localDisplayBoolean = n;
  }
}
