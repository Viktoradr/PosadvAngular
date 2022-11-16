import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BreadcrumbParams } from 'src/app/components/breadcrumb/breadcrumb.interface';
import { IPrazoTable } from 'src/app/interfaces/prazo.interface';

@Component({
  selector: 'consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent implements OnInit {
  params: BreadcrumbParams = {
    title: "Prazo",
    subtitle: "Consultar"
  };

  formulario: FormGroup;

  tableParams: string[] = [
    'id',
    'data',
    'tipo',
    'descricao',
    'numeroProcesso'
  ];

  tableHeaders: string[] = [
    'ID',
    'Data',
    'Tipo',
    'Descrição',
    'Número do Processo'
  ];
  tableData: IPrazoTable[] = [
    {
      id: '1',
      tipo: 'Audiência',
      descricao: 'Audiência de acordo',
      numeroProcesso: '0000971-64.2018.5.13.0002',
      data: '10/10/2021',
    },
  ];

  constructor(fb: FormBuilder) {
    this.formulario = fb.group({
      tipo: [''],
      numeroProcesso: [''],
      dataInicio: [null],
      dataFim: [null],
    });
  }

  ngOnInit(): void {}

  getSelected(prazos: IPrazoTable[]) {
    console.log(prazos);
  }

}
