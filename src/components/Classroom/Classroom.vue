<template>
   <div class="row d-flex communityCtn">
            <div class="col-lg-2 courseSidebar">
                 <router-link to="/" class="mt-3" style="color:#ffffff; text-decoration:none">
               
                <p class="myonlearner">:<span>On-</span>learner</p>
            </router-link>
                <!-- <div>
                    <img class="onlearnerlogo " src="../../assets/images/onlearner.png" alt="">
                </div> -->
                        <div class="pt-5 courseSideBar-items">
                                <ul>
                                    <router-link to="/" style="text-decoration:none; color: #ffffff;">
                                       <li class="courseDashboard">
                                    <span><img src="../../assets/images/stackSidebar.png" alt=""></span> Dashboard</li>
                                    
                                    </router-link>
                                    <!-- <li>
                                    <span><img src="../../assets/images/stackSidebar.png" alt=""></span> Dashboard</li>
                                    <li> -->
                                        <li><span><img src="../../assets/images/userSidebar.png" alt=""></span> My Profile</li>
                                    <li>
                                        <span><img src="../../assets/images/heartSidebar.png" alt=""></span> Wishlist</li>
                                    <router-link to="/courses" style="color:#ffffff; text-decoration:none">
                                        <li>
                                        <span><img src="../../assets/images/Booksidebars.png" alt=""></span> Enrolled Courses
                                    </li>
                                    </router-link>
                                    <router-link to="/assignment" style="color:#ffffff; text-decoration:none">
                                        <li>
                                        <span><img src="../../assets/images/videoSidebar.png" alt=""></span> Active Courses
                                    </li>
                                    </router-link>
                                    <li >
                                        <span><img src="../../assets/images/ConfirmedSidebar.png" alt=""></span> Completed Courses
                                    </li>
                                    <router-link to="docupload" style="color:#ffffff; text-decoration:none">
                                    <li>
                                    <span><img src="../../assets/images/project.png" alt=""></span> Project Page
                                    </li>
                                    </router-link>
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
        <div class="col-lg-10 courseotherpart" >
        
                <div class="certificateCtn">
                            <div class="d-flex justify-content-between ollybanty px-5">
                                <!-- <router-link to="/" class="mt-3">
                                
                                    <p class="myonlearner">:<span>On-</span>learner</p>
                                </router-link> -->
                                <div>
                                    <input class="certificateInput px-5 mt-4" type="text" placeholder="Search Community">
                                </div>
                                <div class="d-flex mt-3">
                                    <!-- <div>
                                        <p class="createproject px-4 mt-1 py-1">Create a Project</p>
                                    </div> -->
                                    <div class="chatNotification">
                                        <img class="chatBg" src="../../assets/images/chatIconBg.png" alt="">
                                        <img class=" chatIcon" src="../../assets/images/chatIcon.png" alt="">
                                    </div>
                                    <div class="bellIcon">
                                        <img src="../../assets/images/icon.png" alt="">
                                    </div>
                                </div>
                            </div>

                </div>

                <!-- main content -->
                <div>
                    <div class="px-5 mt-3">
                      <p class="profilename"><span><img src="../../assets/images/profile-pic.png" alt=""></span> Hi Oladele!</p>
                      <p style="font-weight:500; color: #232B37;">What would you like to share your works with the community?</p>
                      <div class="postCard px-4 py-3">
                         
                              <p class="cardHead">Create post</p>
                          <input class="cardInput px-4" type="text" placeholder="What would you like to share?">
                         <div class="d-flex justify-content-between">
                             <div class="d-flex">
                                <div>
                                    <p class="cardTexts"><span><img class="cardImgs" src="../../assets/images/img.png" alt=""></span>Image</p>
                                </div>
                                <div>
                                <p class="cardTexts"><span><img class="cardVideoImgs" src="../../assets/images/videos.png" alt=""></span>Video</p>
  
                                </div>
                             </div>
                             <div>
                                 <button class="btn publishBtn">Publish</button>
                             </div>
                         </div>
                      </div>

                      <!-- Second card -->
                       <div class="postCard px-4 py-3">
                         <div class="profileInput">
                              <p class="profilename"><span><img src="../../assets/images/profile-pic.png" alt=""></span> Hi Oladele</p>
                              <p class="timeText">5 mins ago</p>
                              <p class="shareInput px-4 py-3 mt-5 mb-4 ">
                                  What would you like to share What would you like to share What would you like to share What would you like to share What would you like to share
                              </p>
                          </div>    
                         <div class="d-flex">
                             
                                <div class="d-flex">
                                    <div>
                                        <img class="likeImgs" src="../../assets/images/heartFilled.png" alt="">
                                    </div>
                                    <div>
                                        <p class="likeTexts">8 Likes</p>

                                    </div>
                                </div>
                                 <div class="d-flex">
                                    <div>
                                        <img class="likeImgs" src="../../assets/images/comment.png" alt="">
                                    </div>
                                    <div>
                                        <p class="likeTexts">18 Comments</p>

                                    </div>
                                </div>
                             
                               <div class="d-flex">
                                    <div>
                                        <img class="likeImgs" src="../../assets/images/shareOut.png" alt="">
                                    </div>
                                    <div>
                                        <p class="likeTexts">6 Shares</p>

                                    </div>
                                </div>
                         </div>
                      </div>
                      <!-- Third card -->
                           <div class="postCard px-4 py-3">
                         <div class="profileInput">
                              <p class="profilename"><span><img src="../../assets/images/profile-pic.png" alt=""></span> Hi Oladele</p>
                              <p class="timeText">5 mins ago</p>
                              <p class="shareInput px-4 py-3 mt-5 mb-4 ">
                                  What would you like to share What would you like to share What would you like to share What would you like to share What would you like to share
                              </p>
                          </div>    
                         <div class="d-flex">
                             
                                <div class="d-flex">
                                    <div>
                                        <img class="likeImgs" src="../../assets/images/heartFilled.png" alt="">
                                    </div>
                                    <div>
                                        <p class="likeTexts">8 Likes</p>

                                    </div>
                                </div>
                                 <div class="d-flex">
                                    <div>
                                        <img class="likeImgs" src="../../assets/images/comment.png" alt="">
                                    </div>
                                    <div>
                                        <p class="likeTexts">18 Comments</p>

                                    </div>
                                </div>
                             
                               <div class="d-flex">
                                    <div>
                                        <img class="likeImgs" src="../../assets/images/shareOut.png" alt="">
                                    </div>
                                    <div>
                                        <p class="likeTexts">6 Shares</p>

                                    </div>
                                </div>
                         </div>
                      </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<style scoped>
    
