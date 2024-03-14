import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (this.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  isUserLoggedIn(): boolean {
    // Implemente a lógica para verificar se o usuário está autenticado
      // Retorne true se estiver autenticado, false caso contrário
    // Aqui você pode usar serviços de autenticação, variáveis de sessão, etc.
    return true; // Exemplo simples: assumindo que o usuário não está autenticado
  }
}
