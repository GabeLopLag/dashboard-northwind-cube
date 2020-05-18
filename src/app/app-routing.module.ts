import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Top5dinamicoComponent } from './pages/top5dinamico/top5dinamico.component';
import { HistoricosComponent } from './pages/historicos/historicos.component';

const routes: Routes = [
  { path: 'top5', component: Top5dinamicoComponent },
  { path: 'historico', component: HistoricosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
