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
