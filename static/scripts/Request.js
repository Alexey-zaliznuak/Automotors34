const Button = document.getElementById('OrderSuperMainButton')
const menuOrder = document.getElementById('order__title')

Button.addEventListener('click', () => {

    const name = menuOrder.querySelectorAll('.input')[0].getElementsByClassName('inputOrderMenuQ')[0].value
    const telephone = menuOrder.querySelectorAll('.input')[1].getElementsByClassName('inputOrderMenuQ')[0].value
    const email = menuOrder.querySelectorAll('.input')[2].getElementsByClassName('inputOrderMenuQ')[0].value

    const elements = menuOrder.querySelector('.order__elements').querySelectorAll('.order__element')

    // console.log(name)
    // console.log(telephone)
    // console.log(email)

    const data = {
        "order":[],
        "name":name,
        "email":email,
        "telephone":telephone,
        "summ":"123123"
    }
    elements.forEach(el => {
        data.order.push({
            "name":el.querySelector('h3').innerHTML,
            "cout":el.querySelector('.cout').innerHTML,
            "cost":el.querySelector('.total').innerHTML
        })
    });

    console.log(data)
    httpRegistration(data)
})

let b = 0;


async function httpRegistration(data) {

    const options = {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json'
            // 'Origin': 'http://127.0.0.1:5000/send_order'
        }),
        body: JSON.stringify(data)
    };
    await fetch('https://send-email-server.herokuapp.com/send_order', options)
        .then((json) => {
            console.log(json.status)
        })
        .catch((err) => {
            console.log(err)
        })
        
        
}

// backet.addEventListener('click',() => {
//         const elements = menuOrder.querySelector('.order__elements').querySelectorAll('.order__element')
//         let i = 0;
//         elements.forEach(el => {

//             const cout = el.querySelector('.cout')
//             const minus = el.querySelectorAll('.znak')[0]
//             const plus = el.querySelectorAll('.znak')[1]
//             const total = el.querySelector('.total')
//             minus.id = i;

//             minus.addEventListener('click', () => {
//                 let coutN = +cout.innerHTML
//                 if(coutN>1){
//                     cout.innerHTML = coutN - 1;
//                     console.log(minus.id)
//                     total.innerHTML = +data[minus.id].price * +cout.innerHTML
//                 }
//             })
//             plus.addEventListener('click', () => {
//                 let coutN = +cout.innerHTML
//                 cout.innerHTML = coutN + 1;
//                 console.log(minus.id)
//                 total.innerHTML = +data[minus.id].price * +cout.innerHTML
                
//             })
//             console.log(minus.id)
//             i++
//         })
// })
