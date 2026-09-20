# 🥷 PROJECT VENOM — Honeypot de Cibersegurança

![Status do Projeto](https://shields.io)
![Tecnologia](https://shields.io)
![Ambiente](https://shields.io)

O **Project Venom** é um sistema de segurança defensiva (Honeypot) desenvolvido em JavaScript rodando sobre o ambiente Linux (WSL Ubuntu). Ele atua como uma armadilha na rede, simulando uma aplicação real vulnerável para atrair, detectar e registrar tentativas de intrusão em tempo real.

---

## 🛠️ Como o Sistema Funciona

1. **Escuta Ativa:** O servidor monitora silenciosamente a porta de rede `3000`.
2. **Engenharia Social Reversa (Blefe):** Quando um invasor tenta acessar o sistema, o Honeypot responde com um status falso de erro `401 Unauthorized`.
3. **Auditoria Geral:** O IP do atacante e a rota exata que ele tentou acessar são capturados imediatamente.
4. **Registro de Evidências:** Todas as ações são salvas automaticamente em um arquivo de log de segurança interno (`logs/venom.log`).

---

## 📊 Demonstração do Funcionamento (Logs de Auditoria)

Quando o sistema é ativado, os alertas disparam em tempo real no terminal do administrador:

```text
========== PROJECT VENOM INICIADO (JS) ==========
⚠️ ALERTA: [2026-09-19] IP: ::1 Rota: /teste-de-invasao
⚠️ ALERTA: [2026-09-19] IP: ::1 Rota: /favicon.ico
```

---

## 🚀 Tecnologias Utilizadas

* **Node.js** — Motor principal para gerenciamento do servidor HTTP.
* **JavaScript** — Lógica de captura de requisições e sockets.
* **Linux (WSL/Ubuntu)** — Infraestrutura de hospedagem e segurança local.
* **Git & GitHub** — Controle de versão e publicação do projeto.

---

# 🥷 PROJECT VENOM — Camada 2: Monitoramento de Aplicação

A **segunda etapa do Project Venom** amplia o sistema de segurança defensiva, adicionando uma aplicação simulada chamada **DevNotes** e um servidor HTTP próprio desenvolvido em JavaScript.

Nesta camada, o VENOM passa a monitorar o comportamento das requisições realizadas contra uma aplicação aparentemente legítima, permitindo identificar acessos, métodos HTTP, endereços IP, rotas e respostas de erro.

---

## 🛠️ Como o Sistema Funciona

1. **Aplicação Simulada:** O projeto utiliza o **DevNotes** como uma aplicação web para representar um possível alvo.
2. **Servidor de Monitoramento:** Um servidor HTTP desenvolvido em **Node.js** disponibiliza a aplicação na porta `3001`.
3. **Captura de Requisições:** Cada acesso realizado à aplicação é registrado contendo:

   * Método HTTP
   * Endereço IP
   * Rota solicitada
   * Data e hora
4. **Detecção de Rotas Inexistentes:** Quando uma rota não encontrada é acessada, o VENOM identifica o erro `404 Not Found` e gera um alerta de segurança.

---

## 📊 Demonstração do Funcionamento

Ao acessar uma rota inexistente, o sistema registra a atividade no terminal do administrador:

```text
🎭 VENOM CAMADA 2:
[2026-09-20T14:48:10.861Z]
CAMADA 2 | MÉTODO: GET | IP: ::1 | Rota: /nao-existe

🚨 VENOM |
MÉTODO: GET | IP: ::1 |
Rota: /nao-existe | STATUS: 404
```

---

## 🏗️ Arquitetura da Segunda Camada

```text
                    🌐 REQUISIÇÃO
                          │
                          ▼
              ┌─────────────────────┐
              │   DEVNOTES :3001    │
              │  Aplicação simulada │
              └──────────┬──────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │  VENOM MONITORING   │
              │       Node.js       │
              └──────────┬──────────┘
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
        📝 LOG DE ACESSO       🚨 ALERTA 404
```

---

## 🚀 Tecnologias Utilizadas

* **Node.js** — Servidor HTTP e mecanismo de monitoramento.
* **JavaScript** — Lógica de captura das requisições.
* **HTML/CSS/JavaScript** — Aplicação simulada DevNotes.
* **HTTP** — Comunicação entre cliente e servidor.
* **Git & GitHub** — Controle de versão e publicação do projeto.

---

## 🛡️ Evolução do Project Venom

Na primeira camada, o VENOM atua como um **Honeypot**, atraindo e registrando tentativas de acesso.

Na segunda camada, o projeto evolui para uma estrutura capaz de **monitorar uma aplicação simulada**, observando o comportamento das requisições e identificando eventos como acessos a rotas inexistentes.

Essa evolução aproxima o projeto de um cenário real de **monitoramento e defesa de aplicações web**.

---

Developed with 💻 by Sandro (sandro469).
