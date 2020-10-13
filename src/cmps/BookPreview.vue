<template>
<section class="book-preview flex column align-center sa">
            <h3 class="m0 tac book-title">{{book.title}}</h3>
            <router-link :to="`/book/${book.id}`"><button class="classic-btn">Details</button></router-link>
                <div class="card-img"><img :src="book.thumbnail" /></div>
            <h3>Price: {{book.listPrice.amount}}{{getCoinSymbol}}</h3>
        </section>
</template>

<script>
export default {
  props: ["book"],
  created() {},
  computed: {
    getCoinSymbol: function () {
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
  },
};
</script>