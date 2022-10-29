import { Component, Input, OnInit } from '@angular/core';
import { BreadcrumbParams } from './breadcrumb.interface';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() params : BreadcrumbParams = {
    title: "",
    subtitle: ""
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.params);
  }

}
