import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/navigation/sidenav/sidenav.component';
import { Top5dinamicoComponent } from './pages/top5dinamico/top5dinamico.component';
import { HistoricosComponent } from './pages/historicos/historicos.component';
import { BarGraphComponent } from './components/basecharts/bar-graph/bar-graph.component';
import { PieChartComponent } from './components/basecharts/pie-chart/pie-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    Top5dinamicoComponent,
    HistoricosComponent,
    BarGraphComponent,
    PieChartComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
