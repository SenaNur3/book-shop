<template>
  <div class="flex justify-center gap-2 mt-[20px]">
    <BookCard v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script>
import BookCard from './book-card.vue';


export default {
  components: { BookCard },
  async setup() {
    const books = ref([]);

    const [response] = await Promise.all([useFetch('https://freetestapi.com/api/v1/books', { method: 'get' })])


    books.value = response.data.value;


    return {
      BookCard,
      books
    }

  }

}

</script>
