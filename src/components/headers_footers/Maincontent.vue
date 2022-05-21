<template>
    <!-- main content -->
 <div class="dashboard container">
         <h1 class="display-4 header-title">Dashboard</h1>
        <div class="row">
                
                    <div
                    class="g-col-6 d-flex justify-content-evenly align-items-stretch book-card"
                        >
                        <div>
                            <img src="../../assets/images/book.png" alt="" />
                        </div>

                      
                        <router-link to="/courses" style="text-decoration:none"> 
                                <div>
                                  <p class="bookNumber">10</p>
                                  <p class="bookText">Enrolled Courses</p>
                              </div>

                        </router-link>
                        
                      
                    </div>
               
                <div
                class="g-col-6 d-flex justify-content-evenly align-items-stretch book-card"
                >
                <div>
                    <img src="../../assets/images/video.png" alt="" />
                </div>

                <div>
                    <p class="bookNumber">5</p>
                    <p class="bookText">Active Courses</p>
                </div>
                </div>
                <div
                class="g-col-6 d-flex justify-content-evenly align-items-stretch book-card"
                >
                <div>
                    <img src="../../assets/images/heart.png" alt="" />
                </div>

                <div>
                    <p class="bookNumber">15</p>
                    <p class="bookText">Whishlist</p>
                </div>
                </div>
                <div
                class="g-col-6 d-flex justify-content-evenly align-items-stretch book-card"
                >
                <div>
                    <img src="../../assets/images/check.png" alt="" />
                </div>

                <div>
                    <p class="bookNumber">2</p>
                    <p class="bookText">Completed Courses</p>
                </div>
                </div>
        </div>
    </div>
    <!-- end of main content  -->
    <!-- beginning of cards  -->
      <section class="cards container card-ctn">
      <h1 class="display-4 my-5 header-title">Trending Courses</h1>

      <div class="row">
        <div class="card col-lg-4" style="width: 22rem">
          <img  src="../../assets/images/data.png" class="dataImg" alt="data images" />

          <div class="card-body">
            <p class="card-main-text">Data Science And Data</p>
            <p class="card-text">
              All you need to know about data science and analitics right now.
            </p>
          </div>

          <div class="d-flex justify-content-between card-bottom">
            <div class="mini-text">
              <p>Investment: $90</p>
            </div>
            <div class="d-flex justify-content-evenly heartyImg">
              <div>
                <img
                  style="margin-right: 20px"
                  src="../../assets/images/mini-heart.png"
                  alt="Mini heart"
                />
              </div>
              <div>
                <img src="../../assets/images/right-sign.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="card col-lg-4 cardImg" style="width: 22rem">
          <img
            src="../../assets/images/html.png"
            class="card-img-top dataImg"
            alt="data images"
          />
          <div class="card-body">
            <p class="card-main-text">Front End Development</p>
            <p class="card-text">
              All you need to know about data science and analitics right now.
            </p>
          </div>

          <div class="d-flex justify-content-between card-bottom">
            <div class="mini-text">
              <p>Investment: $90</p>
            </div>
            <div class="d-flex justify-content-evenly heartyImg">
              <div>
                <img
                  style="margin-right: 20px"
                  src="../../assets/images/mini-heart.png"
                  alt=""
                />
              </div>
              <div>
                <img src="../../assets/images/right-sign.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="card col-lg-4 cardImg" style="width: 22rem">
          <img
            src="../../assets/images/backend.png"
            class="card-img-top dataImg"
            alt="data images"
          />
          <div class="card-body">
            <p class="card-main-text">Back End Development</p>
            <p class="card-text">
              All you need to know about data science and analitics right now.
            </p>
          </div>

          <div class="d-flex justify-content-between card-bottom">
            <div class="mini-text">
              <p>Investment: $90</p>
            </div>
            <div class="d-flex justify-content-evenly heartyImg">
              <div>
                <img
                  style="margin-right: 20px"
                  src="../../assets/images/mini-heart.png"
                  alt=""
                />
              </div>
              <div>
                <img src="../../assets/images/right-sign.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Second grid row  -->

      <div class="row second-grind">
        <div class="card col-lg-4 cardImg" style="width: 22rem">
          <img
            src="../../assets/images/full-stack.png"
            class="card-img-top dataImg"
            alt="full stack"
          />
          <div class="card-body">
            <p class="card-main-text">Data Science And Data</p>
            <p class="card-text">
              All you need to know about data science and analitics right now.
            </p>
          </div>

          <div class="d-flex justify-content-between card-bottom">
            <div class="mini-text">
              <p>Investment: $90</p>
            </div>
            <div class="d-flex justify-content-evenly heartyImg">
              <div>
                <img
                  style="margin-right: 20px"
                  src="../../assets/images/mini-heart.png"
                  alt=""
                />
              </div>
              <div>
                <img src="../../assets/images/right-sign.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="card col-lg-4 cardImg" style="width: 22rem">
          <img
            src="../../assets/images/ui-ux.png"
            class="card-img-top dataImg"
            alt="data images"
          />
          <div class="card-body">
            <p class="card-main-text">Data Science And Data</p>
            <p class="card-text">
              All you need to know about data science and analitics right now.
            </p>
          </div>

          <div class="d-flex justify-content-between card-bottom">
            <div class="mini-text">
              <p>Investment: $90</p>
            </div>
            <div class="d-flex justify-content-evenly heartyImg">
              <div>
                <img
                  style="margin-right: 20px"
                  src="../../assets/images/mini-heart.png"
                  alt=""
                />
              </div>
              <div>
                <img src="../../assets/images/right-sign.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="card col-lg-4 cardImg" style="width: 22rem">
          <img
            src="../../assets/images/touch.png"
            class="card-img-top dataImg"
            alt="data images"
          />
          <div class="card-body">
            <p class="card-main-text">Data Analyst</p>
            <p class="card-text">
              All you need to know about data science and analitics right now.
            </p>
          </div>

          <div class="d-flex justify-content-between card-bottom">
            <div class="mini-text">
              <p>Investment: $90</p>
            </div>
            <div class="d-flex justify-content-evenly heartyImg">
              <div>
                <img
                  style="margin-right: 20px"
                  src="../../assets/images/mini-heart.png"
                  alt=""
                />
              </div>
              <div>
                <img  src="../../assets/images/right-sign.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end of cards  -->
    <!-- <enrolled-courses/> -->
