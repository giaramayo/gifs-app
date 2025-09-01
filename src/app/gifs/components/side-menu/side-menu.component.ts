import { Component } from '@angular/core';
import { SideMenuOptionsComponent } from './side-menu-options/side-menu-options.component';
import { SideMenuHeaderComponent } from './side-menu-header/side-menu-header.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  template: `
    <div id="menu" class="w-[250px] bg-gray-900 min-h-screen z-10 text-slate-300 fixed left-0 h-screen">
      <gifs-side-menu-header />
      <gifs-side-menu-options />
    </div>
  `
})
export class SideMenuComponent { }
