<template>
    <div class="flex bg-[#3C5B6F] w-full h-[80px] ">
        <NuxtLink to="/">
            <div class="w-1/2 flex items-center justify-start ml-4">
                <div class="text-[#DFD0B8] font-semibold text-4xl"> Book<span
                        class="text-[#948979] text-5xl">Shop</span>
                </div>
            </div>
        </NuxtLink>
        <div class="flex w-1/2 mr-4 justify-end items-center">
            <NuxtLink to="/cart">
                <NIcon size="40px" color="white">
                    <CartIcon />
                </NIcon>
                <span class="text-[#fff] text-[24px]" v-if="getCard.length > 0">{{ getCard.length }}</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
import { NIcon } from 'naive-ui'
import { useBookStore } from '~/store/book-store.js';
import { storeToRefs } from 'pinia';
import { CartOutline as CartIcon } from '@vicons/ionicons5'
export default {
    components: { CartIcon, NIcon },
    setup() {
        const bookStore = useBookStore();
        const { getCard } = storeToRefs(bookStore);

        return { getCard }
    }
}

</script>