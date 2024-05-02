<template>
    <div
        class="w-[250px] flex flex-col border rounded-lg h-[400px] gap-[10px] p-[16px] bg-[#EEF5FF] border-[#B4D4FF]  font-mono">
        <NuxtLink :to="generateUrl" class="flex justify-between flex-col h-full">
            <img :src="book.cover_image" alt="Book Cover" class="w-[300px] h-[200px]" />
            <div class="book-details">
                <h3 class="italic font-sans text-center w-full mb-[10px]">{{ book.title }}</h3>
                <p class="whitespace-nowrap overflow-hidden text-ellipsis">Author: {{ book.author }}</p>
                <p class="whitespace-nowrap overflow-hidden text-ellipsis">Price: ${{ book.publication_year }}</p>
                <p class="whitespace-nowrap overflow-hidden text-ellipsis">Pages: {{ book.description }}</p>
            </div>
        </NuxtLink>
        <div class="flex  justify-end">
            <button v-if="showAdded" class="bg-[#8DECB4] text-[#3C5B6F] p-[3px] rounded-md w-[95px] h-[30px] whitespace-nowrap text-xs"
                @click="addBasket(book.id)">Sepete Ekledi</button>
            <button v-else class="bg-blue-500 text-white p-[3px] rounded-md w-[95px] h-[30px] whitespace-nowrap text-xs"
                @click="addBasket(book.id)">Sepete Ekle</button>
            
        </div>

    </div>
</template>

<script>
import { useBookStore } from '~/store/book-store.js';
import { storeToRefs } from 'pinia';

export default {
    name: 'bookCard',
    props: ['book'],
    setup(props) {
        const showAdded = ref(false);
        const bookStore = useBookStore();
        const { getBooks } = storeToRefs(bookStore);

        const generateUrl = computed(() => {
            const modifiedTitle = props.book.title.replace(/\s+/g, '-').toLowerCase();
            const url = `/book/${modifiedTitle}-p-${props.book.id}`;
            return url;
        });

        const addBasket = (id) => {
            bookStore.addCard(id)
            showAdded.value = true; 
            console.log(id, "ürün eklendi")
            setTimeout(() => {
                showAdded.value = false;
            },500);
        }
        return { generateUrl, addBasket, showAdded } 
    }
}
</script>~/store/book-store.js