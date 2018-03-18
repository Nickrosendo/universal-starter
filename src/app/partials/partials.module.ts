import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { WindowRef } from './windowRef';
import { DocumentRef } from './documentRef';
import { MultiChannelComponent } from './multi-channel/multi-channel.component';
import { SaleOffComponent } from './sale-off/sale-off.component';
import { SalesFlowComponent } from './sales-flow/sales-flow.component';
import { PlansFromComponent } from './plans-from/plans-from.component';
import { DataService } from './curt-features/data.service';
import { DoingMoreComponent } from './doing-more/doing-more.component';
import { CurtFeaturesComponent } from './curt-features/curt-features.component';
import { CustomersComponent } from './customers/customers.component';
import { FreeTrialComponent } from './free-trial/free-trial.component';
import { DemoComponent } from './demo/demo.component';
import { MetricsComponent } from './metrics/metrics.component';
import { SupportComponent } from './support/support.component';
import { CommonQuestions } from './common-questions/common-questions.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { Channels } from './channels/channels.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { GetToKnowComponent } from './get-to-know/get-to-know.component';
import { WhyOctadeskComponent } from './why-octadesk/why-octadesk.component';
import { ManyMoreComponent } from './many-more/many-more.component';
import { StatementComponent } from './statement/statement.component';
import { KnowOurCasesComponent } from './know-our-cases/know-our-cases.component';
import { EbookComponent } from './ebook/ebook.component';
import { EbookSatisfacaoComponent } from './ebook/ebook-satisfacao-cliente/ebook-satisfacao-cliente.component';
import { EbookAtendimentoClienteComponent } from './ebook/ebook-atendimento-cliente/ebook-atendimento-cliente.component';
import { EbookQualidadeComponent } from './ebook/ebook-qualidade-atendimento/ebook-qualidade-atendimento.component';
import { EbookPessoasComponent } from './ebook/ebook-pessoas/ebook-pessoas.component';
import { MaterialKitfixComponent } from './material-kitfix/material-kitfix.component';
import { MaterialNfboxComponent } from './material-nfbox/material-nfbox.component';
import { PlanilhaAtendimentoComponent } from './planilha-atendimento-cliente/planilha-atendimento-cliente.component';
import { ApresentacaoHelpDeskComponent } from './apresentacao-helpdesk-octadesk/apresentacao-helpdesk-octadesk.component';
import { WebinarComponent } from './webinar/webinar.component';

// forms
import { RequestFormComponent } from './forms/request-form/request-form.component';
import { EvaluationFormComponent } from './forms/evaluation-form/evaluation-form.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { LpFormComponent } from './forms/lp-form/lp-form.component';
import { LpFormTesteAbComponent } from './forms/lp-form-teste-ab/lp-form-teste-ab.component';
import { NewslettertFormComponent } from './forms/newsletter-form/newsletter-form.component';
import { AvalieGratisEmailFormFieldComponent } from './forms/avalie-gratis-email-field-form/avalie-gratis-email-field-form.component';

import { ModalDirective } from './modals/modal.directive';
import { PhoneMask } from './forms/evaluation-form/phone-mask.directive';
import { ContactModalComponent } from './modals/contact-modal/contact-modal.component';
import { ContactConsultoresModalComponent } from './modals/contact-consultores/contact-consultores-modal.component';
import { ContactModalCotacaoComponent } from './modals/contact-cotacao/contact-modal-cotacao.component';
import { SuccessTemplateComponent } from './modals/success-template/success-template.component';
import { SuccessContactTemplateComponent } from './modals/success-contact-template/success-contact-template.component';
import { TryOctadeskModalComponent } from './modals/try-octadesk-modal/try-octadesk-modal.component';
import { SuccessTryOctadeskTemplateComponent } from './modals/success-try-octadesk-template/success-try-octadesk-template.component';
import { YouTubeVideoModalComponent } from './modals/youtube-video-modal/youtube-video-modal.component';
import { CustomizeComponent } from './customize/customize.component';
import { TimeLineComponent } from './timeline/timeline.component';
import { GainScaleComponent } from './gain-scale/gain-scale.component';
import { ManagaRelationshipComponent } from './manage-relationship/manage-relationship.component';
import { UnderstandComponent } from './understand/understand.component';
import { AppsApiComponent } from './apps-api/apps-api.component';
import { UtmHiddenFieldsComponent } from './utm-parameters/utm-parameters.component';
import { MidiaMentionsComponent } from './midia-mentions/midia-mentions.component';
import { OctaDifferencesComponent } from './octa-differences/octa-differences.component';

