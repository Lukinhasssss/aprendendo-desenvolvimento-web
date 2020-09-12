var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)
// É possível ter duas variáveis com o mesmo nome desde que elas tenham escopos diferentes!!!
// Só existe escopo de 'var' dentro de função, fora de função é global!!!