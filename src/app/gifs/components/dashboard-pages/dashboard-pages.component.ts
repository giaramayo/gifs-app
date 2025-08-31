import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../side-menu/side-menu.component";

@Component({
  selector: 'gifs-dashboard-pages',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPagesComponent { }
