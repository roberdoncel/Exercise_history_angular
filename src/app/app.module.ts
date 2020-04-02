import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { HistoryComponent } from './history/history.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {PassingdataService} from "./services/passingdata.service";
import {AddtobookmarksService} from "./services/addtobookmarks.service";

import { SafeurlPipe } from './pipes/safeurl.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VideoViewComponent,
    HistoryComponent,
    BookmarksComponent,
    SafeurlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PassingdataService, AddtobookmarksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
