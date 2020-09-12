<template>
    <div class="user-admin">
        <b-form>
            <input id="user-id" type="hidden" v-model="user.id" />
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome:" label-for="user-name">
                        <b-form-input id="user-name" type="text" v-model="user.name" placeholder="Informe o Nome do Usuário..." required :readonly="mode === 'remove'" />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="E-mail:" label-for="user-email">
                        <b-form-input id="user-email" type="text" v-model="user.email" placeholder="Informe o E-mail do Usuário..." required :readonly="mode === 'remove'" />
                    </b-form-group>
                </b-col>
            </b-row>

            <b-form-checkbox id="user-admin" v-show="mode ==='save'" v-model="user.admin" class="mt-3 mb-3">
                Administrador?
            </b-form-checkbox>

            <b-row v-show="mode ==='save'">
                <b-col md="6" sm="12">
                    <b-form-group label="Senha:" label-for="user-password">
                        <b-form-input id="user-password" type="password" v-model="user.password" placeholder="Informe a Senha do Usuário..." required />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Confirmação de Senha:" label-for="user-confirm-password">
                        <b-form-input id="user-confirm-password" type="password" v-model="user.confirmPassword" placeholder="Confirme a Senha do Usuário..." required />
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col xs="12">
                    <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
                    <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
                    <b-button class="ml-2" @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>
        <hr>
        <b-table hover striped :items="users" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadUser(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadUser(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
    name: 'UserAdmin',
    data: function() {
        return {
            mode: 'save',
            user: {},
            users: [],
            fields: [ // Para definir os campos que vão ser utilizados no <b-table>
                { key: 'id', label: 'Código', sortable: true },
                { key: 'name', label: 'Nome', sortable: true },
                { key: 'email', label: 'E-mail', sortable: true },
                { key: 'admin', label: 'Administrador', sortable: true, formatter: value => value ? 'Sim' : 'Não' },
                { key: 'actions', label: 'Ações' }
            ]
        }
    },
    methods: {
        loadUsers() {  // Método para carregar a lista de usuários do backend
            const url = `${baseApiUrl}/users`
            axios.get(url).then(resp => {
                this.users = resp.data
            })
        },
        reset() {
            this.mode = 'save'
            this.user = {}
            this.loadUsers()
        },
        save() {
            const method = this.user.id ? 'put' : 'post' // Se o id estiver setado significa que o método será o PUT caso contrário será o POST
            const id = this.user.id ? `/${this.user.id}` : ''
            axios[method](`${baseApiUrl}/users${id}`, this.user) // this.user será o "parâmetro da requisição"
                .then(() => { // Caso dê tudo certo...
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError) // Caso dê algum erro
        },
        remove() {
            const id = this.user.id
            axios.delete(`${baseApiUrl}/users/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        loadUser(user, mode = 'save') { // Para carregar somente 1 usuário
            this.mode = mode
            this.user = { ...user } // carrega o usuário que estou recebendo por parâmetro para assumir o this.user. O this.user é o usuário que é referenciado no formulário
        }
    },
    mounted() { // Quando carregar o componente automáticamente vai chamar os métodos passados aqui
        this.loadUsers()
    }
}
</script>

<style>

</style>