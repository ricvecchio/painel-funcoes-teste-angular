import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // <-- note o "styleUrls" no plural
})
export class AppComponent {
  loading = false;
  resposta: any;

  constructor(private api: ApiService) {}

  abrirConta() {
    this.loading = true;
    this.api.abrirConta().subscribe({
      next: (res) => {
        this.resposta = res;
        this.loading = false;
      },
      error: (err) => {
        this.resposta = err;
        this.loading = false;
      }
    });
  }

  consultarContas() {
    this.loading = true;
    this.api.consultarContas().subscribe({
      next: (res) => {
        this.resposta = res;
        this.loading = false;
      },
      error: (err) => {
        this.resposta = err;
        this.loading = false;
      }
    });
  }

  testarServicos() {
    this.loading = true;
    Promise.all([
      this.api.pingContaService().toPromise(),
      this.api.pingKafkaService().toPromise()
    ])
      .then(([conta, kafka]) => {
        this.resposta = { conta, kafka };
        this.loading = false;
      })
      .catch((err) => {
        this.resposta = err;
        this.loading = false;
      });
  }
}
