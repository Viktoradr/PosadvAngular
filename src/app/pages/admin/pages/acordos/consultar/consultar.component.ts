import { Component, OnInit } from '@angular/core';
import { BreadcrumbParams } from 'src/app/components/breadcrumb/breadcrumb.interface';

@Component({
  selector: 'consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent implements OnInit {

  params: BreadcrumbParams = {
    title: "Acordo",
    subtitle: "Consultar"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
