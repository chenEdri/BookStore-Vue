<template>
  <section class="main-container mb80">
    <div class="flex column">
      <h1>BOOK APP</h1>
      <book-filter @filtered="setFilter" />
      <form class="filter" @submit.prevent="addBook">
        <label class="f20 bold">Add a book</label>
        <input class="input" type="text" v-model="newBook.name" placeholder="book's name"/>
        <input class="input" type="number" v-model.number="newBook.price" placeholder="price"/>
        <button class="classic-btn">Add Book</button>
      </form>
      <book-list :books="booksForDisplay" :add="addBook" />
    </div>
  </section>
</template>

<script>
import { bookService } from "@/services/bookService";
import eventBus from '@/services/eventBus.js';
import BookList from "@/cmps/BookList.vue";
import BookFilter from "@/cmps/BookFilter.vue";

export default {
  data() {
    return {
      newBook: bookService.getEmpty(),
      filterBy: {
        txt: "",
        minPrice: -Infinity,
        maxPrice: Infinity,
      },
      books: [],
      selectedBook: null,
    };
  },
  async created() {
    let _books = await bookService.query();
    console.log(_books);
    this.books = _books;
  },
  methods: {
    async addBook() {
      const savedBook = await bookService.save(this.newBook);
      this.newBook = {
        name: "",
        price: 0,
      }
      eventBus.$emit(eventBus.$emit('showMsg',`new book added`))
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    booksForDisplay() {
      const filter = this.filterBy;
      return this.books.filter(
        (book) =>
          book.title.includes(filter.txt) &&
          book.listPrice.amount >= filter.minPrice &&
          book.listPrice.amount <= filter.maxPrice
      );
    },
  },
  components: {
    BookList,
    BookFilter,
  },
};
</script>