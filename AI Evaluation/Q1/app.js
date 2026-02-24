import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

/* 🔥 REPLACE THIS WITH CONFIG FROM FIREBASE CONSOLE */
const firebaseConfig = {
  apiKey: "AIzaSyBl0RrLpU1OB4QaExD7c-Ayq7GZUtyBaTY",
  authDomain: "time-tracker-app-52c13.firebaseapp.com",
  projectId: "time-tracker-app-52c13",
  storageBucket: "time-tracker-app-52c13.firebasestorage.app",
  messagingSenderId: "334523129710",
  appId: "1:334523129710:web:417a35d9a69743b97eab7f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

/* UI */
const loginScreen = document.getElementById('login-screen');
const appScreen = document.getElementById('app-screen');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const btnLogin = document.getElementById('btn-login');
const btnSignup = document.getElementById('btn-signup');
const btnGoogle = document.getElementById('btn-google');
const btnLogout = document.getElementById('btn-logout');

const datePicker = document.getElementById('date-picker');
const activityTitle = document.getElementById('activity-title');
const activityCategory = document.getElementById('activity-category');
const activityMinutes = document.getElementById('activity-minutes');
const btnAdd = document.getElementById('btn-add');
const activitiesList = document.getElementById('activities-list');

let currentUser = null;
let activities = [];

/* Auth */
btnSignup.onclick = async () => {
  await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
};

btnLogin.onclick = async () => {
  await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
};

btnGoogle.onclick = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

btnLogout.onclick = async () => {
  await signOut(auth);
};

onAuthStateChanged(auth, user => {
  currentUser = user;
  if (user) {
    loginScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");
    loadActivities();
  } else {
    loginScreen.classList.remove("hidden");
    appScreen.classList.add("hidden");
  }
});

/* Firestore */
async function loadActivities() {
  const date = datePicker.value || new Date().toISOString().slice(0,10);
  datePicker.value = date;

  const q = query(
    collection(db, "users", currentUser.uid, "days", date, "activities"),
    orderBy("createdAt")
  );

  const snap = await getDocs(q);
  activities = [];
  snap.forEach(d => activities.push({ id: d.id, ...d.data() }));

  renderActivities();
  renderCharts();
}

btnAdd.onclick = async () => {
  const date = datePicker.value;
  await addDoc(
    collection(db, "users", currentUser.uid, "days", date, "activities"),
    {
      title: activityTitle.value,
      category: activityCategory.value,
      minutes: Number(activityMinutes.value),
      createdAt: serverTimestamp()
    }
  );
  activityTitle.value = "";
  activityMinutes.value = "";
  loadActivities();
};

function renderActivities() {
  activitiesList.innerHTML = "";
  activities.forEach(a => {
    const li = document.createElement("li");
    li.className = "border p-2 rounded flex justify-between";
    li.innerHTML = `${a.title} (${a.minutes} min)
      <button data-id="${a.id}">X</button>`;
    li.querySelector("button").onclick = async () => {
      await deleteDoc(doc(db, "users", currentUser.uid, "days", datePicker.value, "activities", a.id));
      loadActivities();
    };
    activitiesList.appendChild(li);
  });
}

/* Charts */
function renderCharts() {
  const ctx1 = document.getElementById("pieChart");
  const ctx2 = document.getElementById("barChart");

  new Chart(ctx1, {
    type: "pie",
    data: {
      labels: activities.map(a => a.category),
      datasets: [{ data: activities.map(a => a.minutes) }]
    }
  });

  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: activities.map(a => a.title),
      datasets: [{ data: activities.map(a => a.minutes) }]
    }
  });
}