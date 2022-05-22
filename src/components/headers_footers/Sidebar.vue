<template>
    <div class="sidebar px-5" v-if="sidebarss">
        <div class="pt-5" >
            <img @click="closebar" class="close-btn" src="../../assets/images/closesidebar.png" alt="">
        </div>
        <div class="pt-5 sideBar-items">
            <ul>
                  <router-link to="/" style="text-decoration:none; color: #ffffff">
                        <li>
                         <span><img src="../../assets/images/stackSidebar.png" alt=""></span> Dashboard
                         </li>
                                    
                </router-link>
                <!-- <li>
                   <span><img src="../../assets/images/stackSidebar.png" alt=""></span> Dashboard
                   </li> -->
                <li>
                    <span><img src="../../assets/images/userSidebar.png" alt=""></span> My Profile
                </li>
                <li>
                    <span><img src="../../assets/images/heartSidebar.png" alt=""></span> Wishlist
                </li>
                <router-link to="/courses" style="text-decoration:none; color:#ffffff">
                    <li>
                    <span><img src="../../assets/images/Booksidebars.png" alt=""></span> Enrolled Courses
                </li>
                </router-link>
                
                <router-link to="/assignment" style="text-decoration:none; color:#ffffff">
                    <li>
                    <span><img src="../../assets/images/videoSidebar.png" alt=""></span> Active Courses
                </li>
                </router-link>
                <li >
                    <span><img src="../../assets/images/ConfirmedSidebar.png" alt=""></span> Completed Courses
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            sidebarss: true,
        }
    },
    methods: {
       closebar(){
           this.sidebarss = false
       }
    }
}
</script>

<style >

.sidebar{
    position: absolute;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
    /* border: 2px solid green; */
    /* height: 100%; */
    height: 100rem;
    width: 100%;
    max-width: 350px;
    background: #232B37;
    color: #ffffff;
    z-index: 99;
    /* display: none; */
}

.sideBar-items li:hover{
    border-radius: 5px;
    background-color: #C01C03;
    cursor: pointer;
}

.sideBar-items li{
    list-style-type: none;
    font-size: 15px;
    margin: 10px;
    padding: 10px;
}

.sidebar li span img{
    padding-right: 10px;
}

.close-btn:hover{
    background-color: #C01C03;
    cursor: pointer;
}
</style>