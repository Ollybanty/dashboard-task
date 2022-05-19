<template>
   <div class="container-fluid d-flex justify-content-between px-5 py-3 header-class">
       <div class="d-flex mx-5 align-items-center">
           <div class="menuToggle px-2" >
               <img @click="openSidebar" src="../../assets/images/menu-toggle.png" alt="menu-toggle button">
               <app-sidebar v-if="dashboard"></app-sidebar>
           </div>

           <div class="profileImg px-5">
               <img src="../../assets/images/profile-pic.png" alt="">
           </div>
           <div class="profileName mt-3">
               <p>Hello, <strong>Oladele Ogunyemi</strong></p>
           </div>
       </div>
       <div class="NotificationIcon mx-5">
        <img src="../../assets/images/icon.png" alt="">
       </div>
   </div>
</template>

<script>
export default{
       data(){
        return{
            sidebar: true,
            hamburger: true,
            dashboard: false,
        }
    },
    methods: {
        closeSidebar(){
            this.sidebar = false;
        },
        openSidebar(){
            this.dashboard = true;
        }
    }
}

</script>

<style >
body{
    background-color: #E5E5E5;
}
/* Header styling */
.header-class{
    height: 70px;
    background-color: #ffffff;
}


.menuToggle img{
    max-height: 2rem;
    max-width: 2rem;
    cursor: pointer;
}




.profileImg img{
    border-radius: 50%;
    max-height: 3rem;
    max-width: 3rem;  
}

.profileName p{
  font-size: 1rem;
}

.NotificationIcon img{
    max-height: 3rem;
    max-width: 3rem; 
    margin-top: -5px

}

</style>