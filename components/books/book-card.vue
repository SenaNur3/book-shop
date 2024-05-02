<template>
    <div
        class="w-[200px] flex flex-col border rounded-lg h-[320px] gap-[10px] p-[16px] bg-[#C6DCBA] border-[#BBC3A4]  font-mono">
        <NuxtLink :to="generateUrl">
            <img :src="book.cover_image" alt="Book Cover" />
            <div class="book-details">
                <h3 class="italic font-sans text-center w-full mb-[10px]">{{ book.title }}</h3>
                <p class="whitespace-nowrap overflow-hidden text-ellipsis">Author: {{ book.author }}</p>
                <p class="whitespace-nowrap overflow-hidden text-ellipsis">Price: ${{ book.publication_year }}</p>
                <p class="whitespace-nowrap overflow-hidden text-ellipsis">Pages: {{ book.description }}</p>
            </div>
            <div >
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Sepete Ekle</button>
            </div>
        </NuxtLink>
    </div>
</template>

<script>



export default {
    name: 'bookCard',
    props: ['book'],
    setup(props) {


        const generateUrl = computed(() => {
            const modifiedTitle = props.book.title.replace(/\s+/g, '-').toLowerCase();

            const url = `/book/${modifiedTitle}-p-${props.book.id}`;

            return url;
        });

        return {generateUrl}

    }
}
</script>