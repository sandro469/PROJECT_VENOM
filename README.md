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
Developed with 💻 by Sandro (sandro469).
