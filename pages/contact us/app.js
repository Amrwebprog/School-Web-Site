AOS.init();
// استيراد الوظائف التي تحتاجها من SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// التهيئة لمشروع Firebase الخاص بك
const firebaseConfig = {
  apiKey: "AIzaSyBS7c4fTEhnpS_gI7V6iSpZ4NidfU1k3F8",
  authDomain: "website-data-d8367.firebaseapp.com",
  projectId: "website-data-d8367",
  storageBucket: "website-data-d8367.firebasestorage.app",
  messagingSenderId: "541688373291",
  appId: "1:541688373291:web:63b146bf76870c23704a6e",
  measurementId: "G-BBMN74HM64"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// استدعاء العناصر من الصفحة
const inputEmail = document.getElementById('Email');
const inputName = document.getElementById('Name');
const inputAdress = document.getElementById('Adress');
const inputNumber = document.getElementById('PhoneNumber');
const inputMessage = document.getElementById('message');

// وظيفة للتعامل مع بيانات النموذج عند الضغط على زر "إرسال"
async function handleContactUs(event) {
  event.preventDefault();  // منع إرسال النموذج

  let email = inputEmail.value;
  let name = inputName.value;
  let Adress = inputAdress.value;
  let Number = inputNumber.value;
  let Message = inputMessage.value;

  console.log(email);
  console.log(name);
  console.log(Adress);
  console.log(Number);
  console.log(Message);

  const isValidation = validation(email, Number, Message);
  console.log(isValidation);

  if (isValidation === true) {
    // احصل على التاريخ والوقت الحالي بالتنسيق المطلوب
    const currentDate = new Date();
    const docName = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}-${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;

    // إضافة البيانات إلى Firebase
    try {
      await setDoc(doc(db, "Messages", docName), {
        Address: Adress,
        Email: email,
        Message: Message,
        Name: name,
        PhoneNumber: Number,
        Timestamp: currentDate
      });

      Swal.fire({
        title: 'Success!',
        text: 'Your action was successful.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      Swal.fire({
        title: 'Error!',
        text: 'There was an error saving your data.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  } else {
    Swal.fire({
      title: 'Error!',
      text: isValidation,
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
}

function validation(email, number, message) {
  // تحقق من تعبئة جميع الحقول
  if (!email || !number || !message) {
    return "Please fill all inputs";
  }

  // التعبير العادي للبريد الإلكتروني
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }

  // التعبير العادي لرقم الهاتف المصري
  const numberRegex = /^(?:\+20|0)(10|11|12|15)[0-9]{8}$/;
  if (!numberRegex.test(number)) {
    return "Please enter a valid Egyptian phone number";
  }

  // إذا كانت كل المدخلات سليمة
  return true;
}

document.querySelector('button').addEventListener('click', handleContactUs);


// تعريف العناصر التي سيتم التفاعل معها
let mySection = document.getElementById("MySideBar");

// دالة لتفعيل عرض الشريط الجانبي
function ToggleNavbar ()  {
  mySection.innerHTML = `
<div class="side-menue d-flex flex-column overflow-auto justify-content-center align-items-center col-8 h-100 position-fixed bg-white gap-2 ">
           


              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../../index.html">Home</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../about_us/index.html">About us</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../curriclum/index.html">Curriculum</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../admissions/index.html">Admissions</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../News & Events/index.html">News & Events</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../Staff Directory/index.html">Staff Directory</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="#">Contact us</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../FAQ/index.html">FAQ</a>
        </div>

    <div class="overlayFullss d-flex position-fixed col-12 h-100" id="CloseSideMenue"></div>
  `;
  console.log(mySection);
  document.getElementById('CloseSideMenue').addEventListener('click', CloseSideMenue);
}


document.getElementById('toggleButton').addEventListener('click', ToggleNavbar);

// دالة لإغلاق الشريط الجانبي
function CloseSideMenue (){
  mySection.innerHTML = ``;
}
