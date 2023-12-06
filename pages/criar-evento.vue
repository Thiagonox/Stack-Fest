<template>
    <div>
        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center">
            <div class="bg-white p-8 rounded-lg w-1/2">
                <h2 class="text-2xl font-bold mb-4">Cadastro de Empresa</h2>
                <form @submit.prevent="submitForm">
                    <div class="mb-4">
                        <label for="name" class="block mb-2">Nome</label>
                        <input v-model="name" type="text" id="name" class="form-input">
                    </div>
                    <div class="mb-4">
                        <label for="cnpj" class="block mb-2">CNPJ</label>
                        <input v-model="cnpj" type="text" id="cnpj" class="form-input">
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block mb-2">Email</label>
                        <input v-model="email" type="email" id="email" class="form-input">
                    </div>
                    <div class="mb-4">
                        <label for="phone" class="block mb-2">Telefone</label>
                        <input v-model="phone" type="text" id="phone" class="form-input">
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
        <div v-if="showForm">
            <h2 class="text-2xl font-bold mb-4">Criar Evento</h2>
            <form>
                <div class="mb-4">
                    <label for="eventName" class="block mb-2">Nome do Evento</label>
                    <input v-model="eventName" type="text" id="eventName" class="form-input">
                </div>
                <div class="mb-4">
                    <label for="eventDate" class="block mb-2">Data do Evento</label>
                    <input v-model="eventDate" type="date" id="eventDate" class="form-input">
                </div>
                <div class="mb-4">
                    <label for="eventDescription" class="block mb-2">Descrição do Evento</label>
                    <textarea v-model="eventDescription" id="eventDescription" class="form-textarea"></textarea>
                </div>
                <div class="mb-4">
                    <label for="totalTickets" class="block mb-2">Total de Tickets</label>
                    <input v-model="totalTickets" type="number" id="totalTickets" class="form-input">
                </div>
                <div class="mb-4">
                    <label for="eventAddress" class="block mb-2">Endereço do Evento</label>
                    <input v-if="!eventLink" v-model="eventAddress" type="text" id="eventAddress" class="form-input">
                </div>
                <div class="mb-4">
                    <label for="eventLink" class="block mb-2">Link do Evento</label>
                    <input v-if="!eventAddress" v-model="eventLink" type="text" id="eventLink" class="form-input">
                </div>
                <button type="submit" class="btn btn-primary">Criar Evento</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: true,
            showForm: false,
            name: '',
            cnpj: '',
            email: '',
            phone: '',
            eventName: '',
            eventDate: '',
            eventDescription: '',
            totalTickets: '',
            eventAddress: '',
            eventLink: ''
        }
    },
    methods: {
        submitForm() {
            this.showModal = false;
            this.showForm = true;
        }
    }
}
</script>

<style>
@import 'daisyui/dist/full.css';
</style>
