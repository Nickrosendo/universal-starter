import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { HomeMenuItens , HomeSlides} from '../../../data/curt-features/home.data';
import { lpAtendimentoClienteMenuItems , lpAtendimentoClienteSlides } from '../../../data/curt-features/lp-atendimento-ao-cliente.data';
import { ChatMenuItems , ChatSlides } from '../../../data/curt-features/lp-chat.data';
import { ConcorrentesMenuItems , ConcorrentesSlides} from '../../../data/curt-features/lp-concorrentes.data';
import { lpHelpDeskMenuItems , lpHelpDeskSlides} from '../../../data/curt-features/lp-help-desk.data';
import { SistemaChamadosMenuItems, SistemaChamadosSlides } from '../../../data/curt-features/lp-sistema-de-chamados.data';



@Injectable()
export class DataService {
  constructor() { }

  getHomeCurtFeatures(): Array<Object> {
    return [ HomeSlides, HomeMenuItens];
  }

  getLpHelpDeskCurtFeatures(): Array<object> {
    return [lpHelpDeskSlides, lpHelpDeskMenuItems];
  }

  getLpAtendimentoAoClienteCurtFeatures(): Array<object> {
    return [ lpAtendimentoClienteSlides, lpAtendimentoClienteMenuItems];
  }

  getLpSistemaDeChamadosCurtFeatures(): Array<object> {
    return [ SistemaChamadosSlides, SistemaChamadosMenuItems];
  }

  getLpConcorrentesCurtFeatures(): Array<object> {
    return [ ConcorrentesSlides, ConcorrentesMenuItems];
  }

  getLpChatCurtFeatures(): Array<object> {
    return [ ChatSlides , ChatMenuItems];
  }


}
