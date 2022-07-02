
const NoClick = document.getElementsByName('NoClick')

orderpage.addEventListener('click', () => {
    orderpage.classList.add('displaynone')
})

NoClick.forEach(el => {
    el.addEventListener('click', (event) => {
        event.stopPropagation();
    })
});
