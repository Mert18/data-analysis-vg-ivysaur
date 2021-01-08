linear = document.querySelector('#lir');
randomf = document.querySelector('#rfr');
ridge = document.querySelector('#rr');

title = document.querySelector('#t');
trainacc = document.querySelector('#tr');
testacc = document.querySelector('#te');
r2score = document.querySelector('#r2');


linear.addEventListener('click', () => {
    title.innerHTML = "Linear Regression"
    trainacc.innerHTML = "Training Accuracy : 0.9999892777508779"
    testacc.innerHTML = "Testing Accuracy : 0.99998698585513"
    r2score.innerHTML = "r&#178; Score: 0.99998698585513"
});

randomf.addEventListener('click', () => {
    title.innerHTML = "Random Forest Regression"
    trainacc.innerHTML = "Training Accuracy : 0.9903258681903772"
    testacc.innerHTML = "Testing Accuracy : 0.9767699215157793"
    r2score.innerHTML = "r&#178; Score: 0.9767699215157793"
})

ridge.addEventListener('click', () => {
    title.innerHTML = "Ridge Regression"
    trainacc.innerHTML = "Training Accuracy : 0.9999891804389519"
    testacc.innerHTML = "Testing Accuracy : 0.9999869315710493"
    r2score.innerHTML = "r&#178; Score: 0.9999869315710493"
})
