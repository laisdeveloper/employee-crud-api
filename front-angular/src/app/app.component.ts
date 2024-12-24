import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
/**
   *
   */
export class AppComponent {
  title = 'front-angular';
  private loadingRef;


  // construtor reponsavel por trabalhar com a questao da loading bar ba aplicacao
  constructor(private router: Router , private loadingBar: LoadingBarService) {
    this.loadingRef = this.loadingBar.useRef();

    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event)
    })
  }

// metodo responsavel por tratar as condicionais em relacao ao loading bar
  private navigationInterceptor(event: Event): void {
    if(event instanceof NavigationStart) {
      this.loadingRef.start()
    }
    if(event instanceof NavigationEnd){
      this.loadingRef.complete()
    }
    if(event instanceof NavigationCancel){
      this.loadingRef.stop()
    }
    if(event instanceof NavigationError){
      this.loadingRef.stop()
    }

  }
}
