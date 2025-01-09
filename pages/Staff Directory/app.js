AOS.init();
let mySection = document.getElementById("MySideBar")
  function ToggleNavbar(){
    
    mySection.innerHTML=`
    
     <div class="side-menue d-flex flex-column overflow-auto p-5 align-items-center col-5 h-100 position-fixed bg-white gap-4 ">
     

            <a class="animate__animated animate__fadeIn text-dark text-start bg-gradient bg-info p-2" href="../../index.html">Home</a>
            <a class="animate__animated animate__fadeIn text-dark text-start bg-gradient bg-info p-2" href="../about_us/index.html">About us</a>
            <a class="animate__animated animate__fadeIn text-dark text-start bg-gradient bg-info p-2" href="../curriclum/index.html">Curriculum</a>
            <a class="animate__animated animate__fadeIn text-dark text-start bg-gradient bg-info p-2" href="../admissions/index.html">Admissions</a>
            <a class="animate__animated animate__fadeIn text-dark text-start bg-gradient bg-info p-2" href="../News & Events/index.html">News & Events</a>
            <a class="animate__animated animate__fadeIn text-dark text-start bg-gradient bg-info p-2" href="#">Staff Directory</a>
            <a class="animate__animated animate__fadeIn text-dark text-start bg-gradient bg-info p-2" href="../contact us/index.html">Contact us</a>
            <a class="animate__animated animate__fadeIn text-dark text-start bg-gradient bg-info p-2" href="../FAQ/index.html">FAQ</a>
            
        </div>
        <div class="overlayFullss d-flex position-fixed col-12 h-100" onclick="CloseSideMenue()"></div>
    `
   console.log(mySection)
  }
  function CloseSideMenue (){
    mySection.innerHTML=``
  }