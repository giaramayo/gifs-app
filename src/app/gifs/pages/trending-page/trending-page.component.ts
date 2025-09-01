import { AfterViewInit, Component, ElementRef, HostListener, inject, viewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';

@Component({
  selector: 'trending-page',
  imports: [],
  templateUrl: './trending-page.component.html',
})
export class TrendingPageComponent implements AfterViewInit {
  gifService = inject(GifService);
  scrollStateService = inject(ScrollStateService);

  ngAfterViewInit(): void {
    // restaurar scroll global
    window.scrollTo({
      top: this.scrollStateService.trendingScrollState(),
      behavior: 'auto',
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = window.scrollY;
    const clientHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

    this.scrollStateService.trendingScrollState.set(scrollTop);

    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }
}