</template>

<script>
// import enrolledCourses from '../content_body/enrolledCourses.vue'
// import enrolledCourses from "../content_body/enrolledCourses.vue"
export default{
//   components: { enrolledCourses },
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
/* main content styles */
.dashboard {
  margin-top: 25px;
  margin-left: 5rem;
  /* width: 100%;
  max-width: vw; */
}


.header-title {
  color: #000000;
  font-weight: 600;
  font-size: 35px;
   margin-left: 7px;
}

.book-card {
  height: 125px;
  width: 100%;
  padding: 25px 0;
  /* max-height: 5rem; */
  max-width: 19rem;
  border-radius: 10px;
  background-color: #ffffff;
  margin: 10px 20px;
}

.bookNumber {
  font-size: 2.5rem;
  color: #232b37;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0;
}

.bookText {
  color: #232b37;
  font-weight: 400;
  font-size: 10px;
}

/* end of maincontent styling */

/* cards styling */

.card {
  border-radius: 15px;
  margin: 10px 15px;
  padding: 0;
  border: 1px solid 
#8F8E95;
width: 100%;
/* max-width: 900px; */
}

.card-ctn{
     margin-left: 5rem;
}

.card-main-text {
  margin-top: 15px;
  font-weight: 600;
}

.card-text {
  color: #232b37;
  font-size: 12px;
  width: 80%;
  line-height: normal;
  font-weight: 500;
}

.mini-text {
  font-weight: 600;
  font-size: 15px;
  /* padding-top: 10px; */
  padding: 10px 10px;
  margin-top: 5px;
  width: 100%;
  color: #c01c03;
}

.card-bottom {
  border-top: 2px solid #8f8e95;
  margin-top: 40px;
}

.heartyImg {
  padding: 10px 10px;
  margin-top: 5px;
}

.second-grind {
  margin-top: 15px;
  margin-bottom: 18rem;
}

.dataImg{
    border-radius: 15px;
}




/* end of card styling  */
</style>