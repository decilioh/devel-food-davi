# Develfood

**Develfood** é uma plataforma de restaurante que permite aos usuários fazerem pedidos de delivery de forma prática e eficiente. O sistema é projetado para facilitar a interação entre clientes e restaurantes, oferecendo uma interface simples para o gerenciamento de pedidos, promoções e pratos.

## Funcionalidades

### 1. Tela de Login
Permite que os usuários façam login no sistema com suas credenciais para acessar a plataforma.

### 2. Tela de Cadastro
Tela de registro para novos usuários, permitindo que eles criem uma conta fornecendo informações pessoais e de contato.

### 3. Tela Home
- Exibe a avaliação geral do restaurante.
- Mostra feedbacks dos clientes.
- Lista as promoções ativas.

### 4. Tela de Perfil
Permite que o usuário visualize e edite suas informações pessoais.

### 5. Tela de Promoções
- Lista todas as promoções ativas.
- Inclui opções para editar ou excluir promoções.

### 6. Tela de Cadastrar Promoções
Formulário para adicionar novas promoções ao sistema.

### 7. Tela de Pratos
- Lista todos os pratos disponíveis.
- Inclui opções para editar ou excluir pratos.

### 8. Tela de Cadastrar Novos Pratos
Formulário para adicionar novos pratos ao sistema.

### 9. Tela de Pedidos
Gerencia os pedidos recebidos, permitindo que eles sejam movidos pelas seguintes etapas:
- **Esperando aceitação**
- **Em preparo**
- **Em rota**
- **Entregue**

Cada pedido é representado por um card, que pode ser movido entre as diferentes etapas de acordo com o status do pedido.

## Objetivo

O principal objetivo do **Develfood** é proporcionar uma plataforma intuitiva e completa para restaurantes gerenciarem seus pedidos e ofertas, além de oferecer uma experiência simples para os usuários que desejam fazer pedidos de delivery.

## Tecnologias Utilizadas

- **Front-end**: React, TypeScript, Axios, React Hook Form, Zod
- **Back-end**: Java, Spring Boot
- **Banco de Dados**: MySQL (ou outro que você esteja usando)
- **Autenticação**: JWT com cookies
- **Upload de Imagens**: Firebase Storage
- **Testes**: Jest
- **Gerenciamento de Estado e Navegação**: React Router, Context API

## Como Rodar o Projeto

### Requisitos
- Node.js
- Java JDK 11+
- PostgreSQL (ou outro banco de dados)
- Firebase (para o armazenamento de imagens)
- React v18
- Typescript

### Passos

1. Clone o repositório:
    ```
    git clone https://github.com/decilioh/devel-food-davi.git
    ```

2. Navegue até o diretório do projeto:
    ```
    cd develfood
    ```

3. Instale as dependências do front-end:
    ```
    npm install
    ```

4. Configure o banco de dados e as credenciais no back-end (detalhe os arquivos de configuração, se necessário).

5. Rode o projeto no ambiente de desenvolvimento:
    ```
    npm run dev
    ```


## Contribuições

Fique à vontade para abrir issues ou enviar pull requests para melhorias no projeto!
