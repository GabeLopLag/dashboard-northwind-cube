import { Component, OnInit } from '@angular/core';
import { CuboNorthwindService } from '../../services/cubo-northwind.service';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-top5dinamico',
  templateUrl: './top5dinamico.component.html',
  styleUrls: ['./top5dinamico.component.css'],
})
export class Top5dinamicoComponent implements OnInit {
  dataDimension: Label[] = [];
  dataValues: number[] = [];

  constructor(private svc: CuboNorthwindService) {}

  ngOnInit(): void {
    debugger;
    this.svc
      .getTop5('cliente', '1996', 'agosto', 'DESC')
      .subscribe((result) => {
        debugger;
        console.log(result);
        this.dataDimension = result['datosDimension'];
        this.dataValues = result['datosVenta'];
      });
  }
}
