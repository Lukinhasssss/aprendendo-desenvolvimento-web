select * from prefeitos;
select * from cidades;

select * from cidades c inner join prefeitos p on c.id = p.cidade_id; -- Pega somente prefeitos que tem relação com alguma cidade
select * from cidades c left join prefeitos p on c.id = p.cidade_id; -- Pega os prefeitos que tem relação + o conteúdo da tabela esquerda
select * from cidades c right join prefeitos p on c.id = p.cidade_id; -- Pega os prefeitos que tem relação + o conteúdo da tabela direita
-- select * from cidades c full join prefeitos p on c.id = p.cidade_id;

-- Simulando um full join
select * from cidades c left join prefeitos p on c.id = p.cidade_id
union -- Faz a união das duas consultas
select * from cidades c right join prefeitos p on c.id = p.cidade_id;