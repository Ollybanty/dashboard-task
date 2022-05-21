<template>
   <div class="d-flex assignment-Sect">
       <div class="col-lg-2 assignmentSidebar">
                <router-link to="/">
                    <div>
                    <img class="onlearnerlogo " src="../../assets/images/onlearner.png" alt="">
                </div>
                </router-link>
                <div>
                    <h6 class="courseContent text-center">Course Content</h6>
                    <!-- lesson 1 -->
                 <div class="accordion accordion-flush accordionContainer" id="accordionFlushExample" >
                        <div class="accordion-item " style="background: #232B37; color:#ffffff">
                            <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed accordionHeading" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Lesson 1
                            </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Intro to Data Analysis
                                    </label>
                                </div>
                            </div>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Fundamentals of Data Analysis
                                    </label>
                                </div>
                            </div>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Scope of Data Analysis
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item" style="background: #232B37; color:#ffffff">
                            <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed accordionHeading" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Lesson 2
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Intro to Frontend Development
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Fundamentals of Frontend
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Scope of Frontend
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item" style="background: #232B37; color:#ffffff">
                            <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed accordionHeading" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Lesson 3
                            </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Introduction to Malware
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Intermidiate Malware
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Scope of Malware
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Advanced Malware
                                    </label>
                                </div>
                            </div>
                        </div>
                  </div>
                    
                    <!-- end of part 1 -->

                    <!-- Beginning of part 2 -->
                      <div class="accordion accordion-flush" id="accordionFlushExample" >
                        <div class="accordion-item" style="background: #232B37; color:#ffffff">
                            <h2 class="accordion-header" id="flush-headingFour">
                            <button class="accordion-button collapsed accordionHeading" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Lesson 4
                            </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Intro to Data Science
                                    </label>
                                </div>
                            </div>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Fundamentals of Data Science
                                    </label>
                                </div>
                            </div>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Scope of Data Science
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item" style="background: #232B37; color:#ffffff">
                            <h2 class="accordion-header" id="flush-headingFive">
                            <button class="accordion-button collapsed accordionHeading" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                Lesson 5
                            </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Introduction to Backend
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Philisophy of Backend
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Api Integration
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item" style="background: #232B37; color:#ffffff">
                            <h2 class="accordion-header" id="flush-headingSix">
                            <button class="accordion-button collapsed accordionHeading" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                Lesson 6
                            </button>
                            </h2>
                            <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Intro to UI/UX
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Fundamentals of UI/UX
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Tools of UI/UX
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Advanced UI/UX work tools
                                    </label>
                                </div>
                            </div>
                        </div>
                  </div>
                  
                   
                
                </div>
               
       </div>
       <div class="col-lg-10 slidesContainer" >
           <div>
               <p class="text-center text-light dataClass pt-4">Data Analyst:<span>What is data?</span></p>
           </div>
            <div v-if="assignment">
           <!-- Slides  -->
       <div id="carouselExampleControls" class="carousel slide courseSlides" data-bs-ride="carousel">
            <div class="carousel-inner courseSlidesInner">
                <div class="carousel-item active">
                <img src="../../assets/images/malware-course.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="../../assets/images/html-course.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="../../assets/images/data-course.png" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
       </div>

    <div>
        <p class="assignmentTopic">Assignment for this topic</p>
    </div>

    <div class="d-flex justify-content-between">
        <div class="mx-4 previously d-flex justify-content-between">
            <div>
                <img src="../../assets/images/goLeft.png" alt="">
            </div>
           <div>
               <p class="previousBtn">Previous</p>
           </div>
        </div>
        <div class="d-flex justify-content-between next mx-4    " @click="showTopic">
            <div>
                <p class="nextBtn">Next </p>
            </div>
            <div>
                <img src="../../assets/images/goRight.png" alt="">
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-between align-items-center ratingsContainer">
        <div class="mt-3">
            <p class="ratingsText"><span><img src="../../assets/images/star.png" alt=""></span>Leave Ratings</p>
        </div>
        <router-link to="/getcertificate">
            <div class="mt-3">
            <p class="certclass"><span><img src="../../assets/images/cert.png" alt=""></span> Get Certificate</p>
        </div>
        </router-link>
        <div class="mt-3">
            <p class="share"><span><img src="../../assets/images/Share.png" alt=""></span>Share</p>
        </div>
    </div>

        
    

     </div>

     <div v-if="!assignment">
        
        <div class=" mt-5 assignmentUploadCtn" v-if="projectbrief">
            <p class="wireframeHeader">
                Assignment: Wireframe Homepage
                    And Contact Us Page
            </p>
            <h6 class="assDetails mt-5">
                Assignment Details
            </h6>
            <div class="romanList">
            <p class="assignmentTask">a. Using the skills we've learnt so far, wireframe the homepage, using the homepage feature listed in the brief:</p>
            
                <p>
                    i. Logo
                </p>
                <p> 
                    
                    ii. Nav

                </p>
                 <p class="livingroom">
                        1. Living Room 2. Bedroom 3. Kitchen & Dining
                </p>
                <p>
                    iii. Shopping Basket
                </p>
                <p>
                    iv. Contact
                </p>
                <p>
                    v. Search Box
                </p>
                <p>
                    vi. Hero Slider
                </p>
                <p>
                    vii. New in store
                </p>
                <p>
                    viii. Inspiration Ideas
                </p>
                <p>
                    ix. Clearance Deals
                </p>
                <p>
                    x. Footer
                </p>
            </div>

            <button class="btn btn-large uploadBtn" @click="displayBrief">
                Upload Assignment
            </button>

    <div class="d-flex justify-content-between navigationClass">
        <div class="mx-4 previously d-flex justify-content-between ">
            <div>
                <img src="../../assets/images/goLeft.png" alt="">
            </div>
           <div>
               <p class="previousBtn">Previous</p>
           </div>
        </div>
        <div class="d-flex justify-content-between next mx-4    ">
            <div>
                <p class="nextBtn">Next </p>
            </div>
            <div>
                <img src="../../assets/images/goRight.png" alt="">
            </div>
        </div>
    </div>

        </div>
        <div class="px-5 theprojectBrief" v-if="!projectBrief">
        <h2 class="briefTitle">
            You have made it this far, see your project brief.
        </h2>
        <p class="sunBriefTitle">
            ShootStar is a photography company. The have contacted you to design a website for them to help them share their work, take bookings, upload short tutorials and also post blugs using all the knowledge you have gathered in this course. Give in details the followins in your submission:
        </p>
        <ul>
            <li>
                Task flow

            </li>
            <li>
                Wireframe

            </li>
            <li>
                Low fidelity prototype

            </li>
            <li>
                High fidelity prototype
            </li>
        </ul>

        <div class="d-flex justify-content-between navigationClass">
        <div class="mx-4 previously d-flex justify-content-between ">
            <div>
                <img src="../../assets/images/goLeft.png" alt="">
            </div>
           <div>
               <p class="previousBtn">Previous</p>
           </div>
        </div>
       <router-link to="/docupload">
            <div class="d-flex justify-content-between next mx-4    ">
            <div>
                <p class="nextBtn">Next </p>
            </div>
            <div>
                <img src="../../assets/images/goRight.png" alt="">
            </div>
        </div>
       </router-link>
    </div>
        </div>
        </div>

        </div>
   </div>     
