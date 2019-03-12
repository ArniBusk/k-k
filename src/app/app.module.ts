import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { ImageDisplayComponent } from './image-display/image-display.component';
import { SelectedImageComponent } from './selected-image/selected-image.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, ImageDisplayComponent, SelectedImageComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
