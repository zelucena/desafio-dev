## Estrutura de diretórios
    .                           # configuração de arquivos externos
    ├── node_modules
    ├── dist                    # Build para produção
    ├── coverage                # Arquivos de coverage
    ├── src                     # Código-fonte da aplicação
        ├── config              # Setup global
        ├── controllers         # Reconhece Express e I/O HTTP; invoca os casos de uso
        ├── entity              # Entidades mapeadas pelo Typeorm
        ├── migrations          # Migrações do banco de dados pelo Typeorm
        ├── services            # Funcionalidades de domínio
        ├── modules             # Implementações concretas e bibliotecas externas
        ├── shared              # Miscelânea para ser reaproveitada por toda a aplicação
        |   ├── errors          # Classes de erros
        |   ├── http            # Ponto de entrada da aplicação |por I/O HTTP / biblioteca express
        |   ├── routes          # Diretório contendo as rotas |HTTP
        |   ├── app.ts          # Instância da aplicação a ser |servida pelo Express ou pelo Supertest (integration tests)
        |   ├── server.ts       # Ponto de entrada da aplicação
        |
        ├── test                # Suites de testes
            ├── fixture         # Dados-padrão para testes unitários consistentes
            ├── unit            # Testes unitários dos services e módulos


## Executando a aplicação
### Backend
1. Criar um banco de dados com um nome arbitrário (ex. cnab)
2. Copiar o arquivo ormconfig.example.json para ormconfig.json `cp ormconfig.example.json ormconfig.json`

3. Copiar o arquivo .env.example para .env `cp .env.example .env`
4. Preencher as variáveis de ambiente conforme necessário
5. Executar o script `npm run typeorm migration:run` para atualizar a estrutura das tabelas
6. Executar `npm run dev`
7. (Opcional): Executar suítes de teste `npm run test`

### frontend
1. Copiar o arquivo .env.example para .env
`cp .env.example .env`
2. Preencher as variáveis de ambiente conforme necessário
3. Executar `npm run start`

