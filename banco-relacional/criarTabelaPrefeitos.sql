CREATE TABLE IF NOT EXISTS prefeitos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id int unsigned, -- Campo que vai apontar para a chave primária de outra tabela, ou seja, será a chave estrangeira | Esse campo aceita NOT NULL
    PRIMARY KEY (id),
    UNIQUE KEY (cidade_id), -- Ou seja, não pode haver repetição na coluna cidade_id
    FOREIGN KEY (cidade_id) REFERENCES cidades (id) -- FK será cidade_id que faz referência na coluna id da tabela cidades
);