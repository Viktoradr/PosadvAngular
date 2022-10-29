import { Component, OnInit } from '@angular/core';
import { BreadcrumbParams } from 'src/app/components/breadcrumb/breadcrumb.interface';

@Component({
  selector: 'metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.scss']
})
export class MetasComponent implements OnInit {

  params: BreadcrumbParams = {
    title: "Metas",
    subtitle: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
