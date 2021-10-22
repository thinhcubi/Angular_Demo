import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutobePlaylistComponent } from './youtobe-playlist/youtobe-playlist.component';
import { YoutobePlayerComponent } from './youtobe-player/youtobe-player.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutobePlaylistComponent,
    YoutobePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
