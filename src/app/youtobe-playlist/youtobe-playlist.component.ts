import { Component, OnInit } from '@angular/core';
import {SongService} from "../service/song.service";
import {Song} from "../model/song";

@Component({
  selector: 'app-youtobe-playlist',
  templateUrl: './youtobe-playlist.component.html',
  styleUrls: ['./youtobe-playlist.component.css']
})
export class YoutobePlaylistComponent implements OnInit {
    playlist: Song[] = []
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.playlist = this.songService.playlist
  }

}
