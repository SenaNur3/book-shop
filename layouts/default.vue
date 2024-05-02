<template>
    <div>
        <mainHeader />
        <slot />
        <mainFooter />
    </div>
</template>

<script>
import mainHeader from "../components/header/mainHeader.vue";
import mainFooter from "../components/footer/mainFooter.vue";

export default {
    components: {
        mainHeader,
        mainFooter,
    },
    setup(props) {
        return {

        }
    }
}
</script>