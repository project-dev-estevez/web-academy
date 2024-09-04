import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dojo-gitflow-page',
  templateUrl: './dojo-gitflow-page.component.html',
  styleUrl: './dojo-gitflow-page.component.css'
})
export class DojoGitflowPageComponent {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  public dojoVideos = [
    { 
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/6gRdl_5q4Oc'), 
      title: 'Gitflow - Subiendo Cambios a Ramas Dev, Pruebas y Productiva'
    }
  ];
}
