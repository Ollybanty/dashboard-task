<template>
     <div class="certificateCtn">
        <div class="d-flex justify-content-between ollybanty px-5">
            <router-link to="/" class="mt-3" style="color:#ffffff; text-decoration:none">
               
                <p class="myonlearner">:<span>On-</span>learner</p>
            </router-link>
            <div>
                <input class="certificateInput px-5 mt-4" type="text" placeholder="Search Community">
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
  <div class="mt-5 row px-5 mt-5 certCtn">
      <div class="col-lg-8 certImg"></div>
      <div class="col-lg-4 certText mx-5">
          <p class="completionText ">
              This certificate verifies that Saka Babatunde Ayomide successfully completed the course Graphic Design     Masterclass     on 05/08/2020 as taught by Chad Neuman, Ph.D. on Udemy. The certificate indicates the entire course was completed as validated by the student. The course duration represents the total video hours of the course at time of most recent completion.

          </p>
          <div class="d-flex justify-content-between">
              <div>
                  <button class="btn downloadBtn">Download</button>
              </div>
             <div>
                 <button class="btn shareButton">
                     <span><img src="../../assets/images/Share.png" alt=""></span>Share
                 </button>
             </div>
          </div>
      </div>
  </div>
 
</template>

<style scoped>
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
    color: #21334F;
    cursor: pointer;
}

.myonlearner span{
    color: #C01C03;
}

.certificateInput{
    height: 40px;
    width: 400px;
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

/* Cert */
.certImg{
    border: 2px solid black;
    background: #ffffff;
    height: 600px;
    width: 850px;
}

.completionText{
    font-size: 25px;
    width: 100%;
    font-weight: 600;
    /* max-width: 400px; */
   }

.downloadBtn{
    background-color: #C01C03;
    color: #ffffff;
    font-weight: 600;
    /* padding: 10px auto; */
    height: 50px;
    width: 120px;
}

.shareButton{
    background-color: #C01C03;
    color: #ffffff;
    font-weight: 600;
    height: 50px;
    width: 120px;
    font-size: 17px;
}

.shareButton span img{
    height: 30px;
    width: 30px;
    margin-right: 10px;
}

.certCtn{
margin-bottom:200px
}

</style>