import { Component, Input, ViewChild, ViewChildren, OnInit, OnDestroy} from '@angular/core';

import { Meta, Title } from "@angular/platform-browser";
import { LinkService } from "../services/LinkService.service";

@Component({
	moduleId: module.id,
	selector: 'octadesk-materials',
	templateUrl: './materials.component.html',
	providers: [ LinkService ]
})

export class MaterialsComponent implements OnInit, OnDestroy {


  constructor( meta: Meta , titlle: Title, linkService: LinkService) {
    titlle.setTitle("Materiais Octadesk - Seja um especialista em atendimento");
    meta.updateTag({ name: 'keywords', content: 'Materiais'});
    meta.updateTag({ name: 'description', content: 'Encontre os eBooks, infográficos, vídeos, planilhas e ferramentas sobre atendimento ao cliente, jornada do cliente, customer success e experiência do cliente que produzimos. Baixe, gratuitamente, todos eles!'});
		linkService.addTag( { rel: 'canonical', href: 'https://www.octadesk.com/materiais-para-helpdesk' } )
  }
  ngOnDestroy() {

  }

	ngOnInit() {}

	filtroEbook: boolean = false;
	filtroApresentacao: boolean = false;
	filtroPlanilha: boolean = false;
  filtroWebinar: boolean = false;
  filtroInfografico: boolean = false;


	filtra_todos(){
		this.filtroEbook= false;
		this.filtroApresentacao= false;
		this.filtroPlanilha= false;
    this.filtroWebinar= false;
    this.filtroInfografico = false;

		let button = document.getElementById("filter_text");

		button.innerHTML="Todos";

	}

	filtra_apresentacao(){
		this.filtroApresentacao = false;
		this.filtroEbook = true;
		this.filtroPlanilha = true;
    this.filtroWebinar = true;
    this.filtroInfografico = true;
		let button = document.getElementById("filter_text");
		button.innerHTML="Apresentações";
	}

	filtra_ebook(){
		this.filtroApresentacao = true;
		this.filtroEbook = false;
		this.filtroPlanilha = true;
		this.filtroWebinar = true;
    this.filtroInfografico = true;
		let button = document.getElementById("filter_text");
		button.innerHTML="Ebooks";

	}

	filtra_planilha(){
		this.filtroApresentacao = true;
		this.filtroEbook = true;
		this.filtroPlanilha = false;
		this.filtroWebinar = true;
    this.filtroInfografico = true;
		let button = document.getElementById("filter_text");
		button.innerHTML="Planilhas";
	}

	filtra_webinar(){
		this.filtroApresentacao = true;
		this.filtroEbook = true;
		this.filtroPlanilha = true;
		this.filtroWebinar = false;
    this.filtroInfografico = true;
		let button = document.getElementById("filter_text");
		button.innerHTML="Webinares";
  }

  filtra_infografico(){
		this.filtroApresentacao = true;
		this.filtroEbook = true;
		this.filtroPlanilha = true;
		this.filtroWebinar = true;
    this.filtroInfografico = false;
		let button = document.getElementById("filter_text");
		button.innerHTML="Infográficos";
	}



}
