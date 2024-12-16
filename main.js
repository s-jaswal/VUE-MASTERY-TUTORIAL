const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 20,
            details: ['50% cotton', '30% wool', '20% polyester']
        };
    }
});

// Mount the Vue app
app.mount('#app');
