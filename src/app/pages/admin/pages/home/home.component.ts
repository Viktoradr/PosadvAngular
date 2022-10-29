
import { Component, OnInit } from '@angular/core';
import { BreadcrumbParams } from './../../../../components/breadcrumb/breadcrumb.interface';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  params: BreadcrumbParams = {
    title: "Home",
    subtitle: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
