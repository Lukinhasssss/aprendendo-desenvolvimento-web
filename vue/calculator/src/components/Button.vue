<template>
    <button class="button"
    @click="$emit('onClick', label)"
        :class="{ double, triple, operation }"> <!-- Toda classe que for verdadeira será aplicada | $emit DISPARA UM EVENTO que neste caso é o onCalcButtonClick e este evento recebe o label como parâmetro -->
        {{ label }} <!-- OBS: onClick não é o evento padrão, o evento padrão é o @click -->
    </button>
</template>

<script>
export default {
    props: {
        label: {},
        operation: { type: Boolean },
        double: { type: Boolean },
        triple: { type: Boolean }
    }
}
</script>

<style>
    :root {
        --bg-button: #f0f0f0;
        --border-button: solid 1px #888;
    }

    .button {
        font-size: 1.4em;
        background-color: var(--bg-button);
        border: none;
        border-right: var(--border-button);
        border-bottom: var(--border-button);
        outline: none;
    }

    .button:active {
        background-color: #ccc;
    }

    .button.double {
        grid-column: span 2;
    }

    .button.triple {
        grid-column: span 3;
    }

    .button.operation {
        background-color: #fa8231;
        color: #fff;
    }

    .button.operation:active {
        background-color: #fa8231cc;
    }
</style>