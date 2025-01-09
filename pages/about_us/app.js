AOS.init();
let hasAnimated = false;

    function increaseCount(elementId, target, duration) {
        let start = 0;
        const stepTime = Math.abs(Math.floor(duration / target));
        const element = document.getElementById(elementId);

        const interval = setInterval(() => {
            start += 1;
            element.innerText = start;

            if (start >= target) {
                clearInterval(interval);
            }
        }, stepTime);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true; // لمنع التكرار
                increaseCount('subjectsCount', 500, 2000);
                increaseCount('studentsCount', 500, 2000);
                increaseCount('experienceCount', 500, 2000);
            }
        });
    }, {
        threshold: 0.5 // تحديد نسبة ظهور العنصر (50% من العنصر يجب أن يكون مرئيًا)
    });

    // ملاحظة العنصر الذي يحتوي على الأعداد
    const target = document.getElementById('countSection');
    observer.observe(target);

    let mySection = document.getElementById("MySideBar")
  function ToggleNavbar(){
    
    mySection.innerHTML=`
    
     <div class="side-menue d-flex flex-column overflow-auto justify-content-center align-items-center col-8 h-100 position-fixed bg-white gap-2 ">
           


              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../../index.html">Home</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="#">About us</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../curriclum/index.html">Curriculum</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../admissions/index.html">Admissions</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../News & Events/index.html">News & Events</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../Staff Directory/index.html">Staff Directory</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../contact us/">Contact us</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../FAQ/index.html">FAQ</a>
        </div>
        <div class="overlayFullss d-flex position-fixed col-12 h-100" onclick="CloseSideMenue()"></div>
    `
   console.log(mySection)
  }
  function CloseSideMenue (){
    mySection.innerHTML=``
  }