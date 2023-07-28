// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Episode } from '../models/Episode';

// @Injectable({
//   providedIn: 'root'
// })
// export class WatchListService {
//   private data: { [key: string]: Episode[] } = {}; // Simulated data store (replace with API calls)

//   constructor() {}

//   // Simulate API call to update the data on the server
//   updateEpisode(episode: Episode): Observable<boolean> {
//     // Simulated API call (replace with actual API call)
//     this.data[episode.section].forEach((ep: Episode) => {
//       if (ep.Episode === episode.Episode) {
//         ep.watched = episode.watched;
//       }
//     });
//     return of(true); // Return an observable to simulate API response
//   }

//   // Simulate API call to get the data from the server
//   getData(): Observable<{ [key: string]: Episode[] }> {
//     // Simulated API call (replace with actual API call)
//     return of(this.data); // Return an observable to simulate API response
//   }
// }
