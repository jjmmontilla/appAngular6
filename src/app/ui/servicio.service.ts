import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ServicioService {

  private servicioUrl: string = 'http://localhost:8000/mi-servicio';
  private solicitudUrl: string = 'http://localhost:8000/solicitud';
  
  constructor(private http: HttpClient) { }
  
  public getServicios(): Observable<any> {
    return this.http.get(
      this.servicioUrl,
      { responseType: 'json' }
    );
  }
  
  public addServicio(servicio: any): Observable<any> {
    return this.http.post(this.solicitudUrl, servicio, httpOptions);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('ServicioService: ' + message);
  }
  
}
