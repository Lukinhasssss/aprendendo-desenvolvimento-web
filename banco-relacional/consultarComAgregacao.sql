select
    regiao as 'Região',
    sum(populacao) as Total -- sum --> é a função de soma que neste caso vai somar a populacao
from `estados`
group by regiao -- group by --> vai fazer com que agrupe os dados que neste caso vai agrupar por região
order by Total desc -- Vai ordernar da região que tem mais população para a que tem menos população

-- Retornando a população total
select
    sum(populacao) as Total
from `estados`

-- Retornando a média da população total (distribuída igualmente entre todos os estados)
select
    avg(populacao) as Total -- avg --> Função que retorna a média
from `estados`