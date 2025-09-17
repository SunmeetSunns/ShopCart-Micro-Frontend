import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { Hero } from "./hero/hero";
import { Header } from "./header/header";
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App implements OnInit{
  ngOnInit(): void {
    
  }
  showHero: boolean = true;
  protected readonly title = signal('host');
  constructor(private router: Router) { 
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.showHero = e.urlAfterRedirects === '/';
      });
  }
  
  }