</template>


<script>
export default{
    data(){
        return{
            assignment: true,
            projectbrief: true
        }
    },
    methods:{
        showTopic(){
            this.assignment = false
        },
        displayBrief(){
            this.projectbrief = false
        }
    }
}
</script>


<style scoped>

*{
    /* padding: 0; */
    margin: 0;
    box-sizing: border-box;
}

.onlearnerlogo{
    height: 20px;
    width:150px;
    /* padding: 10px 15px; */
    margin: 25px 40px;
    
}
    .assignmentSidebar{
         background: #232B37;
         color: #ffffff;
         padding: 10px 15px;
         
    }

    .courseContent{
        font-size:20px;
        margin: 30px auto;
        font-weight: 400;
    }

    /* Accordions */
    .accordionContainer{
        background-color: #232B37;
        /* background-color: red; */
        color: red ;
        border-top: none;
        margin: 15px auto;
        /* font-size: 40px; */
    }

    .assignmentUploadCtn{
        /* background: #C01C03; */
        padding: 0 35px;
    }

    .accordionHeading{
        color: #ffffff;
        background: transparent;
        font-size: 20px;
        margin: -5px auto
    }

     .accordionHeading:hover{
        background-color:#C01C03;
        border-radius: 10px;
    }
    /* Accordions */

   
    .dataClass{
        height: 100px;
        width: 100%;
        background: #232B37;
        font-weight: 400;
        font-size: 23px;

    }

    .dataClass span{
        color: #C01C03;
    }

    .courseSlides{
       height: 500px;
       width: 800px;
       margin: 25px 25px;
    }

    .courseSlidesInner{
        height: 400px;
        width: 800px;
        border-radius: 15px;
        /* margin-bottom: 500px; */
    }

    .courseSlidesInner img{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        height: 500px;
        width: 500px;
    }

    /* .courseSlides img{
        height: 50%;
        width: 50%;
    } */

    .assignmentTopic{
        color: #C01C03;
        font-weight: 400;
        font-size: 30px;
        margin-top: -60px;
        padding: 0 25px;
    }

    .previously{
        height: 45px;
        width: 150px;
        background: #8F8E95;
        padding: 10px 25px;
        border-radius: 10px;
        margin-bottom: 50px;
        margin-top: 40px;
        cursor: pointer;
    }

    .previousBtn{
        color: #ffffff;
        /* padding: 18px; */
        font-size: 18px;
        font-weight: 500;
        
        /* border-radius: 10px; */
    }

    .previousBtn img{
        margin-left: 10px;
    }

    .next{
         height: 45px;
        width: 150px;
        background: #8F8E95;
        padding: 10px 25px;
        border-radius: 10px;
        margin-bottom: 50px;
        margin-top: 40px;
        cursor: pointer;
    }

    .nextBtn{
            color: #ffffff;
        /* padding: 18px; */
        font-size: 18px;
        font-weight: 500;
    }
    
    .nextBtn img{
         margin-left: 10px;
    }

