import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  template: `
    <div class="relative group">
      <img
        class="h-full w-full rounded-lg object-cover"
        [src]="imageUrl()"
        [alt]="title()"
      />
      <!-- Overlay con título -->
      <div class="absolute bottom-0 left-0 w-full bg-black/70 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition">
        {{ title() }}
      </div>

      <!-- Botón de copiar -->
      <button
        (click)="copyLink()"
        class="absolute top-2 right-10 bg-black/70 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition"
      >
        <i class="fa-regular fa-copy"></i>
      </button>

      <a
        [href]="'https://wa.me/?text=' + [title() + ' ' + imageUrl()]"
        target="_blank"
        class="absolute top-2 right-2 bg-green-600 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition"
      >
        <i class="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  `,
})
export class GifListItemComponent {
  imageUrl = input.required<string>();
  title = input<string>();

  copyLink() {
    navigator.clipboard.writeText(this.imageUrl()).then(() => {
      alert('Link copiado al portapapeles ✅');
    });
  }

  shareLink() {
    if (navigator.share) {
      navigator.share({
        title: this.title() ?? 'Mirá este GIF',
        text: 'Mirá este GIF que encontré',
        url: this.imageUrl(), // algunos navegadores pueden generar preview
      });
    } else {
      window.open('https://wa.me/?text=' + encodeURIComponent(this.imageUrl()), '_blank');
    }
  }

}

