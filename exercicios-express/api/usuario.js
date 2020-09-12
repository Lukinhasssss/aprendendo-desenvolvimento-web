function salvar(req, resp) {
    resp.send('Usuário > salvar')
}

function obter(req, resp) {
    resp.send('Usuário > obter')
}

module.exports = { salvar, obter }