<template>
     <div class="container-fluid footer-sect">
      <div class="row crew-items">
        <div class="col-lg-6 greyClass">
          <p class="grey-text">:<span>grey</span>africa</p>
          <p class="grey-sub-text">
            Need Help? Let’s connect you to our leading team to help you.
          </p>
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-4">
              <ul class="list-group">
                <li class="fw-bolder">Company</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Courses</li>
                <li>Be a tutor</li>
              </ul>
            </div>
            <div class="col-4">
              <ul class="list-group">
                <li class="fw-bolder">Learn More</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Courses</li>
                <li>Be a tutor</li>
              </ul>
            </div>
            <div class="col-4">
              <ul class="list-group">
                <li class="fw-bolder">Support</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Courses</li>
                <li>Be a tutor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="signature">&copy; Created by Oladele, designed by Mide 2022.</p>
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

<style>
/* footer  */
.footer-sect{
  background-color: #232b37;
  color: white;
  /* margin-bottom: 20px; */
  padding: 30px;
  
}
.list-group li {
  list-style: none;
  font-size: 12px;
  cursor: pointer;
}

.list-group li:hover {
  color: #c01c03;
  transition: 355ms ease-in-out;
}
.list-head {
  font-size: 50px;
}

.crew-items {
  border-bottom: 2px solid black;
  margin-right: 1rem;
  /* margin-bottom: 20rem; */
}

.greyClass {
  padding: 0 8rem;
}

.greyClass span {
  color: #a71b08;
}

.grey-text {
  font-weight: 400;
  font-size: 1.5rem;
}

.grey-sub-text {
  height: 100%;
  width: 100%;
  max-width: 40%;
  font-size: 9px;
}

.signature {
  font-size: 10px;
  margin-top: 40px;
  padding: 0 7rem;
}

/* End of footer  */
</style>