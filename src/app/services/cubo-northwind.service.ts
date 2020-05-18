import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CuboNorthwindService {
  constructor(private http: HttpClient) {}
  getTop5(dimension: string, anio: string, mes: string, order: string) {
    return this.http.get(
      `https://localhost:44342/backend/Top5/${dimension}/${anio}/${mes}/${order}`
    );
  }

  getHistorico(dimension: string, elemento: string) {
    return this.http.get(
      `https://localhost:44342/backend/HistoricoMesAnual/${dimension}/${elemento}`
    );
  }
}
