import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dojo-crud-page',
  templateUrl: './dojo-crud-page.component.html',
  styleUrl: './dojo-crud-page.component.css'
})
export class DojoCrudPageComponent {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  public dojoVideos = [
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/sKwOwTCaD7w'), 
      title: 'Parte 1: CRUD Backend - Create'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/9-roHZ1aHPI'), 
      title: 'Parte 2: CRUD Backend - Read, Update, Delete'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/ZXlkq5gBKjw'), 
      title: 'Parte 3: CRUD Backed - Soft Delete'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/CgPpUwjNy2s'), 
      title: 'Continuación Parte 3: CRUD Backend - Refinando Soft Delete'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/jNjP5Xa86rs'), 
      title: 'Parte 4: CRUD Backend - Relaciones y Llaves Foráneas'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/JhigU7Ph_VU'), 
      title: 'Parte 5: CRUD Frontend - Create'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/0jpWDTxxu-c'), 
      title: 'Parte 6: CRUD Frontend - Continuación Create'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/nwIRkkzH_oA'), 
      title: 'Parte 7: CRUD Frontend - Terminando Create'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Bzt9nt8Uk8o'), 
      title: 'Parte 8: CRUD Frontend - Edit'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/VEf9nkUVtlc'), 
      title: 'Parte 9: CRUD Frontend - Tabla Reusable'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/dpNizXr6x6c'), 
      title: 'Parte 10: CRUD Frontend - List Department'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/q4fUDjzs6X4'), 
      title: 'Parte 11: CRUD Frontend - Department By ID y Soft Delete'
    }
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/6gRdl_5q4Oc'), 
      title: 'Gitflow - Subiendo Cambios a Ramas Dev, Pruebas y Productiva'
    }
  ];
}
