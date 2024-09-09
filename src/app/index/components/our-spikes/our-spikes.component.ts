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
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/eXP7xC5xZvAg'), 
      title: 'Spike 1 Migrations | Estevez.Jor Academy'
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
  ];
}
