<template>
    <div v-if="totalPrice() > 0" class="mb-[140px]">
    <div v-for="(book, index) in getCard" :key="index" class="flex items-center gap-4 mt-6 ml-10 mb-4">
        <img :src="book.image" :alt="book.title" class="w-[150px] h-[200px]">
        <strong class="block">{{ book.title }}</strong>
        <p class="inline-block">({{ book.size }} Adet)</p>
        <p class="inline-block">{{ book.price }} ₺</p>
    </div>

    <span class="flex justify-center text-[#4CCD99] font-[500] ml-10 text-[27px]">Toplam: {{ totalPrice() }} ₺</span>

</div> 


<div class="mt-16" v-else>
    <NResult
    status="warning"
    title=":("
    description="Sepet boş ürün eklemelisin."
  >
  </NResult>

</div>
</template>

<script>
import { useBookStore } from '~/store/book-store.js';
import { storeToRefs } from 'pinia';
import { NList, NListItem, NResult } from 'naive-ui';

export default {
    name: "index",
    components: { NList, NListItem, NResult },
    async setup() {
        let total = ref(0);
        const bookStore = useBookStore();
        const { getCard } = storeToRefs(bookStore);
    
        const totalPrice = () => {
            getCard.value.map((item) => {
                total.value += item.size * item.price
            })

            return  Math.floor(total.value);
        }


        return {
            getCard,
            totalPrice
        }
    }
}


</script>