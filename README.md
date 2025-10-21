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

## 🧩 Funcionalidades

- **Cria uma nova conta e envia para o Kafka (conta-service):** POST `http://localhost:8081/api/contas/abrir`
- **Lista as contas processadas e persistidas (kafka-service):** GET `http://localhost:8082/api/contas`

---

## ▶️ Como rodar localmente 

### 1️⃣ Clonar o repositório do GitHub

- Clone este repositório

```bash
git clone https://github.com/ricvecchio/painel-funcoes-teste-angular.git
```

### 2️⃣ Navegação local do projeto
```bash
cd ~/"Projetos/Projeto para Estudos (Frontend + Backend)/painel-funcoes-teste-angular"
```

### 3️⃣ Instalar as dependências e abrir o servidor de desenvolvimento
```bash
npm install
ng serve --open
```

Navegador local:
👉 http://localhost:4200

---

### 🚀 Compilar para produção (opcional)
Gerar os arquivos otimizados para deploy (ex.: Render, Vercel, Hostinger etc.):
```bash
ng build --configuration production
```
Os arquivos gerados ficam em `dist/nome-do-projeto/`.

---

## 🧠 Próximos passos

- Adicionar componentes Angular Material (cards, snackbar)
- Implementar telas de listagem de contas e histórico

---

### 📦 Repositório do backend: 👉  [api-funcoes-teste-spring](https://github.com/ricvecchio/api-funcoes-teste-spring/blob/main/README.md)


---

## 👨‍💻 Autor

**Ricardo Del Vecchio**

📬 @ricvecchio

---