//modals
import { FormModalComponent } from './modals/form-modal/form-modal.component';
import { SuccessGoToFeaturesComponent } from './modals/success-go-to-features/success-go-to-features.component';

import { EbookJornadaComponent } from './ebook/ebook-jornada/ebook-jornada.component';
//infograficos
import { InfografoPessoasComponent } from './infograficos/infografo-pessoas/infografo-pessoas.component';
import { InfografoSatisfacaoComponent } from './infograficos/infografo-satisfacao/infografo-satisfacao.component';
import { InfografoProcessosComponent } from './infograficos/infografo-processos/infografo-processos.component';
import { InfografoRetencaoComponent } from './infograficos/infografo-retencao/infografo-retencao.component';

//highlights
import { HighlightMateriaisComponent } from './highlight-materiais/highlight-materiais.component';
import { HighLightBlogComponent } from './highlight-blog/highlight-blog.component';

import { PersonalizeOctadeskComponent } from './personalize-octadesk/personalize-octadesk.component';
import { ComparePlansCtaComponent } from './compare-plans-cta/compare-plans-cta.component';
import { KnowOctadeskYtComponent } from './know-octadesk-yt/know-octadesk-yt.component';
import { CtaComponent } from './cta/cta.component';

import { LpsFormTemplateComponent } from './lps-form-template/lps-form-template.component';
import { PartimonialsComponent } from './partimonials/partimonials.component';
import { LpsFooterComponent } from './lps-footer/lps-footer.component';

//Headers
import { LpHeaderComFormComponent } from './headers/lp-header-com-form/lp-header-com-form.component';
import { LpHeaderTesteAbComFormComponent } from './headers/lp-header-teste-ab-com-form/lp-header-teste-ab-com-form.component';
import { LpHeaderTesteAbSemFormComponent } from './headers/lp-header-teste-ab-sem-form/lp-header-teste-ab-sem-form.component';

//CTA's
import { CtaEsperandoOqueComponent } from './ctas/cta-esperando-oque/cta-esperando-oque.component';

