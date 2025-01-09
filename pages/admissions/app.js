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

// الحصول على مراجع المدخلات
const emailInput = document.getElementById('email');
const parentNameInput = document.getElementById('parentName');
const studentNameInput = document.getElementById('studentName');
const studentAgeInput = document.getElementById('studentAge');
const phoneInput = document.getElementById('phone');
const dobInput = document.getElementById('dob');
const gradeLevelInput = document.getElementById('gradeLevel');
const messageInput = document.getElementById('message');

// دالة التحقق من صحة البيانات
function validateForm() {
  if (!emailInput.value || !/^\S+@\S+\.\S+$/.test(emailInput.value)) {
    Swal.fire("Error", "Please enter a valid email.", "error");
    return false;
  }
  if (!parentNameInput.value) {
    Swal.fire("Error", "Parent name is required.", "error");
    return false;
  }
  if (!studentNameInput.value) {
    Swal.fire("Error", "Student name is required.", "error");
    return false;
  }
  if (!studentAgeInput.value || isNaN(studentAgeInput.value)) {
    Swal.fire("Error", "Please enter a valid age.", "error");
    return false;
  }
  if (!phoneInput.value || !/^[0-9]+$/.test(phoneInput.value)) {
    Swal.fire("Error", "Please enter a valid phone number.", "error");
    return false;
  }
  if (!dobInput.value) {
    Swal.fire("Error", "Date of birth is required.", "error");
    return false;
  }
  if (!gradeLevelInput.value) {
    Swal.fire("Error", "Grade level is required.", "error");
    return false;
  }
  if (!messageInput.value) {
    Swal.fire("Error", "Message is required.", "error");
    return false;
  }
  return true;
}

// دالة لإرسال البيانات إلى Firestore
async function submitForm(event) {
  event.preventDefault(); // منع تحديث الصفحة عند الإرسال

  if (!validateForm()) return;

  // إعداد التاريخ بالشكل المطلوب للوثيقة
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}-${String(currentDate.getHours()).padStart(2, '0')}-${String(currentDate.getMinutes()).padStart(2, '0')}-${String(currentDate.getSeconds()).padStart(2, '0')}`;

  // البيانات التي سيتم حفظها في Firestore
  const formData = {
    Email: emailInput.value,
    ParentName: parentNameInput.value,
    StudentName: studentNameInput.value,
    StudentAge: studentAgeInput.value,
    ContactPhoneNumber: phoneInput.value,
    StudentBirthday: dobInput.value,
    DesiredGrade: gradeLevelInput.value,
    Message: messageInput.value,
  };

  try {
    // حفظ البيانات في Firestore
    await setDoc(doc(collection(db, 'Addissions'), formattedDate), formData);
    Swal.fire("Success", "Form submitted successfully!", "success");

    // إعادة تعيين الحقول
    emailInput.value = '';
    parentNameInput.value = '';
    studentNameInput.value = '';
    studentAgeInput.value = '';
    phoneInput.value = '';
    dobInput.value = '';
    gradeLevelInput.value = '';
    messageInput.value = '';
  } catch (error) {
    console.error("Error submitting form:", error);
    Swal.fire("Error", "There was an error submitting the form.", "error");
  }

  return false; // لضمان عدم إعادة تحميل الصفحة
}

// التحقق من تحميل الصفحة بالكامل قبل ربط الحدث
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  form.addEventListener('submit', submitForm);
});



let mySection = document.getElementById("MySideBar");

// دالة لتفعيل عرض الشريط الجانبي
function ToggleNavbar ()  {
  mySection.innerHTML = `
    <div class="side-menue d-flex flex-column overflow-auto justify-content-center align-items-center col-8 h-100 position-fixed bg-white gap-2 ">
           


              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../../index.html">Home</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../about_us/index.html">About us</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../curriclum/index.html">Curriculum</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="#">Admissions</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../News & Events/index.html">News & Events</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../Staff Directory/index.html">Staff Directory</a>
              <a class="animate__animated animate__fadeIn col-8 p-1 d-flex justify-content-center align-items-center text-white bg-dark text-start bg-gradient text-center " href="./../contact us/index.html">Contact us</a>
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
