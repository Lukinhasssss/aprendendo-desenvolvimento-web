CREATE TABLE IF NOT EXISTS cidades ( -- Crie a tabela se não existir
    id INT UNSIGNED NOT NULL AUTO_INCREMENT, -- Será a primary key (PK) da tabela
    nome VARCHAR(255) NOT NULL,
    estado_id int UNSIGNED NOT NULL, -- Toda cidade estará obrigatóriamente vinculada a um estado
    area DECIMAL(10,2), -- Vai ser composta por 10 dígitos sendo dois deles com ponto flutuante. Será uma área em KM²
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados (id) -- Chave estrangeira que referencia uma coluna de outra tabela, ou seja, a coluna id da tabela estados
);

-- Excluindo uma tabela
-- CREATE TABLE IF NOT EXISTS teste (
--     id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
-- );

-- DROP TABLE IF EXISTS teste;