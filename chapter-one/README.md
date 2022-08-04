# Conceitos

## Node.JS

    Plataforma open-source que permite execução da linguagem JavaScript do lado do servidor.

## API Rest

    API é acrônimo para Application Programming Interface. 

    Conjunto de especificações de possíveis interações entre aplicações.

    REST é acrônimo para Representation State Transfer.

    É um modelo de arquitetura.

## Métodos de Requisição

    HTTP Verbs

        GET - Leitura. Buscar uma informação dentro do servidor.
        POST - Criação. Inserir uma informação no servidor.
        PUT - Atualização. Alterar um ainformação no servidor.
        DELETE - Deleção. Deletar ua informação no servidor.
        PATCH - Atualização parcial. Alterar uma informação específica.

    HTTP Codes

        1XX - Informativo
        2XX - Confirmação
            200: Requisição bem sucedida
            201: Created - Geralmente usado para POST após uma inserção
        3XX - Redirecionamento
            301: Moved Permanently
            302: Moved
        4XX - Erro do cliente
            400: Bad request
            401: Unauthorized
            403: Forbidden
            404: Not found
            422: Unprocessable Entity
        5XX - Erro no servidor
            500: Internal Server Error
            502: Bad Gateway

    Tipos de Parâmetros das Requisições
        Header Params
        Query Params => Paginação / Filtro de busca
        Route Params => Identificar um recurso para editar /deletar / buscar
        Body Params => Os objetos que serão passados para inserção / alteração

## Iniciar projeto

    yarn init -y: cria um arquivo package.json inicial

    Express: Framework que auxilia no gerenciamento de rotas, criação de servidor para a aplicação ...

    yarn add express

    Nodemon: reload automático

    yarn add nodemon -D

    Insomnia e Postman: Ferramenta para testar APIs