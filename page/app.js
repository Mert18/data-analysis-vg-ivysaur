const x = document.querySelector('.centered-image')
function showup() {
    x.classList.replace('centered-image', 'dstrue')
}

const y = document.querySelector('.logo')

function change() {
    y.classList.replace('logo', 'logotrue')
}


x1 = document.querySelector('#one');
x2 = document.querySelector('#two');
x3 = document.querySelector('#three');
x4 = document.querySelector('#four');

image = document.querySelector('.image');
sect = document.querySelector('.quest');

x1.addEventListener('click', () => {
    sect.classList.add('wrong')
    setTimeout(() => {
        sect.classList.remove('wrong')
    }, 1000)
    x1.style.display = "none";
})

x2.addEventListener('click', () => {
    image.classList.replace('image', 'imagetrue');
    sect.classList.add('correct')
})
x3.addEventListener('click', () => {
    sect.classList.add('wrong')
    setTimeout(() => {
        sect.classList.remove('wrong')
    }, 1000)
    x3.style.display = "none";
})
x4.addEventListener('click', () => {
    sect.classList.add('wrong')
    setTimeout(() => {
        sect.classList.remove('wrong')
    }, 1000)
    x4.style.display = "none";
})