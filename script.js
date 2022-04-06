var data = 0
document.getElementById("root").innerText = data

function decrement() {
    if (data - 1 >= 0) {
        data -= 1
    } else {
        return 0
    }
    document.getElementById("root").innerText = data;
}

// function decrement() {
//     data = data - 1 > 0 ? data -= 1 : 0;
  
//     document.getElementById("root").innerText = data;
// }

function increment() {
    data += 1
    document.getElementById('root').innerText = data
}

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
