<template>
    <div class="fixed flex justify-center w-full bottom-0 bg-[#3C5B6F] h-[100px]">
    <footer class="flex flex-col text-w-100 mt-5 border-t w-full">
        <div class="flex justify-center items-center flex-wrap mt-10  border-gary-100 sm:px-16 font-mono text-white">
            <p>@2024 BookShop. All Right Reserved</p>
        </div>
    </footer>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

const footerLinks = [
    {
        title: "About",
        links: [
            { title: "How it works", url: "/" },
            { title: "Featured", url: "/" },
            { title: "Partnership", url: "/" },
            { title: "Bussiness Relation", url: "/" },
        ],
    },
    {
        title: "Company",
        links: [
            { title: "Events", url: "/" },
            { title: "Blog", url: "/" },
            { title: "Podcast", url: "/" },
            { title: "Invite a friend", url: "/" },
        ],
    },
    {
        title: "Socials",
        links: [
            { title: "Discord", url: "/" },
            { title: "Instagram", url: "/" },
            { title: "Twitter", url: "/" },
            { title: "Facebook", url: "/" },
        ],
    },
];

export default defineComponent({
    data() {
        return {
            footerLinks
        }
    }
});
</script>