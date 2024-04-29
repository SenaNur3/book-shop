<template>
    <div
        class="w-[200px] flex flex-col border rounded-lg h-[320px] gap-[10px] p-[16px] bg-[#C6DCBA] border-[#BBC3A4]  font-mono">
        <img :src="book.imageUrl" alt="Book Cover" />
        <div class="book-details" @mouseenter="show=true" @mouseleave="show=false">
            <h3 class="italic font-sans text-center w-full mb-[10px]">{{ book.title }}</h3>
            <p class="whitespace-nowrap overflow-hidden text-ellipsis">Author: {{ book.author }}</p>
            <p class="whitespace-nowrap overflow-hidden text-ellipsis">Price: ${{ book.price }}</p>
            <p class="whitespace-nowrap overflow-hidden text-ellipsis">Pages: {{ book.pages }}</p>
        </div>
        <div class="" v-if="show">
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Sepete Ekle</button>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['book'])
let show= false;
console.log(show)
</script>