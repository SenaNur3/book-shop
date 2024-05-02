import { defineStore } from 'pinia'

//✨
export const useBookStore = defineStore('book', {
  state: () => ({
    books:[],
    cards:[],
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
    addCard(item) {
      this.cards =  [...this.cards,item]
    },
    deleteCard(item) {
    this.cards = item;
    },
  },
})