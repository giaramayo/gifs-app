import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {
  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);
  query = signal('');

  onSearch(query: string) {
    if(!query) return;
    this.query.set(query);
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp);
    });
  }
}
