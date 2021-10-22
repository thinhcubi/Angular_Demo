import { Component, OnInit } from '@angular/core';
import { SongService} from "../service/song.service";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute,ParamMap} from "@angular/router";

@Component({
  selector: 'app-youtobe-player',
  templateUrl: './youtobe-player.component.html',
  styleUrls: ['./youtobe-player.component.css']
})
export class YoutobePlayerComponent implements OnInit {
song: any;
  constructor(
    private songService: SongService,
    private activateRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.song = this.songService.findSongById(id);
    });
  }
  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
