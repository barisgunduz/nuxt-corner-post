<template>
    <PostDetail :post="fetchedPost" />
</template>
<script>
import PostDetail from "@/components/post/PostDetail";

export default {
    components: {
        PostDetail,
    },
    // this.$route.params._postId
    asyncData(context, callback) {
        setTimeout(() => {
            callback(null, {
                fetchedPost: {
                    id: "1",
                    title:
                        "blabla Geliyor.. ID bilgisi de budur (" +
                        context.params.postId +
                        ")",
                    subTitle: "ezel yeni sezona bomba gibi geliyor...",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consequuntur, corporis debitis dolorem esse est eum exercitationem in iure libero necessitatibus nobis nulla qui quis quod, ratione reiciendis repellat!",
                    author: "Barış Gündüz",
                },
            });
        }, 1500);
    },
};
</script>
