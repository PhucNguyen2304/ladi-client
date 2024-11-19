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
const firebaseConfig = {
    apiKey: "AIzaSyDsnelmBqcMkRnVCNY31rSKnSPdfrXFqD0",
    authDomain: "ladi-server.firebaseapp.com",
    projectId: "ladi-server",
    storageBucket: "ladi-server.appspot.com",
    messagingSenderId: "17377594943",
    appId: "1:17377594943:web:8fb81d318bc3a41446f28a",
    measurementId: "G-8CP8ZLM5KK"
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
