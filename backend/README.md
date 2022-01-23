## File structure


### A typical top-level directory layout

    .                           # configuração de arquivos externos
    ├── node_modules
    ├── dist                    # Build para produção
    ├── coverage                # Arquivos de coverage
    ├── src                     # Código-fonte da aplicação
        ├── config              # Setup global
        ├── controllers         # Reconhece Express e I/O HTTP; invoca os casos de uso
        ├── services            # Funcionalidades de domínio
        ├── modules             # Implementações concretas e bibliotecas externas
        ├── models              # Plain models
        ├── shared              # Miscelânea para ser reaproveitada por toda a aplicação
