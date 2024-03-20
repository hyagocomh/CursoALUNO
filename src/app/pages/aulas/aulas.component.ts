import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrl: './aulas.component.scss'
})
export class AulasComponent implements OnInit{

  isMobile= true;
  isCollapsed = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.detectScreenSize();
  }
  panelOpenState = false;

  constructor (private observer: BreakpointObserver) {

  }


  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
    this.detectScreenSize()
  }

  private detectScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;
  }


}
