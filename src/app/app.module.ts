import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/navigation/sidenav/sidenav.component';
import { Top5dinamicoComponent } from './pages/top5dinamico/top5dinamico.component';
import { HistoricosComponent } from './pages/historicos/historicos.component';
import { BarGraphComponent } from './components/basecharts/bar-graph/bar-graph.component';
import { PieChartComponent } from './components/basecharts/pie-chart/pie-chart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    Top5dinamicoComponent,
    HistoricosComponent,
    BarGraphComponent,
    PieChartComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
