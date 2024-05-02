<template>
    <div class="flex justify-center relative">
        <bookMain />
    </div>
</template>

<script>
import bookMain from "../components/books/book-main.vue";

export default {
    name: "index",
    components: {
        bookMain
    },
    setup(props) {
        return {

        }
    }
}
</script>
