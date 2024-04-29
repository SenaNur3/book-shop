<template>
    <div class="w-[200px] flex flex-col border rounded-lg h-[320px] gap-[10px] p-[16px] bg-[#C6DCBA] border-[#BBC3A4]">
        <img :src="book.imageUrl" alt="Book Cover" /> 
        <div class="book-details">
            <h3 class="italic text-center w-full mb-[10px]">{{ book.title }}</h3>
            <p class="whitespace-nowrap overflow-hidden text-ellipsis">Author: {{ book.author }}</p>
            <p class="whitespace-nowrap overflow-hidden text-ellipsis">Price: ${{ book.price }}</p>
            <p class="whitespace-nowrap overflow-hidden text-ellipsis">Pages: {{ book.pages }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['book'])

console.log(props.foo)

</script>