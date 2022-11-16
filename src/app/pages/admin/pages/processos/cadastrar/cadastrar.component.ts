import { Component, OnInit } from '@angular/core';
import { formatNumber } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IParte } from 'src/app/interfaces/parte.interface';
import { ProcessoService } from '../../../../../services/processo.service';
import { BreadcrumbParams } from './../../../../../components/breadcrumb/breadcrumb.interface';
import { formatCurrency } from 'src/app/shared/functions/mask';
import { SnackService } from 'src/app/provider/snack/snack.service';

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
    console.log(parte);
  }

  onSubmit() {
    console.log(this.formDadosPrincipais);
    this.snack.open("success", "Processo cadastrado com sucesso");
  }

  setMaskCurrency(event: any) {
    const value = event.target.value;
    console.log(value.replace(/\D/g,""))
    const currency = formatNumber(value.replace(/\D/g,""), "pt-BR", "1.2-2");
    console.log(currency);
    console.log(formatCurrency(event))
    this.formDadosPrincipais.get("valorCausa")?.setValue(currency);
  }
}
