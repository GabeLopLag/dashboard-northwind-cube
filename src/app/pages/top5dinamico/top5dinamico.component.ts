import { Component, OnInit } from '@angular/core';
import { CuboNorthwindService } from '../../services/cubo-northwind.service';
import { Label } from 'ng2-charts';
import { Observable } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { Router } from "@angular/router";
@Component({
  selector: 'app-top5dinamico',
  templateUrl: './top5dinamico.component.html',
  styleUrls: ['./top5dinamico.component.css'],
})
export class Top5dinamicoComponent implements OnInit {
  dataDimension: Label[] = [];
  dataValues: number[] = [];
  anios: string[];
  meses: string[];
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
  selectedMes = '';
  selectedAnio = '';
  selectedDim = 'cliente';
  constructor(private svc: CuboNorthwindService, private router: Router) {}
  renderChart() {
    this.svc
      .getTop5(this.selectedDim, this.selectedAnio, this.selectedMes, 'DESC')
      .subscribe((result) => {
        console.log(result);
        this.dataDimension = result['datosDimension'];
        this.dataValues = result['datosVenta'];
      });
  }
  onChangeAnio($event) {
    this.selectedAnio = $event;
    this.renderChart();
  }
  onChangeMes($event) {
    this.selectedMes = $event;
    this.renderChart();
  }
  onChangeDim($event) {
    this.selectedDim = $event['dimension'];
    this.renderChart();
  }
  ngOnInit(): void {
    const decodeUser = jwt_decode(localStorage.getItem("currentUser"));
    if (decodeUser.rol === "PIE" || decodeUser.rol === "Admin") {
    this.renderChart();

    this.svc.getDimTiempo('anio').subscribe((result) => {
      this.anios = result['datosDimension'];
    });
    this.svc.getDimTiempo('mes').subscribe((result) => {
      this.meses = result['datosDimension'];
    });
    // this.anios$ = this.svc.getMembers('anio');
    // this.meses$ = this.svc.getMembers('mes');
  }
  else
  {
    alert("No tienes permisos para ver gráfico de pie");
    this.router.navigate(["/historico"]);
  }
  }
}
