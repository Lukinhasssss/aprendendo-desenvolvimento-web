-- OBS: É MUITO IMPORTANTE TER UM APELIDO PARA CADA TABELA PARA QUE VOCÊ POSSA REFERENCIAR NA HORA DE FAZER UM SELECT POR EXEMPLO
-- MAS NÃO É OBRIGATÓRIO

select * from `estados` e, `cidades` c -- e = apelido para estados -- c = apelido para cidades
-- No caso acima o resultado será um produto cartesiano, ou seja, todas as linhas da tabela estados vão estar relacionadas com
-- todas as linhas da tabela cidades

select * from `estados` e, `cidades` c
where e.id = c.estado_id; -- Tem que igualar a PK da tabela estados com a FK (estado_id) da tabela cidades

select
    e.nome as Estado,
    c.nome as Cidade,
    regiao as Região
from `estados` e, `cidades` c
where e.id = c.estado_id; -- Aqui deve ser dito as colunas que vão ser iguais

select
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from `estados` e
inner join `cidades` c
on e.id = c.estado_id -- Aqui deve ser dito as colunas que vão ser iguais

OBSERVAÇÃO IMPORTANTE --> O INNER SÓ VAI TRAZER OS DADOS QUE TENHAM RELAÇÃO ENTRE A CHAVE PRIMÁRIA (PK) COM A CHAVE ESTRANGEIRA (FK) DE OUTRA TABELA