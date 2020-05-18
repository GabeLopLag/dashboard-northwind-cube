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
    debugger;
    return this.http.get(
      `https://localhost:44342/backend/Top5/${dimension}/${anio}`
    );
  }

  getHistorico(dimension: string, elemento: string) {
    return this.http.get(
      `https://localhost:44342/backend/HistoricoMesAnual/${dimension}/${elemento}`
    );
  }

  getMembers(dimension: string) {
    return this.http
      .get(`https://localhost:44342/backend/GetMembers/${dimension}`)
      .pipe(map((result: any) => result.datosDimension));
  }
}
