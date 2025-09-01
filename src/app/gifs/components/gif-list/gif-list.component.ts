import { Component, ElementRef, inject, input, signal, viewChild } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';
import { GifListItemComponent } from './gif-list-item/gif-list-item.component';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  template: `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      #groupDivHist>
      @for (gif of gifs(); track gif) {
        <gif-list-item [imageUrl]="gif.url" [title]="gif.title" />
      }
    </div>
  `,
})
export class GifListComponent {
  gifs = input.required<Gif[]>();
  query = input.required<string>();

  gifService = inject(GifService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDivHist');
  trendingPage = signal(0);
  loading = signal(false);

  // 👇 en vez de escuchar el scroll en el div,
  // podés escucharlo en window para hacer el infinite scroll
  ngOnInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    const scrollTop = window.scrollY;
    const clientHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    const isAtBottom = scrollTop + clientHeight + 200 >= scrollHeight;

    if (isAtBottom && !this.loading()) {
      this.loading.set(true);
      this.trendingPage.update((pages) => pages + 1);
      this.gifService
        .searchGifs(this.query(), this.trendingPage())
        .subscribe({
          complete: () => this.loading.set(false),
        });
    }
  }
}
