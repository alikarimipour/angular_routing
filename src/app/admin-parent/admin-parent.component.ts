import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-admin-parent',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './admin-parent.component.html',
  styleUrl: './admin-parent.component.css'
})
export class AdminParentComponent {

}
