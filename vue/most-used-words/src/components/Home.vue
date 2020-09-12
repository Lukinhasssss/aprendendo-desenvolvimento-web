<template>
    <div>
        <v-container fluid>
            <v-form>
                <v-file-input
                    label="Selecione as Legendas"
                    prepend-icon="mdi-message-text"
                    append-outer-icon="mdi-send"
                    outlined
                    multiple
                    chips
                    v-model="files"
                    @click:append-outer="processSubtitles" /> <!-- v-file-input: Componente que vai pegar os arquivos de legenda para serem processados | multiple serve para selecionar vários arquivos -->
            </v-form>
            <div class="pills">
                <Pill v-for="word in groupedWords" :key="word.name"
                    :name="word.name" :amount="word.amount" /> <!-- v-for irá percorrer o array groupedWords -->
            </div>
        </v-container>
    </div>
</template>

<script>
import { ipcRenderer } from 'electron' // Para disparar um evento da interface gráfica que será disparado quando o usuário selecionar o method: processSubtitles()
import Pill from './Pill'

export default {
    components: { Pill },
    data() {
        return {
            files: [],
            groupedWords: []
        }
    },
    methods: {
        processSubtitles() {
            const paths = this.files.map(f => f.path)
            ipcRenderer.send('process-subtitles', paths) // Ou seja, eu quero enviar para o canal de comunicação 'process-subtitles' um determinado parâmetro que neste caso foi chamado de 'ping'
            ipcRenderer.on('process-subtitles', (event, resp) => {
                this.groupedWords = resp
            })
        }
    },
}
    // Dentro do script acesso os dados com o this e na parte do html acesso simplesmente o nome sem utilizar o this
</script>

<style>
    .pills {
        display: flex;
        flex-wrap: wrap; /* Para quebrar a linha caso tenha muitas palavras */
        justify-content: space-between;
    }
</style>