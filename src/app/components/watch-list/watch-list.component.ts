import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Episode } from 'src/app/models/Episode';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss'],
  standalone: true,
  imports: [CommonModule, MatExpansionModule, HttpClientModule, MatTableModule, MatSlideToggleModule]
})
export class WatchListComponent implements OnInit {
  public seasons$!: Observable<any>;
  displayedColumns: string[] = ['Series', 'Episode', 'TitleNameOrEpisodeTitle', 'watched'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.seasons$ = this.http.get<any>('assets/data.json').pipe(
      map((data: { [key: string]: Episode[] }) => {
        return Object.entries(data).map(([season, episodes]) => ({
          season,
          episodes: episodes.map((episode: Episode) => ({
            ...episode
          }))
        }));
      })
    );
  }

  updateWatchedStatus(sectionIndex: number, episodeIndex: number, newValue: boolean) {
    this.seasons$.subscribe(seasons => {
      const episodeToUpdate = seasons[sectionIndex].episodes[episodeIndex];
      episodeToUpdate.watched = newValue;

      this.http.get<any>('assets/data.json').subscribe((data: { [key: string]: Episode[] }) => {
        data[seasons[sectionIndex].section][episodeIndex].watched = newValue;
        console.log('Data updated successfully!');
        //This will not save the web json file
      });
    });
  }
}
