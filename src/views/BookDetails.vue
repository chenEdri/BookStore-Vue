<template>
  <section class="main-container" v-if="book" >
    <div class="book-details flex" v-if="book">
      <div class="flex sb column mr25 left-det ">
        <h3 class="fs24 bold clr2">{{ book.title }}</h3>
       <div class="details-img"> <img :src="book.thumbnail" /><span v-show="book.listPrice.isOnSale" class="on-sale">{{ isInSale }}</span></div>
      </div>
      <div class="flex column right-det ml25">
        <h4>more info-</h4>
        <div>
          <h3 :class="changeColor">
            Price: {{ book.listPrice.amount }}{{ getCoinSymbol }}
          </h3>
        </div>
        <div >{{ displayPubDate }}</div>
        <div>{{ pageDescription }}</div>
        <div :class="getTxtDistance">DESCRIPTION: {{ book.description }}</div>
        <div class="flex mr15">
          <button class="classic-btn" @click="toggleDesc">
            {{ getTxtDistance }}
          </button>
          <router-link to="/book">
            <button class="classic-btn">BACK</button></router-link
          >
        </div>
      </div>
    </div>
    <div>
      <book-review :book="book" />
    </div>
  </section>
</template>

<script>
import { bookService } from "@/services/bookService";
import BookReview from "@/cmps/BookReview";

export default {
  data() {
    return {
      book: null,
      isLongTxt: false,
    };
  },
  async created() {
    const { bookId } = this.$route.params;
    this.book = await bookService.getById(bookId);
    console.log('the book-', this.book);
  },
  computed: {
    pageDescription() {
      const { pagesDef } = this.book;
      if (pagesDef > 500) return "Long reading";
      else if (pagesDef > 200) return "Decent reading";
      else if (pagesDef < 100) return "Light reading";
    },
    displayPubDate() {
      const { publishedDate } = this.book;
      const date = new Date();
      var currYear = date.getFullYear();
      if (currYear - publishedDate > 10) return "Veteran Book";
      else if (currYear - publishedDate < 1) return "New!";
    },
    changeColor() {
      if (this.book.listPrice.amount > 150) return "red";
      else if (this.book?.listPrice.amount < 20) return "green";
    },
    isInSale() {
      return this.book?.listPrice.isOnSale === true
        ? "ON SALE!"
        : "there is no sale on this book";
    },
    getCoinSymbol() {
      const coin = this.book.listPrice.currencyCode;
      switch (coin) {
        case "EUR":
          return "€";
        case "USD":
          return "$";
        case "GBP":
          return "£";
        case "ILS":
          return "₪";
        default:
          return;
      }
    },
    getTxtDistance() {
      return this.isLongTxt ? "more" : "less";
    },
  },
  methods: {
    toggleDesc() {
      this.isLongTxt = !this.isLongTxt;
    },
  },
  components: {
    BookReview,
  },
};
</script>

<style>
</style>