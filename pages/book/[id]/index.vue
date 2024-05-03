<template>
  <div class="flex gap-[30px] justify-center mt-3 font-mono">
    <div class="w-[250px] h-[270px]">
      <img :src="book.cover_image" :alt="book.title" class="w-[250px] h-[270px] rounded-[10px]">
    </div>
    <div class="flex flex-col justify-around">
      <div class="flex gap-[5px] justify-end">
        <div v-for="genre in book.genre"
          class="rounded-[20px] border bg-[#7895CB] w-[100px] flex justify-center items-center text-[#3C5B6F]"> {{ genre
          }}</div>
      </div>
      <div class="max-w-[500px]">
        <div class="italic font-sans text-[20px] font-bold">{{ book.title }}</div>
        <div class="text-[18px]">author : {{ book.author }}</div>
        <div class="text-[18px]">description : {{ book.description }}</div>
        <div class="text-[18px]">publication year : {{ book.publication_year }} </div>
      </div>
      <div>

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



    const [response] = await Promise.all([useFetch(`https://freetestapi.com/api/v1/books/${id}`, { method: 'get' })])


    book.value = response.data.value;


    return {
      book,
      showAdded
    }
  }
}


</script>
