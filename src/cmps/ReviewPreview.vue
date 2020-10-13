<template>
  <section >
      <div v-if="review" class="review flex column sb start brb">
           <div class="flex rev-inside">
          <p> <span class="bold">Name:</span> {{review.fullName}}</p>
          <p class="ml15">{{starsOfRate}}</p>
          <button class="warning-btn" @click="emitRemove">X</button>
          </div>
          <p><span class="bold">Review:</span>  {{review.desc}}</p>
      </div>
  </section>
</template>

<script>
export default {
props:['review'],
created(){},
computed:{
  starsOfRate(){
    let stars='';
    let star = '⭐';
    for(let i = 0; i < this.review.rate; i++){
      stars+= star;
    }
    return stars;
  }
},
methods:{
  emitRemove(){
    this.$emit('remove',this.review.id)
  }
}
}
</script>

