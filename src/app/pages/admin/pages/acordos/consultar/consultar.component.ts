import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BreadcrumbParams } from 'src/app/components/breadcrumb/breadcrumb.interface';
import { IAcordoTable } from 'src/app/interfaces/acordo.interface';

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

  formulario: FormGroup;

  tableParams: string[] = [
    'id',
    'tipo',
    'numeroProcesso',
    'dataCadastro',
    'ativo',
  ];
  tableHeaders: string[] = [
    'ID',
    'Tipo de Acordo',
    'Número do Processo',
    'Data de Cadastro',
    'Ativo',
  ];
  tableData: IAcordoTable[] = [
    {
      id: '1',
      tipo: 'Acordo Principal',
      numeroProcesso: '0000971-64.2018.5.13.0002',
      dataCadastro: '10/10/2021',
      ativo: "Sim",
    },
  ];

  constructor(fb: FormBuilder) {
    this.formulario = fb.group({
      tipo: [''],
      numeroProcesso: [''],
      dataCadastroInicio: [null],
      dataCadastroFim: [null],
    });
  }

  ngOnInit(): void {}

  getSelected(acordos: IAcordoTable[]) {
    console.log(acordos);
  }

}
