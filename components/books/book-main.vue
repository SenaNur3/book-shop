<template>
  <div class="flex justify-center gap-2 mt-[20px]">
    <BookCard v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script setup>
import BookCard from './book-card.vue';

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
