//const orderq = document.getElementById('order__elements')


// const order__element = document.createElement('div')

// const znakP = document.createElement('img')
// const znakM = document.createElement('img')
// const znakX = document.createElement('img')


// const iamg = document.createElement('img')
// const titleq = document.createElement('h3')
// const minus = document.createElement('div')
// const cout = document.createElement('div')
// const plus = document.createElement('div')
// const total = document.createElement('div')
// const closeBT = document.createElement('div')




// function getElementToOrder(data) {

//     const iamgsrc = data.src;
//     const titleText = data.title;
//     const coutProducts = data.cout;
//     const price = data.price;

//     iamg.src = iamgsrc;
//     iamg.classList.add('order__img');

//     titleq.innerHTML = titleText;
//     titleq.classList.add('order__element__title');

//     znakM.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAYklEQVRIiWNgGAUkAg8GBobHDAwM/8nEj6Bm4ASPKDAc2RKcAKaIXIChn4kCw4gCoxYMvAUsBOSJTVGMuCQG3Ac4XUYsGPqRPGoByRY8htLkFtXIZmAFHgyU1QkEK5xRgAEAniZHF+piND8AAAAASUVORK5CYII="
//     minus.appendChild(znakM);
//     minus.classList.add('znak');

//     cout.innerHTML = coutProducts;
//     cout.classList.add('cout');

//     znakP.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAdElEQVRIiWNgGAUkAg8GBobHDAwM/8nEj6Bm4ASPKDAc2RKcAKaIXIChn4kCw4gCpFpAsg8HnQ8GnwUsBORxhTe6OCMuAwbcB+gu+49DHCcY+pE84HGADogOexigexA9htLkFtXIZmAFHgyU1QkEK5xRgAEAw+tLFxSOpJUAAAAASUVORK5CYII="
//     plus.appendChild(znakP);
//     plus.classList.add('znak');
    
//     c = "" + (price * coutProducts)
//     total.innerHTML = c
//     total.classList.add('total');
    
//     znakX.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD7ElEQVRoge2Yz2rjVhTGv3OsS5FJUKcJpI6DSLEhdryLCe4LtDKlmy76GjPTdjN9hC7a1ylpuukuWSQYg+1FAmMowREkJkrH8WJGul1YDu6gP/dK9qLgD+5K0ne+n3R1dXSBtdZaa63/k0oANlfovxnWWIleEtEHIroD0FqBf4uI7ojoA4BXS3Vm5tfMLBeGB+DLJZZoMvP4oxpvluIshHhtGIaMGJ4QIjeEEKJpGMY4pkY+CCHEKyGETBgPQojM00kI0Qo9kmq8TPKguAPFYrHk+/7fAAopOTxmdqbT6blOeNM0W0EQnACwUk71DcPYm0wmt1EHOe6qp6end0T0QERIGRaAE9M0lZ9EeO4JEVkK/g+TyeRdnFcsAIB/mPnr8OVC0giDnJimmfpOFIvFJhH9TkRWmi8ze0T0LYBYgNgptFDwiIhOAXyWdi4ALwiC9nQ6PUsIfwrgRV6vuVIBAMCyrKMgCJQhiKj9+Pj4n8KWZTVDD6XwUR5RUgIIAxxJKZUhADwHsCyrGV6rFH7x2jQpA4RBtKYTM7d933+vM22YuT0ej5XCA5oAALC1taW6/AGzuwnVc5nZub+/11qOtQEAYHt7W2c6qcgDoB0eyAgAzCAALAPCk1JmCg/kAABmEMycB8IjIsd13UzhgZwAALC7u3vk+34WCA9ArvDAEgCAGYTOO0FEnu/7ucMDgJHXAACklEREWjfDMIyl3LzcJrZt63xhF+VJKds3NzfKa36UcgHYtq3zhY2SFwRBLojMALZt6zRmSfKIqD0cDjNBZAKwbbsZLp95w8/lAcgEoQ2wv7/fYuaVtBJBEDjD4XB1rUSlUmli9vVVbcwcKeV7AKdSSuVW/Pr6evnNXKVSaRYKhVMppWpL7FxdXZ0DQLVa1epipZTKEEoAtVpN62dESvkcfq5qtarTdnhBEChBpALUajXtadPv9yPncb1e1/opIqL2YDDI/ktZq9W0/mGJKDb8XPV6XaeL9QAkQsQCHBwcbBqG8RbAlkohKWVq+LkODw9bRKS6kt0B+KLX60XuTMRuqzDzBhF9qrBvoxUeAPr9/rmU0iEiT8H/BYCN2JxxBwaDwYiZf0zbt0ma82kQzOyEHkk1fur1epG7ckDKtqHruuelUskD0I668wCcbrebuSV2XfdmZ2fnDyL6nojMiBo/d7vdX5M80vY9cXt7e1Yulz0iWoTwCoWC0+l0cvfzruuO9vb2/gTwMcSbTqfzS9r1qQAAMBqNzsrl8gOAr4hozMzfXFxc5A6/4D8ql8t/AfiOiD5h5h8uLy9/W5b/s1qt1k6j0Yh9ofKq0WhsHB8ff74q/7XWWmut5etfal63xtcgdNIAAAAASUVORK5CYII="
//     closeBT.appendChild(znakX);
//     closeBT.classList.add('close');


//     order__element.appendChild(iamg);
//     order__element.appendChild(titleq);
//     order__element.appendChild(minus);
//     order__element.appendChild(cout);
//     order__element.appendChild(plus);
//     order__element.appendChild(total);
//     order__element.appendChild(closeBT);

//     order__element.classList.add('order__element');

//     orderq.appendChild(order__element.cloneNode(true));
// }
// let data = [
// ]
// let a = 0

// let coutproduct = 1;


// document.addEventListener('click', ()=>{
//     if(a === 0){
//         const buttonsProduct = document.getElementsByName('buttonProduct')
//         const cardsProduct = document.getElementsByName('cardProduct')

//         buttonsProduct.forEach(el => {
//             el.addEventListener('click', () => {
                
//             })
//         })

//         cardsProduct.forEach(el => {
            

//             // const img = el.querySelector('.prodcard__img');
//             // const title = el.querySelector('.prodcard__title');
//             // const price = el.querySelector('.prodcard__cost');

//             // const dataProduct = ({
//             //     "src": img.src.replace('http://127.0.0.1:5500', ''),
//             //     "title":title.innerText,
//             //     "cout":coutproduct,
//             //     "price":price.innerHTML.replace(/[^0-9]/g,"")
//             // })

//             //     el.querySelector('.prodcard__button').addEventListener('click', ()=>{
//             //         if(data.indexOf(dataProduct) === -1){
//             //             console.log(img.src.replace('http://127.0.0.1:5500', ''))
//             //             data.push(dataProduct)
//             //             getElementToOrder(dataProduct)
//             //         }
//             //     })
//         })
//     }
// })
