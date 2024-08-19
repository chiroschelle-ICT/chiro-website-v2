import { CanActivateFn, Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { AuthService } from '../Authentication/auth.service';


export const adminGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const router = inject(Router);

  if(auth.isAuth.value == false) {
    router.navigate(['login']);
    return false
  }
  return auth.isAuth.value
};
