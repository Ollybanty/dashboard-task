<template>
  <div>
    <!-- <app-header></app-header> -->
    <div class="all-view">
      <router-view></router-view>
    </div>
    <!-- <app-maincontent></app-maincontent> -->
    <app-footer></app-footer>
    
  </div>
</template>

<script>
export default{
  data(){
    return{

    }
  }
}
</script>

<style >

body{
  font-family: 'Poppins', sans-serif;
}

.all-view{
  margin: 0;
  padding: 0;
  width: 100%;
}


</style>