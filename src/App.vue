<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <span>  </span>
    
    <div class="hello">
      <h1>{{ "Nice to meee you." }}</h1>
    </div>
    
    <form action="waterfall">
        <button type="submit" style="width: 150px; height: 40px; border-radius: 0.35rem;">
            <a href="waterfall" style="text-decoration: none;">貓貓瀑布在這</a>
        </button>
    </form>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  data () {
    return {
      greeting: 'Nice to meee you.'
    }
  },
  created () {
    // this.getMsg()
  },
  methods: {
    // getMsg () {
    //   return msg.getInitMsg()
    //     .then(msg => this.greeting = msg)
    // }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
