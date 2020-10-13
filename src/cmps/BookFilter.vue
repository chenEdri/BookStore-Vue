<template>
  <section class="filter align-center">
         <h5>Sort</h5>
         <input class="input ml10" type="text" placeholder="search by Title" v-model="filterBy.txt" @input="emitFilter" />
         <input class="input"  type="number" placeholder="search by Min Price" v-model.number="filterBy.minPrice" @input="emitFilter" />
         <input class="input"  type="number" placeholder="search by Max Price" v-model.number="filterBy.maxPrice" @input="emitFilter" />
  </section>
</template>

<script>
export default {
     data() {
        return {
            filterBy: {
                txt: '',
                minPrice: -Infinity,
                maxPrice: Infinity
            }
        }
    },
      methods: {
        emitFilter() {
            this.$emit('filtered', this.filterBy)
        }
    }
}
</script>