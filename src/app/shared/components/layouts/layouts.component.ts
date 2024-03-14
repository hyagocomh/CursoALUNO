import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.detectScreenSize();
  }

  constructor(private observer: BreakpointObserver) {}

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

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false;
    } else {
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }

}
