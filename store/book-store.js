import { defineStore } from 'pinia'

//✨
export const useBookStore = defineStore('book', {
  state: () => ({
    books:[],
    cards:[],
    images: [
      "https://i.dr.com.tr/cache/500x400-0/originals/0001801769001-1.jpg",
      "https://i.dr.com.tr/cache/500x400-0/originals/0002001412001-1.jpg",
      "https://i.dr.com.tr/cache/500x400-0/originals/0002040574001-1.jpg",
      "https://i.dr.com.tr/cache/500x400-0/originals/0002076622001-1.jpg"
    ]
  }),
  getters: {
    getBooks: (state) => {
     return state.books   
    },
    getCard: (state) => {
      return state.cards   
     },

  },
  actions: {
    addBooks(item) {
      function getRandomImage(images) {
        // Verilen görsel dizisinden rastgele bir görsel seçin
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
      }      
      function generateRandomPrice(min, max) {
        // Rastgele bir fiyat oluşturmak için min ve max değerleri arasında rastgele bir sayı oluşturun
        return (Math.random() * (max - min) + min).toFixed(2);
      }
      const newData = item.map(b => ({ ...b, size: 0, price: generateRandomPrice(100, 900), image: getRandomImage(this.images) }));

      this.books = newData;
    }, 
    addCard(item) {
      function getRandomImage(images) {
        // Verilen görsel dizisinden rastgele bir görsel seçin
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
      } 
      let found = this.cards.find(card => card.id === item.id);
      if (found) {
        found.size += 1;
      } else {
        this.cards.push({ id: item.id, size: 1, title: item.title, image: item.image, price: item.price });
      }

      let foundBook = this.books.find(book => book.id === item.id);
      foundBook.size += 1;
    }, 
    deleteCard(item) {
      let foundCardIndex = this.cards.findIndex(card => card.id === item.id);
      if (foundCardIndex !== -1) {
        this.cards.splice(foundCardIndex, 1);
      }
  
      let foundBook = this.books.find(book => book.id === item.id);
      if (foundBook.size > 0) {
        foundBook.size -= 1;
      }
    },
  },
})