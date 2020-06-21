import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CuboNorthwindService {
  constructor(private http: HttpClient) {}
  getTop5(dimension: string, anio: string, mes: string, order: string) {
    if (anio === '' && mes === '')
      return this.http.get(`http://192.168.1.76/API.Northwind.ISSC811/backend/Top5/${dimension}`);
    return this.http.get(
      `http://192.168.1.76/API.Northwind.ISSC811/backend/Top5/${dimension}/${anio}/${mes}`
    );
  }

  getHistorico(dimension: string, elemento: string) {
    return this.http.get(
      `http://192.168.1.76/API.Northwind.ISSC811/backend/HistoricoMesAnual/${dimension}/${elemento}`
    );
  }

  getMembers(dimension: string) {
    return this.http
      .get(`http://192.168.1.76/API.Northwind.ISSC811/backend/GetMembers/${dimension}`)
      .pipe(map((result: any) => result.datosDimension));
  }

  getDimTiempo(granularidad: string) {
    return this.http.get(
      `http://192.168.1.76/API.Northwind.ISSC811/GetMembers/${granularidad}`
    );
  }
}
