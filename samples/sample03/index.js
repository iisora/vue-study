var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        everseMessage: function () {
        this.message = this.message.split('').reverse().join('')
    }
    }
})
