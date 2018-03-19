import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'casos-de-sucesso/sistema-de-atendimento', loadChildren: './success-stories/success-stories.module#SuccessStoriesModule' },
  { path: 'funcionalidades/atendimento-ao-cliente', loadChildren: './features/features.module#FeaturesModule' },
  { path: 'planos/sistema-de-chamados', loadChildren: './pricing/pricing.module#PricingModule' },
  { path: 'materiais-para-helpdesk', loadChildren: './materials/materials.module#MaterialsModule' },
  { path: 'contato', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'termo-de-uso', loadChildren: './terms/terms.module#TermsModule' },
  { path: '404', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: '404' },
  // landing-pages
  { path: 'atendimento-ao-cliente', loadChildren: './landing-pages/atendimento-ao-cliente/atendimento-ao-cliente.module#AtendimentoAoClienteModule'},
  { path: 'chat-para-site', loadChildren: './landing-pages/chat/chat.module#ChatModule'},
  { path: 'concorrentes/freshdesk', loadChildren: './landing-pages/freshdesk/freshdesk.module#FreshDeskModule'},
  { path: 'concorrentes/zendesk', loadChildren: './landing-pages/zendesk/zendesk.module#ZenDeskModule'},
  { path: 'help-desk', loadChildren: './landing-pages/help-desk/help-desk.module#HelpDeskModule'},
  { path: 'sistema-de-help-desk', loadChildren: './landing-pages/sistema-help-desk/sistema-help-desk.module#SistemaHelpDeskModule'},
  { path: 'sistema-de-chamados', loadChildren: './landing-pages/sistema-de-chamados/sistema-de-chamados.module#SistemaDeChamadosModule'},
  { path: 'cadastro-de-clientes-ad', loadChildren: './landing-pages/campanhas/ad-cadastro-clientes/ad-cadastro-clientes.module#AdCadastroClientesModule'},
  { path: 'controle-de-clientes-ad', loadChildren: './landing-pages/campanhas/ad-controle-clientes/ad-controle-clientes.module#AdControleClientesModule'},
  { path: 'gerenciador-de-contatos-ad', loadChildren: './landing-pages/campanhas/ad-gerenciador-contatos/ad-gerenciador-contatos.module#AdGerenciadorContatosModule'},
  { path: 'gerenciador-de-contatos-adb', loadChildren: './landing-pages/campanhas/ad-gerenciador-contatosb/ad-gerenciador-contatosb.module#AdGerenciadorContatosModule'},
];

