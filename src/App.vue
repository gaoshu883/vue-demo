<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/logo.png">
    </div>
    <section>
      <h2>DEMO1:数据渲染</h2>
      <vuep class="demo1" :template="demo1"></vuep>
    </section>
    <section>
      <h2>DEMO2:循环与列表</h2>
      <vuep class="demo1" :template="demo2"></vuep>
    </section>
    <section>
      <h2>DEMO3:获取动态数据</h2>
      <vuep class="demo2" :template="demo3"></vuep>
    </section>
    <section>
      <h2>DEMO4:修改数据</h2>
      <vuep class="demo2" :template="demo4"></vuep>
    </section>
    <section>
      <h2>DEMO5:表单控件</h2>
      <vuep class="demo2" :template="demo5"></vuep>
    </section>
  </div>
</template>

<script>
  import data from '@/assets/js/data'
  let {demo1, demo2, demo3, demo4, demo5} = data;
  export default {
    name: "App",
    data() {
      return {
        demo1,
        demo2,
        demo3,
        demo4,
        demo5
      };
    },
    components: {}
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 60px auto;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .demo1 {}
  .demo2 {
    height: 600px;
  }
</style>
