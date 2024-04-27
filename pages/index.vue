<template>
    <div>
        <mainHeader />
        <bookMain />
        <mainFooter />
    </div>
</template>

<script>
import mainHeader from "../components/header/mainHeader.vue";
import mainFooter from "../components/footer/mainFooter.vue";
import bookMain from "../components/books/book-main.vue";

export default {
    name: "index",
    components: {
        mainHeader,
        mainFooter,
        bookMain
    },
    setup(props) {
        return {

        }
    }
}
</script>
