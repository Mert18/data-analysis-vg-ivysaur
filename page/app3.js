na = document.querySelector('#na');
eu = document.querySelector('#eu');
jp = document.querySelector('#jp');

title = document.querySelector('#t');
trainacc = document.querySelector('#tr');
testacc = document.querySelector('#te');
r2score = document.querySelector('#r2');


na.addEventListener('click', () => {
    trainacc.innerHTML = "Training Accuracy : 0.8951500821541934"
    testacc.innerHTML = "Testing Accuracy : 0.8373402660947679"
    r2score.innerHTML = "r&#178; Score: 0.83"
});

eu.addEventListener('click', () => {
    trainacc.innerHTML = "Training Accuracy : 0.8280545518042903"
    testacc.innerHTML = "Testing Accuracy : 0.755336435980043"
    r2score.innerHTML = "r&#178; Score: 0.75"
})

jp.addEventListener('click', () => {
    trainacc.innerHTML = "Training Accuracy : 0.3822641566649255"
    testacc.innerHTML = "Testing Accuracy : 0.3417874060126249"
    r2score.innerHTML = "r&#178; Score: 0.34"
})

/* ------------------------------------- */

na1 = document.querySelector('#na1');
eu1 = document.querySelector('#eu1');
jp1 = document.querySelector('#jp1');

title1 = document.querySelector('#t1');
trainacc1 = document.querySelector('#tr1');
testacc1 = document.querySelector('#te1');
r2score1 = document.querySelector('#r21');

na1.addEventListener('click', () => {
    trainacc1.innerHTML = "Training Accuracy : 0.9383917047353844"
    testacc1.innerHTML = "Testing Accuracy : 0.8424539608898256"
    r2score1.innerHTML = "r&#178; Score: 0.84"
});

eu1.addEventListener('click', () => {
    trainacc1.innerHTML = "Training Accuracy : 0.8854189430953356"
    testacc1.innerHTML = "Testing Accuracy : 0.6911661731321145"
    r2score1.innerHTML = "r&#178; Score: 0.69"
})

jp1.addEventListener('click', () => {
    trainacc1.innerHTML = "Training Accuracy : 0.541536197818083"
    testacc1.innerHTML = "Testing Accuracy : 0.2850176896888509"
    r2score1.innerHTML = "r&#178; Score: 0.28"
})

/* ------------------------------------- */

na2 = document.querySelector('#na2');
eu2 = document.querySelector('#eu2');
jp2 = document.querySelector('#jp2');

title2 = document.querySelector('#t2');
trainacc2 = document.querySelector('#tr2');
testacc2 = document.querySelector('#te2');
r2score2 = document.querySelector('#r22');

na2.addEventListener('click', () => {
    trainacc2.innerHTML = "Training Accuracy : 0.8951500706885547"
    testacc2.innerHTML = "Testing Accuracy : 0.8373699225693387"
    r2score2.innerHTML = "r&#178; Score: 0.83"
});

eu2.addEventListener('click', () => {
    trainacc2.innerHTML = "Training Accuracy : 0.8280544860586367"
    testacc2.innerHTML = "Testing Accuracy : 0.7553449659199418"
    r2score2.innerHTML = "r&#178; Score: 0.75"
})

jp2.addEventListener('click', () => {
    trainacc2.innerHTML = "Training Accuracy : 0.3822639448186439"
    testacc2.innerHTML = "Testing Accuracy : 0.3417879771328324"
    r2score2.innerHTML = "r&#178; Score: 0.34"
})