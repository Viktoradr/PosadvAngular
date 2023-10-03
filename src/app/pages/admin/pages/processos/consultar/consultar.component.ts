import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IProcessoTable } from 'src/app/interfaces/processo.interface';
import { BreadcrumbParams } from './../../../../../components/breadcrumb/breadcrumb.interface';

@Component({
  selector: 'consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss'],
})
export class ConsultarComponent implements OnInit {
  params: BreadcrumbParams = {
    title: 'Processo',
    subtitle: 'Consultar',
  };

  formulario: FormGroup;

  tableParams: string[] = [
    'id',
    'numeroProcesso',
    'tribunal',
    'dataCadastro',
    'ativo',
  ];
  tableHeaders: string[] = [
    'ID',
    'Número do Processo',
    'Tribunal',
    'Data de Cadastro',
    'Ativo',
  ];
  tableData: IProcessoTable[] = [
    {
      id: '1',
      numeroProcesso: '0000971-64.2018.5.13.0002',
      tribunal: 'Tribunal do Rio de Janeiro',
      dataCadastro: new Date(),
      ativo: "Sim",
    },
    {
      id: '2',
      numeroProcesso: '0000222-64.2018.5.13.0002',
      tribunal: 'Tribunal de São Paulo',
      dataCadastro: new Date(),
      ativo: "Não",
    },
  ];

  constructor(fb: FormBuilder) {
    this.formulario = fb.group({
      numeroProcesso: [''],
      tribunal: [''],
      dataCadastroInicio: [null],
      dataCadastroFim: [null],
    });
  }

  ngOnInit(): void {}

  getSelected(processos: IProcessoTable[]) {
    console.log(processos)
  }
}
