CREATE TABLE IF NOT EXISTS empresas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cnpj int unsigned, -- Não faz muito sentido utilizar int para o campo cnpj pois não será utilizado para fazer contas
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
);

-- cidades_empresas
CREATE TABLE IF NOT EXISTS empresas_unidades (
    empresa_id INT UNSIGNED NOT NULL,
    cidade_id INT UNSIGNED NOT NULL,
    sede TINYINT(1) NOT NULL, -- TINYINT --> 1 único valor | 0 se ela não for sede 1 se ela for sede | 0 = FALSO   1 = VERDADEIRO
    PRIMARY KEY (empresa_id, cidade_id) -- A chave primária vai ser a composição de das colunas (empresa_id, cidade_id)
);