import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutobePlaylistComponent } from './youtobe-playlist.component';

describe('YoutobePlaylistComponent', () => {
  let component: YoutobePlaylistComponent;
  let fixture: ComponentFixture<YoutobePlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutobePlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutobePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
