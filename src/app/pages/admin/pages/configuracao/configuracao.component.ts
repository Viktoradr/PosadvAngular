import { Component, OnInit } from '@angular/core';
import { BreadcrumbParams } from 'src/app/components/breadcrumb/breadcrumb.interface';

@Component({
  selector: 'configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.scss']
})
export class ConfiguracaoComponent implements OnInit {

  params: BreadcrumbParams = {
    title: "Configuração",
    subtitle: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
