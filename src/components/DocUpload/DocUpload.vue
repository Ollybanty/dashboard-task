<template>
  <div class="uploadCtn">
        <div class="d-flex justify-content-between banty px-5">
            <router-link to="/" class="mt-3" style="text-decoration:none">
               
                <p class="onlearner">:<span>On-</span>learner</p>
            </router-link>
            <div>
                <input class="communityInput px-5 mt-4" type="text" placeholder="Search Community">
            </div>
            <div class="d-flex mt-3">
                <div>
                    <p class="createproject px-4 mt-1 py-1">Create a Project</p>
                </div>
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
        <!-- upload file -->
                <div class="text-center py-5 mx-5 my-4 project-container">
                    <h5 class="projectText">
                        Upload your project
                    </h5>
                    <p class="projectSubText">
                        Show the world what you’ve built so far
                    </p>
                    <div class="uploadimg">
                        <img src="../../assets/images/upload.png" alt="">
                    </div>
                    <button class="btn btn-large mt-4 px-5 text-light uploadBtn">
                        Upload project
                    </button>
                </div>

                <!-- projectImages -->
                <div class="px-5 projectImagesWrapper">
                    <div class="row">
                        <div class="col-lg-6 projectImageCtn ">
                            <img src="../../assets/images/projectImage.png" alt="">
                            <p class="projectImageText px-3">Landing Page for a photography website </p>
                            <p class="blurr"></p>
                        </div>
                        <div class="col-lg-6 projectImageCtn ">
                            <img src="../../assets/images/projectImage.png" alt="">
                            <p class="projectImageTexts px-3">Contact Us Page Design</p>
                            <p class="blurr"></p>
                        </div>
                    </div>
                      <div class="row">
                        <div class="col-lg-6 projectImageCtn ">
                            <img src="../../assets/images/projectImage.png" alt="">
                            <p class="projectImageText px-3">Landing Page for a photography website </p>
                            <p class="blurr"></p>
                        </div>
                        <div class="col-lg-6 projectImageCtn ">
                            <img src="../../assets/images/projectImage.png" alt="">
                            <p class="projectImageTexts px-3">Contact Us Page Design</p>
                            <p class="blurr"></p>
                        </div>
                    </div>
                </div>
</template> 

<style scoped>

.banty{
    height: 90px;
    width:100%;
    background: #ffffff;
    /* background: red; */
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
    /* margin-top: -5px */
}

.onlearner{
    font-size: 30px;
    font-weight: 600;
    color: #21334F;
    cursor: pointer;
}

.onlearner span{
    color: #C01C03;
}

.communityInput{
    height: 40px;
    width: 400px;
    border-radius: 20px;
    background: #E5E5E5;
    border: none;
    font-weight: 800;
    color: #8F8E95;
    
}

.communityInput:focus{
    outline: none;
    /* border: none; */
}

.createproject{
    color: #ffffff;
    /* border: 2px solid green; */
    background: #C01C03;
    font-size: 20px;
    border-radius: 20px;
    margin-right: 20px;
}
/* End of header styles */

/* project-container */

.projectImagesWrapper{
    margin-bottom: 200px;
}

.project-container{
    border: 2px dotted #232B37;
    background: #ffffff;
    border-radius: 10px;
}

.projectText{
    font-size: 35px;
    font-weight: 600;
    color: #232B37;
    
}

.projectSubText{
    color: #232B37;
    font-weight: 400;
    font-size: 17px;
    margin-left: 15px;
}

.uploadimg img{
    height: 60px;
    width: 60px;
    margin-bottom: 10px;
}

.uploadBtn{
    background-color: #C01C03;
    font-weight: 600;
}

.projectImageCtn{
    
    height: 500px;
    width: 650px;
    border-radius: 15px;
    margin: 15px 30px;
    position: relative;
  
}

.projectImageCtn img{
height: 100%;
width: 100%;
max-height: 500px;
max-width: 650px;
opacity: 0.78;
 border-radius: 15px;


}

.projectImageText{
    position: absolute;
    /* top: 5px; */
    bottom: 5px;
    color: #ffffff;
    font-weight: 600;
    font-size: 20px;
    width: 100%;
    max-width: 40%;
    z-index: 99;
    
}

.blurr{
    position: absolute;
     background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.01) 0.01%, rgba(0, 0, 0, 0.9) 100%);
     height: 100%;
     width: 100%;
     max-height: 500px;
     max-width: 625px;
     bottom: -20px;
     border-radius: 15px;
     /* overflow: hidden; */
}

.projectImageTexts{
    position: absolute;
    bottom: 5px;
    color: #ffffff;
    font-weight: 600;
    font-size: 20px;
    z-index: 99;
   
}


</style>>