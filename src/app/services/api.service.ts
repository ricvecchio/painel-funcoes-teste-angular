import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Endpoints base dos microsserviços
  private readonly CONTA_API = 'http://localhost:8081';
  private readonly KAFKA_API = 'http://localhost:8082';

  constructor(private http: HttpClient) {}

  /** Testa se o conta-service está ativo */
  pingContaService(): Observable<any> {
    return this.http.get(this.CONTA_API);
  }

  /** Testa se o kafka-service está ativo */
  pingKafkaService(): Observable<any> {
    return this.http.get(this.KAFKA_API);
  }

  /** Chama o conta-service (REST síncrono) para abrir uma nova conta */
  abrirConta(): Observable<any> {
    const body = {
      nomeCliente: 'Ricardo Del Vecchio',
      cpf: '12345678902',
      tipoConta: 'CORRENTE'
    };
    return this.http.post(`${this.CONTA_API}/api/contas/abrir`, body);
  }

  /** Chama o kafka-service (assíncrono) para consultar contas processadas */
  consultarContas(): Observable<any> {
    return this.http.get(`${this.KAFKA_API}/api/contas`);
  }
}
