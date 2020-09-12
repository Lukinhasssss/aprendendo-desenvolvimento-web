-- ALTERANDO A TABELA empresas PARA FICAR COM O TIPO DE CAMPO CORRETO
ALTER TABLE empresas MODIFY cnpj VARCHAR(14); -- Modifica o campo cnpj para o tipo VARCHAR com 14 caracteres

-- INSERINDO ITENS NA TABELA empresas
INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 95694186000132), -- Dará erro pois o valor é maior do que um inteiro aceita por padrão
    ('Vale', 27887148000146), -- Como são somente numeros eu não preciso utilizar as aspas simples ''
    ('Cielo', 01598317000134);

desc empresas; -- Descreve o conteúdo da tabela
desc prefeitos;
select * from empresas;
select * from cidades;

-- INSERINDO ITENS NA TABELA empresas_unidades
INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1), -- (empresa_id = Bradesco), (cidade_id = Campinas), (sede = VERDADEIRO)
    (1, 2, 0), -- (empresa_id = Bradesco), (cidade_id = Niterói), (sede = FALSO)
    (2, 1, 0), -- (empresa_id = Vale), (cidade_id = Campinas), (sede = FALSO)
    (2, 2 ,1); -- (empresa_id = Vale), (cidade_id = Niterói), (sede = VERDADEIRO)