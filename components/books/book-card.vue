<template>
    <div class="w-[200px] flex flex-col border rounded-lg h-[200px] justify-between p-[16px]">
        <img :src="book?.imageUrl" alt="Book Cover" />
        <div class="book-details">
            <h3>{{ book?.title }}</h3>
            <p>Author: {{ book?.author }}</p>
            <p>Price: ${{ book?.price }}</p>
            <p>Pages: {{ book?.pages }}</p>
        </div>
    </div>
</template>

<script setup props="book">

</script>