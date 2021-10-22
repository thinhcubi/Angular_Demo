import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {YoutobePlaylistComponent} from "./youtobe-playlist/youtobe-playlist.component";
import {YoutobePlayerComponent} from "./youtobe-player/youtobe-player.component";

const routes: Routes = [
  {
    path: 'youtube',
    component: YoutobePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutobePlayerComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
