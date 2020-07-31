var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function (event) {
      //alert();
      if (this.newItem == '') return;
      // 追加時に「空」だった場合何も表示しない
      var todo = {
        item: this.newItem,
        isDone: false
      };
      

      this.todos.push(todo);
      this.newItem = '';
      //追加時にテキストがあれば表示
    },
    deleteItem: function (index) {
      alert("削除しますか？");
      

      this.todos.splice(index,1)
    }
  }
})
