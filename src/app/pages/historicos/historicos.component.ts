import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
import { CuboNorthwindService } from 'src/app/services/cubo-northwind.service';

@Component({
  selector: 'app-historicos',
  templateUrl: './historicos.component.html',
  styleUrls: ['./historicos.component.css'],
})
export class HistoricosComponent implements OnInit {
  dataDimesion: Label[] = [];
  dataHistorico: ChartDataSets[] = [];
  constructor(private svc: CuboNorthwindService) {}
  private formatData(data: any[]): ChartDataSets[] {
    let labels = [{ data: data, label: 'Ventas' }];
    debugger;
    return labels;
  }
  ngOnInit(): void {
    this.svc.getHistorico('cliente', 'Ernst Handel').subscribe((result) => {
      this.dataDimesion = result['datosDimension'];
      this.dataHistorico = this.formatData(result['datosVenta']);
    });
  }
}
