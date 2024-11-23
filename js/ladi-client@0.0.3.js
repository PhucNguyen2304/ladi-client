const headTags = [
    {
        tagName: "link",
        attributes:
        {
            href: "https://cdn.jsdelivr.net/npm/daisyui@4.12.14/dist/full.min.css",
            rel: "stylesheet"
        }

    },
    {
        tagName: "link",
        attributes:
        {
            href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
            rel: "stylesheet"
        }

    },
    {
        tagName: "script",
        attributes:
        {
            src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
            integrity: "sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==",
            crossOrigin: "anonymous",
            referrerpolicy: "no-referrer"
        }
    }
]

const bottomTags = [

    {
        tagName: "script",
        attributes:
        {
            src: "https://cdn.tailwindcss.com"
        }

    },
    {
        tagName: "script",
        attributes:
        {
            src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
        }
    }

]

function initTags(arrTag, domElement) {
    arrTag.forEach(({ tagName, attributes }) => {
        let tag = document.createElement(tagName);

        for (let [key, value] of Object.entries(attributes)) {
            tag[key] = value;
        }

        // Append the script to the body
        domElement.appendChild(tag);
    })
}


const initHeadLinks = () => {
    document.documentElement.setAttribute("data-theme", "cupcake");

    var head = document.querySelector('head');

    initTags(headTags, head)
}

const initBottomLinks = () => {
    initTags(bottomTags, document.body)
}


initHeadLinks();
initBottomLinks();


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, child, get, set, update, remove } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2NP7LZ_XiMIX7V2N6D6epWMbMNgn7WDQ",
    authDomain: "ladi-server-f17d1.firebaseapp.com",
    databaseURL: "https://ladi-server-f17d1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ladi-server-f17d1",
    storageBucket: "ladi-server-f17d1.firebasestorage.app",
    messagingSenderId: "936327524202",
    appId: "1:936327524202:web:73e3e6d2a32ec73d567f13",
    measurementId: "G-0R6M2SB80T"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
// Render element

function Render(elementClass, contents) {
    var element = document.getElementsByClassName(`${elementClass}`)[0]

    element.outerHTML = contents
}

function initialData(path) {
    const dbRef = ref(db);

    return get(child(dbRef, path + "/",)).then((snapshot) => {
        if (snapshot.exists()) {
            let response = snapshot.val()
            return Object.keys(response).map((val) => {
                return {
                    ...response[val],
                }
            })
        }
    })
}


function getProductBySlug(slug) {
    return [...products].find(val => val.slug === slug);
}

export { Render, initialData }
