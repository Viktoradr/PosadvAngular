import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  qtdNotificacoes = 1;
  qtdMetas = 1;
  showAnimationShake = false;
  showAnimationFlip = false;

  menus = [
    {
      panelTitle: 'Processos',
      panelOpenState: false,
      itens: [
        {
          link: '/admin/processos',
          title: 'Consultar',
          ariaLabel: 'Icon consultar processo',
          fontIcon: 'search',
          fontSet: 'material-icons-outlined',
        },
        {
          link: '/admin/processo/cadastrar',
          title: 'Cadastrar',
          ariaLabel: 'Icon cadastrar processo',
          fontIcon: 'add',
          fontSet: 'material-icons-outlined',
        },
      ],
    },
    {
      panelTitle: 'Acordos',
      panelOpenState: false,
      itens: [
        {
          link: '/admin/acordos',
          title: 'Consultar',
          ariaLabel: 'Icon consultar acordos',
          fontIcon: 'search',
          fontSet: 'material-icons-outlined',
        },
      ],
    },
    {
      panelTitle: 'Prazos',
      panelOpenState: false,
      itens: [
        {
          link: '/admin/agenda',
          title: 'Agenda',
          ariaLabel: 'Icon agenda',
          fontIcon: 'calendar_month',
          fontSet: 'material-icons-outlined',
        },
        {
          link: '/admin/prazos',
          title: 'Consultar',
          ariaLabel: 'Icon consultar prazos',
          fontIcon: 'search',
          fontSet: 'material-icons-outlined',
        },
        {
          link: '/admin/prazo/cadastrar',
          title: 'Cadastrar',
          ariaLabel: 'Icon cadastrar prazo',
          fontIcon: 'add',
          fontSet: 'material-icons-outlined',
        },
      ],
    },
    {
      panelTitle: 'Clientes',
      panelOpenState: false,
      itens: [
        {
          link: '/admin/clientes',
          title: 'Consultar',
          ariaLabel: 'Icon consultar clientes',
          fontIcon: 'search',
          fontSet: 'material-icons-outlined',
        },
        {
          link: '/admin/cliente/cadastrar',
          title: 'Cadastrar',
          ariaLabel: 'Icon cadastrar cliente',
          fontIcon: 'add',
          fontSet: 'material-icons-outlined',
        },
      ],
    },
    {
      panelTitle: 'Financeiro',
      panelOpenState: false,
      itens: [
        {
          link: '/admin/movimentacoes',
          title: 'Consultar',
          ariaLabel: 'Icon consultar financeira',
          fontIcon: 'search',
          fontSet: 'material-icons-outlined',
        },
        {
          link: '/admin/movimentacao/cadastrar',
          title: 'Cadastrar',
          ariaLabel: 'Icon cadastrar movimentação',
          fontIcon: 'add',
          fontSet: 'material-icons-outlined',
        },
      ],
    },
  ];

  midias = [
    {
      label: 'Acessar o youtube',
      icon: 'fa-youtube',
      showAnimation: false,
      link: '#'
    },
    {
      label: 'Acessar o instagram',
      icon: 'fa-instagram',
      showAnimation: false,
      link: '#'
    },
    {
      label: 'Acessar o facebook',
      icon: 'fa-square-facebook',
      showAnimation: false,
      link: '#'
    },
  ];

  constructor() {}

  ngOnInit(): void {
    if (this.qtdNotificacoes > 0) {
      this.showAnimationShake = true;

      setTimeout(() => {
        this.showAnimationShake = false;
      }, 5000);
    }
  }

  closePanel(panel: MatExpansionPanel) {
    setTimeout(() => {
      panel.close();
    }, 300);
  }

  goTo(link: string) {
    window.open(link,"_blank")
  }
}
