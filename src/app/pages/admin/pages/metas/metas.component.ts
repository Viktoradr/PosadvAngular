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
  }

  metas = [
    { title: 'Project Velocity', percent: 50},
    { title: 'Process to be finished', percent: 20}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