.ratingsContainer{
    background: #C01C03;
    padding: 10px 15px;
    margin-bottom: 500px;
}

.ratingsText{
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
   
}

.ratingsText span{
    padding: 0 10px;
 
}

.certclass{
     color: #ffffff;
    font-size: 18px;
    font-weight: 600;
}

.certclass span{
     padding: 0 10px;
}


.share{
     color: #ffffff;
    font-size: 18px;
    font-weight: 600;
}

.share span{
    padding: 0 10px;
}

.wireframeHeader{
    font-size: 4rem;
    font-weight: 600;
    color: #232B37;
    line-height: normal;
}

.assDetails{

    font-size: 20px;
    font-weight: 600;
}

.assignmentTask{
    font-weight: 600;
    font-size: 20px;
    width: 100%;
    max-width: 75%;
}

.romanList p{
    /* list-style:lower-roman; */
    font-weight: 600;
    font-size: 20px;
    /* color: red; */
}

.romanList p:hover{
    text-decoration: underline;
    color:#C01C03;
    cursor: pointer;
}

.livingroom{
    font-weight: 600;
}

.uploadBtn{
    background: #C01C03;
    font-size: 20px;
    color: #ffffff;
    font-weight: 600;
    padding: 10px;
    height: 60px;
    width: 250px;
    border-radius: 10px;
    margin: 50px auto;
}

.navigationClass{
    margin-bottom: 500px;
    margin-top: 50px;
}

.briefTitle{
    width: 100%;
    max-width: 65%;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 50px;
}

.sunBriefTitle{
    width: 100%;
    max-width: 60%;
    font-weight: 400;
}

.theprojectBrief{
    margin-top: 70px;
}

.theprojectBrief ul li{
    list-style-type: number;
}
</style>