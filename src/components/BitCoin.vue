<template>
  <div class="compAbout innerWrap">
     <div class="container">
      <div class="loader" v-show="articles.length < 1"> Fetching... </div> 
      <div class="articleWrapper" v-for="article in articles" >
         <b-jumbotron v-bind:header="article.title">
            <b-btn variant="primary" target="_blank"  v-bind:href="article.url" style="margin-top:20px;">More Info</b-btn>
            <p style="margin-top:30px;"> <span v-show="article.source.name">  Source: <b>{{ article.source.name}}</b> </span>  <span v-show="article.author">, Author: <b>{{ article.author}}</b> </span> </p>
        </b-jumbotron>
       </div>
     </div> 
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'BitCoin',
  data :function () {
      return {
         endpoint : 'https://newsapi.org/v2/everything?q=bitcoin&from=2018-10-02&sortBy=publishedAt&apiKey=a79ecc1a15e647d7a52352cdd377b44f',
         articles : [],
      }
  },
  methods : {

  },
  mounted : function(){
    axios.get(this.endpoint).then(response => {
      if( response.data.articles.length > 0 ){
          this.articles = response.data.articles;
      }
    });
  }
}
</script>