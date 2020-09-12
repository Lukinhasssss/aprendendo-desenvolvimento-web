update estados -- update --> atualiza a tabela 'estados'
set nome = 'Maranhão' -- set --> Troca o nome para 'Maranhão'
where sigla = 'MA' -- Onde a sigla for igual à 'MA'

select nome from estados where sigla = 'MA'
select estados.nome from estados where sigla = 'MA'
select est.nome from estados est where sigla = 'MA' -- est é o apelido que posso dar para a tabela

update estados
set nome = 'Paraná',
    populacao = 11.32
where sigla = 'PR'

select
    est.nome,
    sigla,
    populacao
from estados est
where sigla = 'PR'