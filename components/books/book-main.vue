<template>
  <div class="flex justify-center gap-4 mt-[20px] flex-wrap max-w-[1200px]">
    <div
      class="bg-[#B4D4FF] h-[20px] absolute right-0  w-[60px] h-[60px] rounded-full flex justify-center items-center text-xl">
      <NDropdown trigger="click" :options="options" @select="handleSelect" size="huge">
        <NButton></NButton>
      </NDropdown>
    </div>

    <BookCard v-for="book in getBooks" :key="book.id" :book="book" />
  </div>
</template>

<script>
import BookCard from './book-card.vue';
import { NDropdown, NButton, useMessage } from 'naive-ui'
import { useBookStore } from '~/store/book-store.js';
import { storeToRefs } from 'pinia';

export default {
  components: { BookCard, NButton, NDropdown },
  async setup() {
    const showDropdownRef = ref(false)
    const books = ref([]);
    const visible = ref(false);
    const bookStore = useBookStore();
    const { getBooks } = storeToRefs(bookStore);

    const handleMenuClick = e => {
      if (e.key === '3') {
        visible.value = false;
      }
    };

    console.log(bookStore.getBooks)
    const [response] = await Promise.all([useFetch('https://freetestapi.com/api/v1/books', { method: 'get' })])
    /* const options = getBooks */

    books.value = response.data.value;

    bookStore.addBooks(response.data.value)

    return {
      getBooks,
      BookCard,
      books,
      handleMenuClick,
      options: [
        {
          label: "Marina Bay Sands",
          key: "Marina Bay Sands",
          disabled: true
        },
        {
          label: "Brown's Hotel, London",
          key: "Brown's Hotel, London"
        },
        {
          label: "Atlantis Bahamas, Nassau",
          key: "Atlantis Bahamas, Nassau"
        },
        {
          label: "The Beverly Hills Hotel, Los Angeles",
          key: "The Beverly Hills Hotel, Los Angeles"
        }
      ],
      showDropdown: showDropdownRef,
      handleSelect(key) {
        
      },
      handleClick() {
        showDropdownRef.value = !showDropdownRef.value;
      }
    }

  }

}

</script>
