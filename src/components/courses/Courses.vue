<template>
    <div class=" coursepage">
        <div class="row d-flex">
            <div class="col-lg-4 courseSidebar">
                <div>
                    <img class="onlearnerlogo " src="../../assets/images/onlearner.png" alt="">
                </div>
                        <div class="pt-5 courseSideBar-items">
                                <ul>
                                    <router-link to="/" style="text-decoration:none">
                                       <li class="courseDashboard">
                                    <span><img src="../../assets/images/stackSidebar.png" alt=""></span> Dashboard</li>
                                    
                                    </router-link>
                                    <!-- <li>
                                    <span><img src="../../assets/images/stackSidebar.png" alt=""></span> Dashboard</li>
                                    <li> -->
                                        <li><span><img src="../../assets/images/userSidebar.png" alt=""></span> My Profile</li>
                                    <li>
                                        <span><img src="../../assets/images/heartSidebar.png" alt=""></span> Wishlist</li>
                                    <li>
                                        <span><img src="../../assets/images/Booksidebars.png" alt=""></span> Enrolled Courses</li>
                                    <router-link to="/assignment" style="text-decoration:none; color: #ffffff;">
                                    <li>
                                        <span><img src="../../assets/images/videoSidebar.png" alt=""></span> Active Courses
                                    </li>
                                    </router-link>
                                    <li >
                                        <span><img src="../../assets/images/ConfirmedSidebar.png" alt=""></span> Completed Courses
                                    </li>
                                    <li>
                                    <span><img src="../../assets/images/project.png" alt=""></span> Project Page
                                    </li>
                                   <router-link to="/classroom" style="color:#ffffff; text-decoration:none">
                                     <li>
                                        <span><img src="../../assets/images/community.png" alt="">Student Community</span>
                                    </li>
                                   </router-link>
                                </ul>
                        </div>

                        <!-- <div class="log-out">
                            <div class="log-outBorder">...</div>
                            <p><span><img src="../../assets/images/logout-btn.png" alt=""></span> Log Out</p>
                        </div> -->

                        <div>
                        
                            <p class="log-out"><span><img src="../../assets/images/logout-btn.png" alt=""></span> Log Out</p>
                        </div>
                
            </div>
            <div class="col-lg-8 courseotherpart" >
        <div class="container-fluid d-flex justify-content-between py-3 header-class">
                <div class="d-flex align-items-center">
                  
                   <div class="profileImg px-5">
                        <img src="../../assets/images/profile-pic.png" alt="">
                    </div>
                    <div class="profileName mt-2">
                        <p>Hello, <strong>Oladele Ogunyemi</strong></p>
                    </div>
                </div>
            <div class="NotificationIcon mx-5 mt-3">
                <img src="../../assets/images/icon.png" alt="">
            </div>
        </div>
        <!-- Enrolled Courses -->
        <div class="px-5">
            
             <h1 class="display-4 course-title">Enrolled Courses</h1>
             <div class="d-flex courseCard">
                 <div>
                   <img class="dataImg" src="../../assets/images/data-course.png" alt=""> 
                 </div>
                 <!-- Data card -->
                 <div class="data-content px-3">
                     <p class="data-title">Data Analyst</p>
                     <p class="sub-data-title">All Lessons:60 <span>Completed Lessons 20/50</span></p>
                     <div class="d-flex justify-content-between">
                         <div class="progressCtn">
                             <p class="progressBar bg-danger"></p>
                           
                                 <img class="progressCircle" src="../../assets/images/progressbar.png" alt="">
                            
                         </div>
                         <div>
                             <p class="progress-text">18% Complete</p>
                         </div>
                     </div>
                     <div>
                         <p class="continue">Continue <span><img src="../../assets/images/courseArrow.png" alt=""></span></p>
                     </div>
                 </div>

                 
                 
             </div>

             <!-- Html card -->

              <div class="d-flex courseCard mt-5">
                 <div>
                   <img class="dataImg" src="../../assets/images/html-course.png" alt=""> 
                 </div>
                 
                 <div class="data-content px-3">
                     <p class="data-title">Front End Development</p>
                     <p class="sub-data-title">All Lessons:30 <span>Completed Lessons 0/30</span></p>
                     <div class="d-flex justify-content-between">
                         <div class="progressCtn">
                             <p class="progressBar"></p>
                           
                                 <img class="progressCircle" src="../../assets/images/progressbar.png" alt="">
                            
                         </div>
                         <div>
                             <p class="progress-text">0% Complete</p>
                         </div>
                     </div>
                     <div>
                         <p class="continue">Start <span><img src="../../assets/images/courseArrow.png" alt=""></span></p>
                     </div>
                 </div>

                 
                 
             </div>

             <!-- Malware card -->
              <div class="d-flex courseCard mt-5">
                 <div>
                   <img class="dataImg" src="../../assets/images/malware-course.png" alt=""> 
                 </div>
                
                 <div class="data-content px-3">
                     <p class="data-title">Malware Study</p>
                     <p class="sub-data-title">All Lessons:30 <span>Completed Lessons 0/30</span></p>
                     <div class="d-flex justify-content-between">
                         <div class="progressCtn">
                             <p class="progressBar"></p>
                           
                                 <img class="progressCircle" src="../../assets/images/progressbar.png" alt="">
                            
                         </div>
                         <div>
                             <p class="progress-text">0% Complete</p>
                         </div>
                     </div>
                     <div>
                         <p class="continue">Start <span><img src="../../assets/images/courseArrow.png" alt=""></span></p>
                     </div>
                 </div>

                 
                 
             </div>
        </div>

        
    </div>
    </div>
    </div>
