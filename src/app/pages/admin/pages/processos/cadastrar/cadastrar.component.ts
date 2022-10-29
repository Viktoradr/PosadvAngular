import { Component, OnInit } from '@angular/core';
import { BreadcrumbParams } from './../../../../../components/breadcrumb/breadcrumb.interface';

@Component({
  selector: 'cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  params: BreadcrumbParams = {
    title: "Processo",
    subtitle: "Cadastrar"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
