import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const _authService = inject(AuthService);
  const router = inject(Router);

  if (_authService.userDataVar.getValue()!= null) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
