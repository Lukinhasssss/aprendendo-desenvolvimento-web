<template>
    <div class="calculator">
        <!-- <Display value="1000"/> -->
        <Display :value="displayValue" />
        <Button label="AC" triple @onClick="clearMemory" />
        <Button label="/" operation @onClick="setOperation" />
        <Button label="7" @onClick="addDigit" />
        <Button label="8" @onClick="addDigit" />
        <Button label="9" @onClick="addDigit" />
        <Button label="*" operation  @onClick="setOperation" />
        <Button label="4" @onClick="addDigit" />
        <Button label="5" @onClick="addDigit" />
        <Button label="6" @onClick="addDigit" />
        <Button label="-" operation  @onClick="setOperation" />
        <Button label="1" @onClick="addDigit" />
        <Button label="2" @onClick="addDigit" />
        <Button label="3" @onClick="addDigit" />
        <Button label="+" operation  @onClick="setOperation" />
        <Button label="0" double @onClick="addDigit" />
        <Button label="." @onClick="addDigit" />
        <Button label="=" operation  @onClick="setOperation" />
    </div>
</template>

<script>
import Button from "../components/Button"
import Display from "../components/Display"

export default {
    // data() {
    //     return {
    //         displayValue: "0",
    //         clearDisplay: false,
    //         operation: null,
    //         values: [0, 0], // Valores necessários para ficar fazendo as operações na calculadora
    //         current: 0 // Para saber qual valor está sendo trabalhado, se é o de índice 0 ou o de índice 1
    //     }
    // },
    data: function() { // Data recebe uma função que retorna o initialState (estado inicial) do meu objeto
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0], // Valores necessários para ficar fazendo as operações na calculadora
            current: 0 // Para saber qual valor está sendo trabalhado, se é o de índice 0 ou o de índice 1
        }
    },
    components: { Button, Display },
    methods: {
        clearMemory() { // Limpa o data para voltar ao estado inicial (initialState)
            // console.log('Limpar Memória!')
            Object.assign(this.$data, this.$options.data()) // this.$options.data() --> é o estado inicial do objeto, ou seja, estou atribuindo o estado inicial do objeto em this.$data
        },
        setOperation(operation) {
            // console.log('Operação ' + operation)
            if (this.current === 0) {
                this.operation = operation
                this.current = 1 // Vai começar a digitar no segundo valor
                this.clearDisplay = true
            } else {
                const equals = operation === "=" // equals recebe operation if operation for igual a "="
                const currentOperation = this.operation

                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}` // Faz uma operação em cima dos dois elementos do array
                    )
                } catch (e) {
                    this.$emit('onError', e)
                }

                this.values[1] = 0

                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals // Qualquer operação diferente de "=" irá limpar o display quando o próximo dígito for informado
            }
        },
        addDigit(n) {
            // console.log('Digito ' + n)
            if (n === "." && this.displayValue.includes(".")) { // Se 'n' for igual a '.' e dentro do displayValue já estiver incluso o ponto...
                return // Finaliza a chamada sem retorna nada
            }

            const clearDisplay = this.displayValue === "0"
                || this.clearDisplay
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n

            this.displayValue = displayValue // displayValue é uma const somente desta função e this.displayValue de fato está acessando o displayValue de data (initialState)
            this.clearDisplay = false

            // Alternativa 1
            this.values[this.current] = displayValue

            // Alternativa 2
            // if (n !== ".") {
            //     const i = this.current
            //     const newValue = parseFloat(displayValue)
            //     this.values[i] = newValue
            // }
        }
    },
}
</script>

<style>
    .calculator {
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px;
    }
</style>