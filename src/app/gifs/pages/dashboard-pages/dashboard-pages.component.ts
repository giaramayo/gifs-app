import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'gifs-dashboard-pages',
  imports: [RouterOutlet, SideMenuComponent, FooterComponent],
  templateUrl: './dashboard-pages.component.html',
})
export default class DashboardPagesComponent { }
