-- Criando a tabela estado!
CREATE TABLE estados (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT, -- Cria a coluna 'id'
    nome VARCHAR(45) NOT NULL, -- Cria a coluna 'nome'
    sigla VARCHAR(2) NOT NULL, -- Cria a coluna 'sigla'
    regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL, -- Cria a coluna 'regiao' que só aceita valores pré-definidos
    populacao DECIMAL(5,2) NOT NULL, -- Cria a coluna 'populacao' com um número decimal de 5 digitos e 2 digitos são pontos flutuantes
    PRIMARY KEY (id), -- Por fim eu defino que a chave primária vai ser a coluna 'id'
    UNIQUE KEY (nome),
    UNIQUE KEY (sigla)
);

-- UNSIGNED --> signica que este será um valor sem sinal
-- AUTO_INCREMENT --> significa que se você não passar um valor para a id ele vai gerar um valor inteiro e vai incrementando para cada nova inserção
-- Obs: mesmo o campo sendo AUTO_INCREMENT é possível colocar no insert o id
-- ENUM --> Significa que só poderá ser inserido na coluna algum dos valores determinados no ENUM
-- UNIQUE KEY --> Impede que haja duplicidade em determinada coluna