//banners
import { BannerPercentComponent } from './banners/banner-percent/banner-percent.component';
import { ChatBannerComponent } from './banners/chat-banner/chat-banner.component';
import { SuccessCaseDinamicoComponent } from './success-case-dinamico/success-case-dinamico.component';
import { BannerFuncionalidadesPlanosComponent } from './banners/banner-funcionalidades-planos/banner-funcionalidades-planos.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    Ng2FilterPipeModule
  ],
  providers: [WindowRef, DocumentRef, DataService],
  declarations: [
    ChatBannerComponent,
    SalesFlowComponent,
    MultiChannelComponent,
    RequestFormComponent,
    EvaluationFormComponent,
    ContactFormComponent,
    NewslettertFormComponent,
    AvalieGratisEmailFormFieldComponent,
    SaleOffComponent,
    DoingMoreComponent,
    PlansFromComponent,
    CurtFeaturesComponent,
    CustomersComponent,
    FreeTrialComponent,
    DemoComponent,
    MetricsComponent,
    SupportComponent,
    CommonQuestions,
    IntegrationsComponent,
    Channels,
    ChoosePlanComponent,
    GetToKnowComponent,
    WhyOctadeskComponent,
    ManyMoreComponent,
    StatementComponent,
    KnowOurCasesComponent,
    EbookComponent,
    EbookSatisfacaoComponent,
    EbookAtendimentoClienteComponent,
    EbookQualidadeComponent,
    EbookPessoasComponent,
    MaterialKitfixComponent,
    MaterialNfboxComponent,
    PlanilhaAtendimentoComponent,
    ApresentacaoHelpDeskComponent,
    WebinarComponent,
    ModalDirective,
    PhoneMask,
    ContactConsultoresModalComponent,
    ContactModalComponent,
    ContactModalCotacaoComponent,
    SuccessTemplateComponent,
    SuccessContactTemplateComponent,
    TryOctadeskModalComponent,
    SuccessTryOctadeskTemplateComponent,
    YouTubeVideoModalComponent,
    CustomizeComponent,
    TimeLineComponent,
    GainScaleComponent,
    ManagaRelationshipComponent,
    UnderstandComponent,
    AppsApiComponent,
    UtmHiddenFieldsComponent,
    MidiaMentionsComponent,
    HighLightBlogComponent,
    EbookJornadaComponent,
    //infograficos
    InfografoPessoasComponent,
    InfografoSatisfacaoComponent,
    InfografoProcessosComponent,
    InfografoRetencaoComponent,
    HighlightMateriaisComponent,
    OctaDifferencesComponent,
    PersonalizeOctadeskComponent,
    ComparePlansCtaComponent,
    KnowOctadeskYtComponent,
    CtaComponent,
    LpFormComponent,
    LpFormTesteAbComponent,
    LpsFormTemplateComponent,
    PartimonialsComponent,
    LpsFooterComponent,
    LpHeaderComFormComponent,
    CtaEsperandoOqueComponent,
    SuccessGoToFeaturesComponent,
    BannerPercentComponent,
    SuccessCaseDinamicoComponent,
    LpHeaderTesteAbComFormComponent,
    BannerFuncionalidadesPlanosComponent,
    LpHeaderTesteAbSemFormComponent,
    FormModalComponent
  ],
  exports: [
    SalesFlowComponent,
    MultiChannelComponent,
    RequestFormComponent,
    EvaluationFormComponent,
    ContactFormComponent,
    NewslettertFormComponent,
    AvalieGratisEmailFormFieldComponent,
    SaleOffComponent,
    PlansFromComponent,
    CurtFeaturesComponent,
    DoingMoreComponent,
    CustomersComponent,
    FreeTrialComponent,
    DemoComponent,
    MetricsComponent,
    SupportComponent,
    CommonQuestions,
    IntegrationsComponent,
    Channels,
    ChoosePlanComponent,
    GetToKnowComponent,
    WhyOctadeskComponent,
    ManyMoreComponent,
    StatementComponent,
    KnowOurCasesComponent,
    EbookComponent,
    EbookSatisfacaoComponent,
    EbookAtendimentoClienteComponent,
    EbookQualidadeComponent,
    EbookPessoasComponent,
    MaterialKitfixComponent,
    MaterialNfboxComponent,
    PlanilhaAtendimentoComponent,
    ApresentacaoHelpDeskComponent,
    WebinarComponent,
    ModalDirective,
    PhoneMask,
    ContactConsultoresModalComponent,
    ContactModalComponent,
    ContactModalCotacaoComponent,
    SuccessTemplateComponent,
    SuccessContactTemplateComponent,
    TryOctadeskModalComponent,
    SuccessTryOctadeskTemplateComponent,
    YouTubeVideoModalComponent,
    CustomizeComponent,
    TimeLineComponent,
    GainScaleComponent,
    ManagaRelationshipComponent,
    UnderstandComponent,
    AppsApiComponent,
    UtmHiddenFieldsComponent,
    MidiaMentionsComponent,
    HighLightBlogComponent,
    EbookJornadaComponent,
    //infograficos
    InfografoPessoasComponent,
    InfografoSatisfacaoComponent,
    InfografoProcessosComponent,
    InfografoRetencaoComponent,
    HighlightMateriaisComponent,
    OctaDifferencesComponent,
    PersonalizeOctadeskComponent,
    ChatBannerComponent,
    ComparePlansCtaComponent,
    KnowOctadeskYtComponent,
    CtaComponent,
    LpFormComponent,
    LpFormTesteAbComponent,
    LpsFormTemplateComponent,
    PartimonialsComponent,
    LpsFooterComponent,
    LpHeaderComFormComponent,
    CtaEsperandoOqueComponent,
    SuccessGoToFeaturesComponent,
    BannerPercentComponent,
    SuccessCaseDinamicoComponent,
    LpHeaderTesteAbComFormComponent,
    BannerFuncionalidadesPlanosComponent,
    LpHeaderTesteAbSemFormComponent
  ]
})
export class PartialsModule {}
