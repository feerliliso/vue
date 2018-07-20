var app = new Vue({
  el: '#app',
  data: {
    message: 'this is my first vue '
  }
});
app.message = 'I have changed the data'

var app2 = new Vue({
  el:'#app2',
  data:{
    message :'页面加载于'+ new Date().toLocaleString()
  }
})

var app3  = new Vue({
  el:'#app3',
  data:{
    seen:true
  }
})
//app3.seen = false

var app4 = new Vue({
  el:'#app4',
  data:{
    todos:[
      {text:'study javascript'},
      {text:'day day hard'},
      {text:'about 4 month , I will be a master'}
    ]
  }
})
app4.todos.push({text:'At here,a new line.'})

var app5 = new Vue({
  el:'#app5',
  data:{
    message: 'hello Vue!'
  },
  methods:{
    reverseMessage:function () {
      this.message = this.message.split('').reverse('').join('')
    }
  }
})

var app6 = new Vue({
  el:'#app6',
  data:{
    message:'hello Vue'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li style="text-align:left">{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})

Vue.component('item', {
  template:'<li>this is the first Vue component</li>'
})
var app8 = new Vue({
  el:'#app8'
})
