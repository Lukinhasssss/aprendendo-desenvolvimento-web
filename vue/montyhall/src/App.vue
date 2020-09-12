<template>
    <div id="app">
        <h1>Problema de Monty Hall</h1>
        <!-- <Door number="1" :hasGift="false" /> -->
        <div class="form">
            <div v-if="!started">
                <label for="portsAmount">Quantas portas? </label>
                <input type="text" id="portsAmount" size="3"
                    v-model.number="portsAmount">
            </div>
            <div v-if="!started">
                <label for="selectedPort">Qual porta é a premiada? </label>
                <input type="text" id="selectedPort" size="3"
                    v-model.number="selectedPort">
            </div>
            <button v-if="!started" @click="started = true">Iniciar</button>
            <button v-if="started" @click="started = false">Reiniciar</button>
        </div>
        <div class="doors" v-if="started">
            <div v-for="i in portsAmount" :key="i">
                <Door :hasGift="i === selectedPort" :number="i" />
            </div>
        </div>
    </div>
</template>

<script>
import Door from './components/Door'

export default {
    name: 'App',
    components: { Door },
    data() {
        return {
            started: false,
            portsAmount: 3,
            selectedPort: null
        }
    },
}
</script>

<style>
    * {
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
    }

    body {
        color: #FFF;
        /* background: linear-gradient(to right, #000000, #0f9b0f); */
        background: linear-gradient(to right, #0575e6, #021b79);
    }

    #app {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #app h1 {
        border: 1px solid #000;
        background-color: #0004;
        padding: 20px;
        margin-bottom: 60px;
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }

    .form, .form input, .form button {
        margin-bottom: 10px;
        font-size: 1.2rem;
    }

    .doors {
        align-self: stretch;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap; /* Para quebrar a linha quando o conteúdo não couber */
    }
</style>