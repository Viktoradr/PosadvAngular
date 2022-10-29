import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  loading = false;
  progressCount = 0;

  constructor(
    public sanitizer: DomSanitizer,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(events =>{
      if (events instanceof NavigationStart) {
        this.loading = true;
        this.progressCount = 0;
      }
      if (events instanceof NavigationEnd) {
        this.progressCount = 100;
        setTimeout(() => {
          this.loading = false;
        }, 400);
      }
    });
  }
}
