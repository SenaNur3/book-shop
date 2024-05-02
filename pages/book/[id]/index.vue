<template>
  <div class="flex gap-[30px] justify-center mt-3 font-mono">
    <div class="w-[250px] h-[270px]">
      <img :src="book.cover_image" :alt="book.title" class="w-[250px] h-[270px] rounded-[10px]">
    </div>
    <div class="flex flex-col justify-around">
      <div class="flex gap-[5px] justify-end">
         <div v-for="genre in book.genre" class="rounded-[20px] border bg-[#7895CB] w-[100px] flex justify-center items-center text-[#3C5B6F]"> {{ genre }}</div>
      </div>
      <div class="max-w-[500px]">
      <div class="italic font-sans text-[20px] font-bold">{{ book.title }}</div>
      <div class="text-[18px]" >author : {{ book.author }}</div>
      <div class="text-[18px]" >description : {{ book.description }}</div>
      <div class="text-[18px]">publication year : {{ book.publication_year }} </div>
     </div>
      <div>
      <button v-if="showAdded" class="bg-[#8DECB4]  p-[3px] rounded-md w-full h-[40px] whitespace-nowrap text-xs text-[#3C5B6F]"
                @click="addBasket(book.id)">Sepete Ekledi</button>
      <button v-else class="bg-blue-500 text-white p-[3px] rounded-md w-full h-[40px] whitespace-nowrap text-xs"
                @click="addBasket(book.id)">Sepete Ekle</button>
    </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "index",
  async setup(props) {
    const route = useRoute()
    const showAdded = ref(false);

    const slug = computed(() => {
      let fullPathAll = route.fullPath
      return fullPathAll.split("/")[2];
    })

    const book = ref([]);

    console.log(slug.value)
    let id = slug.value.split("-p-")[1]

    const addBasket = (id) => {
            showAdded.value = true; // ref değerine erişmek için .value kullanın
            console.log(id, "ürün eklendi")
            setTimeout(() => {
                showAdded.value = false;
            },500);
            console.log(showAdded.value)
        }


    const [response] = await Promise.all([useFetch(`https://freetestapi.com/api/v1/books/${id}`, { method: 'get' })])


    book.value = response.data.value;


    return {
      books,
      book,
      addBasket,
      showAdded
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
