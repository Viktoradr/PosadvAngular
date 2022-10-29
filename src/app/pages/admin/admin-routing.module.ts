import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path:'', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'notificacoes', loadChildren: () => import('./pages/notificacoes/notificacoes.module').then(m => m.NotificacoesModule) },
      { path: 'metas', loadChildren: () => import('./pages/metas/metas.module').then(m => m.MetasModule) },
      { path: 'perfil', loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilModule) },
      { path: 'meu-plano', loadChildren: () => import('./pages/meu-plano/meu-plano.module').then(m => m.MeuPlanoModule) },
      { path: 'configuracao', loadChildren: () => import('./pages/configuracao/configuracao.module').then(m => m.ConfiguracaoModule) },
      { path: 'movimentacoes', loadChildren: () => import('./pages/financeiro/consultar/consultar.module').then(m => m.ConsultarModule) },
      { path: 'movimentacao/cadastrar', loadChildren: () => import('./pages/financeiro/cadastrar/cadastrar.module').then(m => m.CadastrarModule) },
      { path: 'clientes', loadChildren: () => import('./pages/clientes/consultar/consultar.module').then(m => m.ConsultarModule) },
      { path: 'cliente/cadastrar', loadChildren: () => import('./pages/clientes/cadastrar/cadastrar.module').then(m => m.CadastrarModule) },
      { path: 'prazos', loadChildren: () => import('./pages/prazos/consultar/consultar.module').then(m => m.ConsultarModule) },
      { path: 'prazo/cadastrar', loadChildren: () => import('./pages/prazos/cadastrar/cadastrar.module').then(m => m.CadastrarModule) },
      { path: 'agenda', loadChildren: () => import('./pages/prazos/agenda/agenda.module').then(m => m.AgendaModule) },
      { path: 'processos', loadChildren: () => import('./pages/processos/consultar/consultar.module').then(m => m.ConsultarModule) },
      { path: 'processo/cadastrar', loadChildren: () => import('./pages/processos/cadastrar/cadastrar.module').then(m => m.CadastrarModule) },
      { path: 'acordos', loadChildren: () => import('./pages/acordos/consultar/consultar.module').then(m => m.ConsultarModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
