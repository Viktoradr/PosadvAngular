import { Component, OnInit } from '@angular/core';
import { BreadcrumbParams } from 'src/app/components/breadcrumb/breadcrumb.interface';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  params: BreadcrumbParams = {
    title: "Perfil",
    subtitle: "Mantenha sempre seu perfil atualizado"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
