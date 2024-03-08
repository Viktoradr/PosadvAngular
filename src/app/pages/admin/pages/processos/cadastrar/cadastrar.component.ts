import { Component, OnInit } from '@angular/core';
import { formatNumber } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IParte } from 'src/app/interfaces/parte.interface';
import { ProcessoService } from '../../../../../services/processo.service';
import { BreadcrumbParams } from './../../../../../components/breadcrumb/breadcrumb.interface';
import { formatCurrency } from 'src/app/shared/functions/mask';
import { SnackService } from 'src/app/provider/snack/snack.service';
import { limparNumero } from 'src/app/shared/functions/util';

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

  formDadosPrincipais: FormGroup;
  formDadosPartes: FormGroup;

  constructor(fb: FormBuilder, public service: ProcessoService, protected snack: SnackService) {
    this.formDadosPrincipais = fb.group({
      numeroProcesso: [''],
      tribunal: [''],
      instancia: [''],
      comarca: [''],
      vara: [''],
      valorCausa: []
    });

    this.formDadosPartes = fb.group({
      partes: fb.array([])
    });
  }

  ngOnInit(): void { }

  addParte(parte: IParte) {
    console.log(parte)
  }

  onSubmit() {
    //console.log(this.formDadosPrincipais)
    this.snack.open("success", "Processo cadastrado com sucesso")
  }

  setMaskCurrency(event: any) {
    this.formDadosPrincipais.get("valorCausa")?.setValue(limparNumero(event.target.value));
  }
}
