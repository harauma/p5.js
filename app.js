var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
      message: 'Hello world',
      message2: 'You loaded this page on ' + new Date().toLocaleString(),
      num: 0,
      flg: true,
    },
    methods: {
        countUp: function() {
          this.flg = this.isNum()
          this.num++
        },
        isNum: function () {
          console.log(this.num)
          if(this.num % 2 === 0) {
            return true
          }
          return false
        }
    }
  })