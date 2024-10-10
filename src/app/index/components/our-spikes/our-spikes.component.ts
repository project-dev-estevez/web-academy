import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-our-spikes',
  templateUrl: './our-spikes.component.html',
  styleUrl: './our-spikes.component.css'
})
export class OurSpikesComponent {

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  public spikesVideos = [
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/eXP7xC5xZvA'), 
      title: 'Spike 1: Migrations | Estevez.Jor Academy'
    }, 
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/QueiEWAG_yI'), 
      title: 'Spike 2: Ngx Permissions | Estevez.Jor Academy'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/FhCf1NOhRpY'), 
      title: 'Spike 3: Guards | Estevez.Jor Academy'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/xzBj_6cKdVg'), 
      title: 'Spike 4: Introducción a los Sistemas ERP | Estevez.Jor Academy'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/oOqeVR-0Vrg'), 
      title: 'Spike 5: Cloud Run | Estevez.Jor Academy'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/gcdlyMmQYjs'), 
      title: 'Spike 6: Módulo de Proyectos en el ERP | Estevez.Jor Academy'
    },
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/mH34Z38s7jU'), 
      title: 'Spike 7: Pruebas Unitarias | Estevez.Jor Academy'
    },
  ];
}
