select * from estados -- Seleciona todos os itens da tabela 'estados'

select nome, sigla from estados -- Seleciona apenas a coluna 'nome' e a coluna 'sigla'

select sigla, nome from estados -- Posso escolher a ordem que os itens serão mostrados

select Sigla as 'Sigla do Estado', nome as 'Nome do Estado' from estados -- as da um nome para a coluna mas sem renomeá-la

select Sigla, nome as 'Nome do Estado' from estados where regiao = 'Sudeste'

select
    Sigla,
    nome as 'Nome do Estado'
from estados
where regiao = 'Sudeste'

select nome, regiao from estados where populacao >= 10

select
    nome,
    regiao,
    populacao
from estados
where populacao >= 10
order by populacao desc -- Retorna nome e região que tem população >= 10 e ordena em ordem decrescente, crescente se remover o desc