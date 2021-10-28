import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: {
            fetchedPosts: [],
        },
        mutations: {
            setPosts(state, posts) {
                state.fetchedPosts = posts;
            },
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                vuexContext.commit("setPosts", [
                    {
                        id: 1,
                        title: "Yeni bir başlık!!",
                        subTitle: "Gossip girl 2.sezon baslıyor..",
                        text: "Gossip girl 2.sezonda bizleri süprizlerle karsiliyor...",
                        author: "Barış Gündüz",
                    },
                    {
                        id: 2,
                        title: "thefacebook Yayında!!",
                        subTitle: "facebook güncellemelerle geri geliyor..",
                        text: "ezel 2.sezonda bizleri süprizlerle karsiliyor...",
                        author: "Barış Gündüz",
                    },
                ]);
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts);
            },
        },
        getters: {
            getPosts(state) {
                return state.fetchedPosts;
            },
        },
    });
};

export default createStore;
