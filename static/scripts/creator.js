const container = document.getElementById('container')
//const order = document.getElementById('orderSelect')
const orderpage = document.getElementById('orderpage')
const name__box = document.getElementById('name__box')
const bt = document.getElementById('bt')
const brandselect =  document.getElementById('brandselect')
const SearchInput =  document.getElementById('SearchInput')
const SearchButton =  document.getElementById('SearchButton')

const brandes = Array.from(document.getElementsByName('brand'))

const carddiv = document.createElement('div')
const card = document.createElement('div')

const img = document.createElement('img')
const prodcard__imgdiv = document.createElement('prodcard__imgdiv')
const title = document.createElement('div')
const info = document.createElement('div')
const cost = document.createElement('div')
const button = document.createElement('button')




const sortDataCost = (json, view) => {
    let data = json
    const symb = ['По возрастанию цены', 'По убыванию цены', 'От А до Я', 'От Я до А']

    if (symb.indexOf(view) != -1){
        data.sort(function(a, b){
            if(view === "По возрастанию цены"){
                return +a.cost - +b.cost;
            }else if(view === "По убыванию цены"){
                return +b.cost - +a.cost;
            }else if(view === "От А до Я"){
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                return 0;
            }else if(view === "От Я до А"){
                if (a.title < b.title) return 1;
                if (a.title > b.title) return -1;
                return 0;
            }
        });
    }

    return data
}

container.addEventListener('click', (e) => {
    let targetTtem = e.target;
    if (e.target.closest('.prodcard__button')) {
        orderpage.classList.remove('displaynone')
    }
})



const sortBrand = (data) => {
    let brands = [ ]

    for(j=0; j < brandes.length;j++){
        brands.push({
            "name":brandes[j].id,
            "check":brandes[j].checked
        })
    }

    let i;
    let a = 0;
    brands.forEach(checkbrand => {
        if(checkbrand.check === true){
            a = 1; 
        }
    })
    if(a == 1){
        brands.forEach(checkbrand => {
            for(i = 0; i < data.length; i += 1){
                if(data[i].brand == checkbrand.name){
                    if(checkbrand.check == false){
                        delete data[i]
                        data.splice(i, 1)
                        i--
                    }
               }
            }
        })
    }
    
    return data
}

const searchProduct = (data, value) => {
    if(value == ""){ 
        return data
     }
    let newdata = []

    data.forEach(el => {
        if(el.title.toLowerCase().indexOf(value.toLowerCase()) === -1){
            return
        }
        newdata.push(el)
    })
    return newdata
}

SearchButton.addEventListener('click', (e) => {
    e.preventDefault();
    GetCards()
})


    const getData = fetch("./get_data")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        return data
    });



const GetCards = async () => {

    let dataQQQ = await getData;
    
    if(window.location.href == "http://127.0.0.1:5000/engine" || window.location.href.split("/").pop() == "engine"){
        dataQQQ = dataQQQ.engine;
    }
    if(window.location.href == "http://127.0.0.1:5000/AKPP" || window.location.href.split("/").pop() == "AKPP"){
        dataQQQ = dataQQQ.AKPP;
    }
    if(window.location.href == "http://127.0.0.1:5000/MKPP" || window.location.href.split("/").pop() == "MKPP"){
        dataQQQ = dataQQQ.MKPP;
    }

    let data = []; // новый пустой объект


    // скопируем все свойства user в него
    for (let key in dataQQQ) {
        data[key] = dataQQQ[key];
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    data = sortBrand(data)

    //data = sortDataCost(data, order.value)

    data = searchProduct(data,SearchInput.value)

    data.forEach(el => {
        card.classList.add('product__card')

        card.setAttribute("name", "cardProduct");

        img.src = el.img;
        img.classList.add('prodcard__img');
        title.innerHTML = el.title;
        title.classList.add('prodcard__title');
        info.innerHTML = el.info;
        info.classList.add('prodcard__info');
        cost.innerHTML = el.cost.substring(0, el.cost.length - 3) + " " + el.cost.substring(el.cost.length - 3) + " p.";
        cost.classList.add('prodcard__cost');
        button.innerHTML = 'Позвонить продавцу';
        button.name="buttonProduct";
        button.onclick = function () { alert('lalala') }

        button.classList.add('prodcard__button');

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(info);
        card.appendChild(cost);
        card.appendChild(button);

        
        carddiv.classList.add('carddiv');
        
        carddiv.appendChild(card);
        container.appendChild(carddiv.cloneNode(true));
    });
}

GetCards()

name__box.addEventListener('click', () => {
    if(bt.classList.contains('active')){
        bt.classList.remove('active')
    }else{
        bt.classList.add('active')
    }
})

brandselect.addEventListener('click', () => {
    GetCards()
})
// order.addEventListener('click', () => {
//     GetCards()
// })