.communityCtn{
    margin-bottom: 200px;
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
    font-size: 12px;
    font-weight: 4600;
    margin: 15px;
    /* padding: 10px; */
        padding: 5px;

    /* width: 60%; */
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

.ollybanty{
    height: 90px;
    /* width:100%; */
    background: #ffffff;
   
}

.chatNotification{
    position:relative;
     margin-right: 20px;
    
}

.chatBg{
  max-height: 3rem;
    max-width: 3rem; 
}

.chatIcon{
    position: absolute;
    top: 0;
    left: 8px;
    top: 10px;
     max-height: 2rem;
    max-width: 2rem; 
}

.bellIcon img{
  max-height: 3rem;
    max-width: 3rem; 
    
}

.myonlearner{
    font-size: 30px;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
    margin: 15px 30px;
}

.myonlearner span{
    color: #C01C03;
}

.certificateInput{
    height: 40px;
    width: 800px;
    border-radius: 20px;
    background: #E5E5E5;
    border: none;
    font-weight: 800;
    color: #8F8E95;
    
}

.certificateInput:focus{
    outline: none;
   
}

.createproject{
    color: #ffffff;
   
    background: #C01C03;
    font-size: 20px;
    border-radius: 20px;
    margin-right: 20px;
}

.profliename{
    color: #000000;
    font-weight: 600;

}

.profilename{
    font-size: 25px;
    font-weight: 600;
    /* margin-right: 50px; */
  
}

.profilename img{
    border-radius: 50%;
    height: 60px;
    width: 60px;
    margin-right: 30px;
}

.postCard{
    /* border: 2px solid yellow; */
    width: 100%;
    max-width: 800px;
    background: #ffffff;
    border-radius: 10px;
    margin-bottom: 25px;
    box-shadow: 0px 2px 19px rgba(0, 0, 0, 0.13);
}

.cardHead{
    font-size: 25px;
    font-weight: 800;
}

.cardInput{
    height: 100px;
    width: 750px;
    border-radius: 20px;
    background: #E5E5E5;
    border:none;
    margin-bottom: 20px;
  
}



.cardInput:focus{
    outline: none;
}

.cardImgs{
    height: 15px;
    width: 15px;
    margin-right: 10px;
}

.cardVideoImgs{
    height: 15px;
    width: 25px;
    margin-right: 10px;
}

.cardTexts{
    font-size: 15px;
    color: #8F8E95;
    margin-right: 30px;
}

.publishBtn{
    background: #C01C03;
    border-radius: 20px;
    height: 35px;
    width: 130px;
    font-weight: 600;
    color: #ffffff;
}

.likeImgs{
    height: 20px;
    width: 20px;
    margin-right: 10px;
    margin-top: 5px
}

.likeTexts{
    font-size: 20px;
    color: #8F8E95;
    margin-right: 70px;
}

.shareInput{
    height: 120px;
    width: 750px;
    border-radius: 20px;
    background: #E5E5E5;
    color: #232B37;
    font-weight: 500;
    font-size: 20px;
    /* padding: 10px auto; */
    border:none;
    margin-bottom: 20px;
}

.profileInput{
    position: relative;
    /* margin-bottom: 50px; */
}

.timeText{
    color: #8F8E95;
    position: absolute;
    top: 45px;
    left: 95px;
    /* bottom: 1px; */
}

</style>>