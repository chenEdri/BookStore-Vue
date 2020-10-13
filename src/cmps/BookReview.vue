<template>
  <section v-if="theBookId">
    <form @submit.prevent="addReview" class="m10 flex sb">
      <input class="input" type="text" v-model="newReview.fullName" />
      <input class="input" type="number" min="1" max="5" v-model.number="newReview.rate" />
      <textarea class="input" type="text" v-model="newReview.desc" />
      <button class="classic-btn">Add Review</button>
    </form >
    <ul v-if="reviews">
      <li v-for="review in reviews" :key="review.id">
        <review-preview :review="review" @remove="removeReview" />
      </li>
    </ul>
  </section>
</template>
<script>
import ReviewPreview from "./ReviewPreview.vue"
import {reviewService} from "@/services/reviewService"
import eventBus from '@/services/eventBus.js';

export default {
props: ['book'],
data(){
    return{
        newReview:null,
        reviews:null,
        theBookId: null
    }
},
async created(){
    const { bookId } = this.$route.params;
    this.theBookId = bookId;
    const _newReview = reviewService.getEmpty(bookId);
    this.newReview = _newReview;
    const _reviews = await reviewService.getReviews(bookId)
    if(_reviews) this.reviews= _reviews;
},
watch:{
  reviews: async function(val, oldVal){
    if(!oldVal) return;
    if(val !== oldVal) this.reviews = await reviewService.getReviews(this.theBookId)
    
  }
},
methods:{
    addReview(){
        let _reviews = reviewService.addReview(this.newReview);
        this.reviews = _reviews
        this.newReview= reviewService.getEmpty(this.theBookId)
        eventBus.$emit('showMsg',`new review added`)
    },
    removeReview(id){
      this.reviews = reviewService.removeReview(id);
      eventBus.$emit('showMsg',`one review has been deleted`)
    }
},
components:{
ReviewPreview
}
}
</script>
