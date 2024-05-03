<template>
    <div class="w-[250px] flex flex-col gap-[10px] p-[16px] ">
        <NCard>
            <template #cover>
                <NuxtLink :to="generateUrl" class="flex justify-between flex-col h-full">
                    <img :src="book.image" class="max-h-[300px]">
                </NuxtLink>
            </template>
            <span class="truncate font-[500] text-[16px] block">{{ book.title }}</span>
            <span class="truncate font-[400] text-[14px] block">{{ book.author }}</span>
            <div class="w-full flex justify-end">
                <span class="truncate font-[500] text-[20px] mb-4">{{ book.price }} ₺</span>
            </div>
            <div class="block w-full">


                <div v-if="book.size > 0" class="flex">
   
                    <NButton color="#5BBCFF" ghost @click="deleteBasket(book)">
                            -
                    </NButton>

                   <div class="w-[100px] flex items-center justify-center"> <strong class=""> {{ book.size }}</strong> </div>
       
                   <NButton color="#5BBCFF" ghost  @click="addBasket(book)">
                            +
                    </NButton>

                </div>
                <NButton v-else color="#5BBCFF" ghost class="w-full" @click="addBasket(book)">
                    <template #icon>
                        <NIcon>
                            <CartIcon />
                        </NIcon>
                    </template>
                    Sepete Ekle
                </NButton>

            </div>
        </NCard>


    </div>
</template>

<script>
import { useBookStore } from '~/store/book-store.js';
import { storeToRefs } from 'pinia';
import { NCard, NButton, NIcon, NInputNumber } from 'naive-ui'
import { CartOutline as CartIcon } from '@vicons/ionicons5'

export default {
    name: 'bookCard',
    props: ['book'],
    components: { NCard, NIcon, NButton, NInputNumber, CartIcon },
    setup(props) {
        const showAdded = ref(false);
        const bookStore = useBookStore();
        const { getBooks, getCard } = storeToRefs(bookStore);

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
            }, 500);
        }

        const deleteBasket = (id) => {
            bookStore.deleteCard(id)
        }
        return {
            generateUrl, addBasket, showAdded, value: ref(0), getCard, deleteBasket
        }
    }
}
</script>