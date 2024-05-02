<template>
  <div class="flex gap-[30px] justify-center mt-3">
    <div class="w-[200]">
      <img :src="book.cover_image" :alt="book.title" class="w-[200px]">
    </div>
    <div>
      <div>{{ book.title }}</div>
      <div>author : {{ book.author }}</div>
      <div>price : {{ book.description }}</div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "index",
  async setup(props) {
    const route = useRoute()

    const slug = computed(() => {
      let fullPathAll = route.fullPath
      return fullPathAll.split("/")[2];
    })

    const book = ref([]);

    console.log(slug.value)
    let id = slug.value.split("-p-")[1]




    const [response] = await Promise.all([useFetch(`https://freetestapi.com/api/v1/books/${id}`, { method: 'get' })])


    book.value = response.data.value;


    return {
      books,
      book
    }
  }
}

const books = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 10.99,
    pages: 336,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    price: 9.99,
    pages: 328,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 12.50,
    pages: 180,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    price: 11.25,
    pages: 288,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 8.75,
    pages: 432,
    imageUrl: 'https://via.placeholder.com/150',
  },
];
</script>
