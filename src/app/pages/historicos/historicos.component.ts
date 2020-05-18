import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
import { CuboNorthwindService } from 'src/app/services/cubo-northwind.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-historicos',
  templateUrl: './historicos.component.html',
  styleUrls: ['./historicos.component.scss'],
})
export class HistoricosComponent implements OnInit {
  dataDimesion: Label[] = [];
  dataHistorico: ChartDataSets[] = [];
  members$: Observable<any>;
  selectedDimension = null;
  selectedMember: string;

  dimensiones = [
    {
      value: 1,
      label: 'Cliente',
      dimension: 'cliente',
    },
    {
      value: 2,
      label: 'Producto',
      dimension: 'producto',
    },
    {
      value: 3,
      label: 'Empleado',
      dimension: 'empleado',
    },
  ];

  constructor(private svc: CuboNorthwindService) {}
  private formatData(data: any[]): ChartDataSets[] {
    let labels = [{ data: data, label: 'Ventas' }];

    return labels;
  }

  onChangeDimension($event) {
    this.selectedDimension = $event;
    this.members$ = this.svc.getMembers(this.selectedDimension['dimension']);
  }

  onChangeMember() {
    console.log('changed member');
    console.log(this.selectedMember);
    this.svc
      .getHistorico(this.selectedDimension['dimension'], this.selectedMember)
      .subscribe((result) => {
        this.dataDimesion = result['datosDimension'];
        this.dataHistorico = this.formatData(result['datosVenta']);
      });
  }
  ngOnInit(): void {
    this.selectedDimension = this.dimensiones[0];
    this.svc
      .getHistorico(this.selectedDimension['dimension'], this.selectedMember)
      .subscribe((result) => {
        this.dataDimesion = result['datosDimension'];
        this.dataHistorico = this.formatData(result['datosVenta']);
      });
    this.members$ = this.svc.getMembers(this.selectedDimension['dimension']);
  }
}