</template>



<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.courseDashboard{
    color: #ffffff;
}

.courseDashboard:active{
    text-decoration: none;
}

.coursepage{
    padding: 0;
    margin: 0;
    height: 100vh;
    margin-bottom: 700px;
    /* width: 500px; */
    
}

.onlearnerlogo{
  padding-left: 30px;
  padding-top: 15px;

}

.courseSidebar{
    background: #232B37;
    color: #ffffff;
}

.courseSideBar-items li:hover{
    border-radius: 5px;
    background-color: #C01C03;
    cursor: pointer;
}

.courseSideBar-items li{
    list-style-type: none;
    font-size: 15px;
    margin: 10px;
    /* padding: 10px; */
        padding: 5px 20px;

    width: 60%;
}

.courseSidebar li span img{
    padding-right: 10px;
}

 .log-out{
    margin-top: 600px;
    margin-bottom: 50px;
    padding: 20px 20px;
    border-top: 2px solid #000000;

    
}

.courseotherpart{
    padding: 0;
    margin: 0;
    /* width: 100%; */
}

/* Course details  */

.header-class{
     height: 100px;
     /* width: 100vw; */
     /* max-width: 900px; */
     /* max-width: 1000px; */
}

.course-title {
  color: #000000;
  font-weight: 700;
  font-size: 40px;
   /* margin-left: 7px; */
   margin: 70px auto;

}

.courseCard{
    height: 220px;
    width: 550px;
    /* border: 2px solid red; */
    background: #ffffff;
    border-radius: 10px;
    padding: 15px;
}

.dataImg{
    height: 150px;
    width: 145px;
    border-radius: 0;
    margin-top: 15px;
}



.data-title{
    font-size: 1.5rem;
      font-weight: 500;
       margin-top: 5px;
}

.sub-data-title{
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 15px;
   
}



.sub-data-title span{
    margin-left: 7rem;
}

.progressCtn{
    position: relative;
     margin-bottom: 15px;
}

.progressCircle{
    position: absolute;
    top: -1px;
    left: 40px;
    bottom: 0;
}

.progressBar{
    width: 200px;
    height: 3px;
    background-color: #A5A39D;
    color: #C01C03;
    border-radius: 5px;
    margin-top: 12px;
}

.progress-text{
    font-size: 10px;
    font-weight: 500;
    margin-top: 5px;
}

.continue{
    background: #C01C03;
    height: 3rem;
    padding: 12px 10px;
    font-size: 15px;
    font-weight: 500;
    color: #ffffff;
    width: 50%;
    /* margin-top: 5px; */
    border-radius: 5px;
}

.continue img{
    margin-left:40px;
    height: 15px;
    width: 10px
}
</style>