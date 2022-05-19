<template>
   <div class="d-flex assignment-Sect">
       <div class="col-lg-2 assignmentSidebar">
                <div>
                    <img class="onlearnerlogo " src="../../assets/images/onlearner.png" alt="">
                </div>
                <div>
                    <h6 class="courseContent text-center">Course Content</h6>
                    <select class="form-select" aria-label="Default select example">
                            <option selected>Lesson 1</option>
                            <option value="1">Intro to Data Analysis</option>
                            <option value="2">Fundamentals of Data Analysis</option>
                            <option value="3">Scope of Data Analysis</option>
                    </select>
                     <select class="form-select" aria-label="Default select example">
                            <option selected>Lesson 2</option>
                            <option value="1">Intro to Frontend Development</option>
                            <option value="2">Fundamentals of Frontend</option>
                            <option value="3">Scope of Frontend</option>
                    </select>
                     <select class="form-select" aria-label="Default select example">
                            <option selected>Lesson 3</option>
                            <option value="1">Introduction to Malware </option>
                            <option value="2">Intermidiate Malware</option>
                            <option value="3">Scope of Malware</option>
                            <option value="4">Advanced Malware</option>
                    </select>
                     <select class="form-select" aria-label="Default select example">
                            <option selected>Lesson 4</option>
                            <option value="1">Intro to Data Science</option>
                            <option value="2">Fundamentals of Data Science</option>
                            <option value="3">Scope of Data Science</option>
                    </select>
                     <select class="form-select" aria-label="Default select example">
                            <option selected>Lesson 5</option>
                            <option value="1">Introduction to Backend</option>
                            <option value="2">Philisophy of Backend</option>
                            <option value="3">Api Integration</option>
                    </select>
                     <select class="form-select" aria-label="Default select example">
                            <option selected>Lesson 6</option>
                            <option value="1">Intro to UI/UX</option>
                            <option value="2">Fundamentals of UI/UX</option>
                            <option value="3">Tools of UI/UX</option>
                    </select>
                    <!-- <div class="d-flex">
                        <div>
                            Lesson 1
                        </div>
                        <div>
                            <img src="../../assets/images/downarrow.png" alt="">
                        </div>
                        
                    </div> -->
                    <!-- <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div> -->
                   
                </div>
               
       </div>
       <div class="col-lg-10 slidesContainer">
           <div>
               <p class="text-center text-light dataClass pt-4">Data Analyst:<span>What is data?</span></p>
           </div>

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
        <div class="d-flex justify-content-between next mx-4    ">
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
        <div class="mt-3">
            <p class="certclass"><span><img src="../../assets/images/cert.png" alt=""></span> Get Certificate</p>
        </div>
        <div class="mt-3">
            <p class="share"><span><img src="../../assets/images/Share.png" alt=""></span>Share</p>
        </div>
    </div>

     </div>
   </div>     
</template>

<style scoped>

/* .assignment-Sect{
    height: 100vh;
    
} */


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

    select{
        background: #232B37;
        color: #ffffff;
        border-left: 0;
        border-right: 0;
        border-top: 2px dotted #101927;
        border-bottom: 2px solid #101927;
        margin: 10px auto;
    }
    option{
        color: #ffffff;
        background: transparent;
    }

    select:hover{
        /* color: #C01C03; */
        background: #C01C03;
    }
/* slide styles  */
/* .slidesContainer{
    
} */
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
        margin-top: -100px;
        padding: 0 25px;
    }

    .previously{
        height: 45px;
        width: 150px;
        background: #8F8E95;
        padding: 10px 25px;
        border-radius: 10px;
        margin-bottom: 50px;
        margin-top: 40px
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
        margin-top: 40px
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

</style>