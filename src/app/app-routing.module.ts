import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Top5dinamicoComponent } from './pages/top5dinamico/top5dinamico.component';
import { HistoricosComponent } from './pages/historicos/historicos.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: 'top5', component: Top5dinamicoComponent ,canActivate: [AuthGuard]  },
  { path: 'historico', component: HistoricosComponent,  canActivate: [AuthGuard]  },
  { path: "login", component: LoginComponent },
  { path: "**", redirectTo: "/login" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
