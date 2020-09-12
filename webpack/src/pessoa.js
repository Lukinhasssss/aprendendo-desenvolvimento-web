import './modulos/moduloA' // Neste caso da certo, pois, principal importa Pessoa e Pessoa importa moduloA

export default class Pessoa {
    cumprimentar() {
        return 'Bom dia!'
    }
}