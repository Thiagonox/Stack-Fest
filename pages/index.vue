<template>
    <Header />
    <div class="w-full h-[90%] flex">
        <div class="w-1/2 bg-neutral-content flex items-end">
            <div class="h-1/2 ml-16 mb-8 flex flex-col justify-around">
                <h1 class="text-7xl text-base-300 font-Inter font-bold">Bem vindo ao <br> Stack Fest</h1>
                <p class="text-4xl text-base-300 font-Inter">Uma plataforma amigavel para <br> a criação de eventos online
                </p>
                <div>
                    <button class="btn btn-primary text-3xl font-Inter font-bold btn-lg">Criar</button>
                    <button class="btn btn-ghost text-base-300 text-3xl font-Inter font-bold btn-lg">Saiba mais</button>
                </div>
            </div>
        </div>
        <div class="w-1/2">
            <button class="w-1/3 h-full bg-accent">
                <p class="text-5xl font-Inter text-white font-extrabold transform rotate-90">Congressos</p>
            </button>
            <button class="w-1/3 h-full bg-primary">
                <p class="text-5xl font-Inter text-white font-extrabold transform rotate-90">Palestras</p>
            </button>
        <button class="w-1/3 h-full bg-secondary">
            <p class="text-5xl font-Inter text-white font-extrabold transform rotate-90">Eventos</p>
        </button>
    </div>
</div></template>