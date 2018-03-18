import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'casos-de-sucesso/sistema-de-atendimento', loadChildren: './success-stories/success-stories.module#SuccessStoriesModule' },
  { path: 'funcionalidades/atendimento-ao-cliente', loadChildren: './features/features.module#FeaturesModule' },
  { path: 'planos/sistema-de-chamados', loadChildren: './pricing/pricing.module#PricingModule' },
  { path: 'materiais-para-helpdesk', loadChildren: './materials/materials.module#MaterialsModule' },
  { path: 'contato', loadChildren: './contact/contact.module#ContactModule' }
];

