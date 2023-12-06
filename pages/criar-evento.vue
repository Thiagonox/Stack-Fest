<template>
    <div>
        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center">
            <div class="bg-base-300 p-8 rounded-lg w-1/3">
                <h2 class="text-2xl font-bold mb-4">Cadastro de Empresa</h2>
                <form @submit.prevent="submitForm" class="">
                    <div class="mb-4">
                        <label for="name" class="block mb-2">Nome</label>
                        <input v-model="empresa.name" type="text" id="name" class="w-full input input-bordered rounded-xl">
                    </div>
                    <div class="mb-4">
                        <label for="cnpj" class="block mb-2">CNPJ</label>
                        <input v-model="empresa.cnpj" type="text" id="cnpj" class="w-full input input-bordered rounded-xl">
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block mb-2">Email</label>
                        <input v-model="empresa.email" type="email" id="email" class="w-full input input-bordered rounded-xl">
                    </div>
                    <div class="mb-4">
                        <label for="phone" class="block mb-2">Telefone</label>
                        <input v-model="empresa.phone" type="text" id="phone" class="w-full input input-bordered rounded-xl">
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>

        <transition name="form-transition" mode="out-in">
            <div :key="showForm" v-if="showForm" class="fixed inset-0 flex items-center justify-center">
                <div class="flex justify-center mb-4">
                    <span v-for="(indicator, index) in indicators" :key="index" class="h-2 w-2 mx-1 rounded-full"
                        :class="{ 'bg-primary-500': index === currentStep }"></span>
                </div>
                <div class="bg-base-300 p-8 rounded-lg w-1/3">
                    <h2 class="text-2xl font-bold mb-4">Criar Evento</h2>
                    <form>
                        <div class="mb-4">
                            <label for="eventName" class="block mb-2">Nome do Evento</label>
                            <input v-model="evento.eventName" type="text" id="eventName" class="w-full input input-bordered rounded-xl">
                        </div>
                        <div class="mb-4">
                            <label for="eventDate" class="block mb-2">Data do Evento</label>
                            <input v-model="evento.eventDate" type="date" id="eventDate" class="w-full input input-bordered rounded-xl">
                        </div>
                        <div class="mb-4">
                            <label for="eventDescription" class="block mb-2">Descrição do Evento</label>
                            <textarea v-model="evento.eventDescription" id="eventDescription" class="w-full textarea textarea-bordered rounded-xl"></textarea>
                        </div>
                        <div class="mb-4">
                            <label for="totalTickets" class="block mb-2">Total de Tickets</label>
                            <input v-model="evento.totalTickets" type="number" id="totalTickets" class="w-full input input-bordered rounded-xl">
                        </div>
                        <div class="mb-4">
                            <label for="totalTickets" class="block mb-2">Preço</label>
                            <input v-model="evento.preco" type="number" id="totalTickets" class="w-full input input-bordered rounded-xl">
                        </div>
                        <div class="mb-4">
                            <label for="eventAddress" class="block mb-2">Endereço do Evento</label>
                            <input v-if="!evento.eventLink" v-model="evento.eventAddress" type="text" id="eventAddress"
                            class="w-full input input-bordered rounded-xl">
                        </div>
                        <div class="mb-4">
                            <label for="eventLink" class="block mb-2">Link do Evento</label>
                            <input v-if="!evento.eventAddress" v-model="evento.eventLink" type="text" id="eventLink" class="w-full input input-bordered rounded-xl">
                        </div>
                        <button type="submit" class="btn btn-primary">Criar Evento</button>
                    </form>
                </div>
            </div>
        </transition>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            showModal: true,
            showForm: false,
            currentStep: 0,
            indicators: [0, 1], // Adapte conforme o número de etapas
            empresa: {
                name: '',
                cnpj: '',
                email: '',
                phone: '',
            },
            evento: {
                eventName: '',
                eventDate: '',
                eventDescription: '',
                totalTickets: '',
                eventAddress: '',
                eventLink: '',
                preco: '',
            }
        };
    },
    methods: {
        submitForm() {
            this.showModal = false;
            this.showForm = true;
        },
        nextStep() {
            if (this.currentStep < this.indicators.length - 1) {
                this.currentStep += 1;
            } else {
                // Lógica para finalizar o carrossel ou executar ação após a última etapa
            }
        },
    },
};
</script>
  
<style scoped>
.form-transition-enter-active,
.form-transition-leave-active {
    transition: opacity 0.5s;
}

.form-transition-enter,
.form-transition-leave-to {
    opacity: 0;
}
</style>
