import { Component, OnInit } from '@angular/core';
import { BreadcrumbParams } from 'src/app/components/breadcrumb/breadcrumb.interface';

@Component({
  selector: 'meu-plano',
  templateUrl: './meu-plano.component.html',
  styleUrls: ['./meu-plano.component.scss']
})
export class MeuPlanoComponent implements OnInit {

  params: BreadcrumbParams = {
    title: "Meu Plano",
    subtitle: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
