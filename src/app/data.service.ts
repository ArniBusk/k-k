import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Images } from "./Classes/images";
import { Observable, BehaviorSubject } from "rxjs";
import { Item } from "./Classes/item";

@Injectable({
  providedIn: "root"
})
export class DataService {
  APIKey: string = "AIzaSyBJx2sOVR4_U2OdfJye_DAaAhgBiw3dlk4";
  APIurl: string =
    "https://content.googleapis.com/customsearch/v1?cx=001361074102112665899%3Ap7mybnrloug&q=";

  imagesToDisplay: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  displayBoolean: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {}

  submitSearch(a: string): Observable<Images> {
    return this.http.get<Images>(
      `${this.APIurl}${a}&searchType=image&key=${this.APIKey}`
    );
  }

  cleanUpList(list: Item[]) {
    for (let i = 0; i < list.length; i++) {
      const e = list[i];
      if (e.link.substr(0, 1) === "x") {
        list.splice(i, 1);
        i--;
      }
    }
    this.imagesToDisplay.next(list);
  }
}
