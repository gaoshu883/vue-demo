let demo1 = `      
<template>
  <h2 class="title">Hello {{ msg }}!</h2>
</template>
<style>
  .title {
    color: #4fc08d;
  }
</style>
<script>
  module.exports = {
    data: function () {
      return { 
        msg: 'World' 
      }
    }
  }
</script>
`;

let demo2 = `
<template>
  <ul class="list">
    <li v-for="item in fruits" class="item">
      <span class="name">{{ item.name }}</span>
      <div>数量：<span class="num">{{item.num}}</span></div>
    </li>
  </ul>
</template>
<style>
  * {
    color: #515a6e;
    font-family: Arial,sans-serif;
  }
  .item {
    list-style: none;
    padding:20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .name {
    display: inline-block;
    width: 60px;
    font-weight: bold;
  }
  .num {
    font-weight: bold;
  }
</style>
<script>
  module.exports = {
    data: function () {
      return { 
        fruits: [{
          name: 'apple',
          num: 12
        }, {
          name: 'orange',
          num: 2
        }, {
          name: 'watermelon',
          num: 8
        }]
      }
    }
  }
</script>
`;
let demo3 = `
<template>
  <ul class="list">
    <li v-for="item in fruits" class="item">
      <span class="name">{{ item.name }}</span>
      <div>数量：<span class="num">{{item.num}}</span></div>
    </li>
  </ul>
</template>
<style>
  * {
    color: #515a6e;
    font-family: Arial,sans-serif;
  }
  .item {
    list-style: none;
    padding:20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .name {
    display: inline-block;
    width: 60px;
    font-weight: bold;
  }
  .num {
    font-weight: bold;
  }
</style>
<script>
  module.exports = {
    data: function () {
      return { 
        fruits: []
      }
    },
    created: function () {
      fetch('https://www.easy-mock.com/mock/5b6e4eaa6e68367bdf5c9fe5/qwe/fruits3')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === 200) {
          this.fruits = data.data;
        }
      });
    }
  }
</script>
`;

let demo4 = `
<template>
  <ul class="list">
    <li v-for="item in fruits" class="item">
      <span class="name">{{ item.name }}</span>
      <div>数量：<span class="num">{{item.num}}</span></div>
      <div>
        <span class="ivu-btn-primary" @click="increase(item)">增</span>
        <span class="ivu-btn-primary" @click="decrease(item)" :class="[item.num<=0?'disabled':'']">减</span>
      </div>
    </li>
  </ul>
</template>
<style>
  * {
    color: #515a6e;
    font-family: Arial,sans-serif;
  }
  .item {
    list-style: none;
    padding:20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .name {
    display: inline-block;
    width: 60px;
    font-weight: bold;
  }
  .num {
    font-weight: bold;
  }
  .ivu-btn-primary {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 5px 15px 6px;
    font-size: 12px;
    border-radius: 4px;
    transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
    color: #515a6e;
    background-color: #fff;
    border-color: #dcdee2;
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
  }
  .ivu-btn-primary.disabled {
  	color: #c5c8ce;
    background-color: #f7f7f7;
    border-color: #dcdee2;
    cursor: not-allowed;
    pointer-events: none;
  }
</style>
<script>
  module.exports = {
    data: function () {
      return { 
        fruits: []
      }
    },
    methods: {
      increase: function (item) {
        item.num++;
      },
      decrease: function (item) {
        item.num--;
      }
    },
    created: function () {
      fetch('https://www.easy-mock.com/mock/5b6e4eaa6e68367bdf5c9fe5/qwe/fruits1')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === 200) {
          this.fruits = data.data;
        }
      });
    }
  }
</script>
`;
let demo5 = `
<template>
  <div>
    <ul class="list">
      <li v-for="item in fruits" class="item">
        <span class="name">{{ item.name }}</span>
        <div>数量：<span class="num">{{item.num}}</span></div>
        <div>
          <span class="ivu-btn-primary" @click="increase(item)">增</span>
          <span class="ivu-btn-primary" @click="decrease(item)" :class="[item.num<=0?'disabled':'']">减</span>
  			</div>
        <div>
          <input type="number" min="0" v-model="item.tempnum">
          <span class="ivu-btn-primary" @click="change(item)" :class="[item.tempnum<0?'disabled':'']">确定</span>
  			</div>
      </li>
    </ul>
  </div>
</template>

<style>
  * {
    color: #515a6e;
    font-family: Arial,sans-serif;
  }
  .item {
    list-style: none;
    padding:20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .name {
  	display: inline-block;
    width: 60px;
    font-weight: bold;
  }
  .num {
  	font-weight: bold;
  }
  .ivu-btn-primary {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 5px 15px 6px;
    font-size: 12px;
    border-radius: 4px;
    transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
    color: #515a6e;
    background-color: #fff;
    border-color: #dcdee2;
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
  }
  .ivu-btn-primary.disabled {
  	color: #c5c8ce;
    background-color: #f7f7f7;
    border-color: #dcdee2;
    cursor: not-allowed;
    pointer-events: none;
  }
</style>
<script>
module.exports = {
  data: function () {
    return { 
      fruits: []
    }
  },
  methods: {
  	increase: function (item) {
    	item.num++;
      item.tempnum = item.num;
    },
    decrease: function (item) {
      item.num--;
      item.tempnum = item.num;
    },
    change: function (item) {
      item.num = item.tempnum;
    }
  },
  watch: {
  	fruits: {
      handler (val, oldVal) { 
      	console.log(val)
      },
      deep: true
    }
  },
  created: function () {
  	fetch('https://www.easy-mock.com/mock/5b6e4eaa6e68367bdf5c9fe5/qwe/fruits2')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.status === 200) {
        data.data.forEach((item) => {
        	item.tempnum = item.num;
        })
        this.fruits = data.data;
      }
    });
  }
}
</script>

`;
export default { demo1, demo2, demo3, demo4, demo5 };
