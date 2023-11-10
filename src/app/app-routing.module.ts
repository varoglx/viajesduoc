import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes,CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule),
    
    
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'programar-viaje',
    loadChildren: () => import('./programar-viaje/programar-viaje.module').then( m => m.ProgramarViajePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'buscr-viaje',
    loadChildren: () => import('./buscr-viaje/buscr-viaje.module').then( m => m.BuscrViajePageModule),
    canActivate: [AuthGuard]
  },  {
    path: 'listar-usuarios',
    loadChildren: () => import('./listar-usuarios/listar-usuarios.module').then( m => m.ListarUsuariosPageModule)
  },
  {
    path: 'registrar-usuario',
    loadChildren: () => import('./registrar-usuario/registrar-usuario.module').then( m => m.RegistrarUsuarioPageModule)
  },


  // ... otras rutas
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
