# 🧭 painel-funcoes-teste-angular

Frontend em **Angular 20** desenvolvido para o projeto **API Funções Teste (Spring Boot + Kafka)**.  
O painel consome endpoints dos serviços `conta-service` (porta 8081) e `kafka-service` (porta 8082).

---

## 🚀 Tecnologias
- Angular 20
- TypeScript 5.8
- Angular Material
- RxJS e HttpClient
- Integração com backend Spring Boot e Kafka

---

## ⚙️ Como rodar localmente
```bash
git clone https://github.com/ricvecchio/painel-funcoes-teste-angular.git
cd painel-funcoes-teste-angular
npm install
npm start
```
--- 

Acesse no navegador:
👉 http://localhost:4200

---

## 🧩 Funcionalidades

- Abrir Conta: envia requisição para http://localhost:8081/api/contas/abrir
- Consultar Contas: consome http://localhost:8081/api/contas
- Testar Serviços: verifica status do Kafka (http://localhost:8082)

---

## 🧠 Próximos passos

- Habilitar CORS no backend (conta-service e kafka-service)
- Adicionar componentes Angular Material (cards, snackbar)
- Implementar telas de listagem de contas e histórico

---

### 📦 Repositório do backend: 👉  [api-funcoes-teste-spring](https://github.com/ricvecchio/api-funcoes-teste-spring/blob/main/README.md)


---

## 👨‍💻 Autor

**Ricardo Del Vecchio**

📬 @ricvecchio

---