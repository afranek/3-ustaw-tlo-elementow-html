const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');
    // 1 rozwiazanie - inline
    // p1.style.backgroundColor = 'red';
    // p2.style.backgroundColor = 'yellow';
    p1.classList.add('bg-red');
    p2.classList.add('bg-yellow');
}

let btnSetBack = document.getElementById('set-background');

btnSetBack.addEventListener('click', setBackground);