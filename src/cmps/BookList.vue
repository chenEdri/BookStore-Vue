<template>
    <div >
        <ul class="card-grid mb50">
            <li v-for="currBook in books" :key="currBook.id">
                <book-preview :book="currBook" />
            </li>
        </ul>
    </div>
</template>

<script>
import BookPreview from '@/cmps/BookPreview.vue'
export default {
    props: ['books'],
    components: {
        BookPreview
    }
}
</script>