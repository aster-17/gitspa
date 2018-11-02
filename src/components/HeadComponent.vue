<template>
  <header class="Navigator">
     <div class="container">
       <div class="row">
        <div class="col-2"> <img class="brand-logo" src="@/assets/rw-icon.png"/></div>
        <div class="col-10"> 
           <ul class="main-menu">
              <li><router-link to="/">Top headlines</router-link></li>
              <li><router-link to="bit-coin">Bitcoin</router-link></li>
              <li><router-link to="sports">Sports</router-link></li>
              <li><router-link to="entertainment">Entertainment</router-link></li>
           </ul>
        </div>
       </div> 
     </div>
  </header>
</template>
<script>
export default {
  name: 'HeadComponent',
  data :function () {
      return {
         titlePage : 'Home page'
      }
  }
}
</script>