import { Component, OnInit } from '@angular/core';
import { BreadcrumbParams } from 'src/app/components/breadcrumb/breadcrumb.interface';

@Component({
  selector: 'notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.scss']
})
export class NotificacoesComponent implements OnInit {

  params: BreadcrumbParams = {
    title: "Notificações",
    subtitle: ""
  }

  notificacoes = [
    { title: 'Some placeholder content in a paragraph.', partMessage: 'And some muted small print.'}
  ]

  constructor() { }

  ngOnInit(): void { }

}
