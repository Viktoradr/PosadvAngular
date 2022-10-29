import { Component, OnInit } from '@angular/core';
import { BreadcrumbParams } from 'src/app/components/breadcrumb/breadcrumb.interface';

@Component({
  selector: 'agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  params: BreadcrumbParams = {
    title: "Agenda",
    subtitle: "Organize seus prazos e compromissos"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
