let usd = document.querySelector("#usd");
let usdBtn = document.querySelector("#usd button");
let btc = document.querySelector("#btc");
let btcBtn = document.querySelector("#btc button");
let eth = document.querySelector("#eth");
let ethBtn = document.querySelector("#eth button")

usd.addEventListener("click", ()=>{
    if (usdBtn.childElementCount === 0){
        usdBtn.appendChild(document.createElement("i")).className = 'fa-solid fa-check';
    }else{
        const elm = document.querySelector("#usd button i");
        elm.remove();
    }
});

btc.addEventListener("click", ()=>{
    if (btcBtn.childElementCount === 0){
        btcBtn.appendChild(document.createElement("i")).className = 'fa-solid fa-check';
    }else{
        const elm = document.querySelector("#btc button i");
        elm.remove();
    }
});

eth.addEventListener("click", ()=>{
    if (ethBtn.childElementCount === 0){
        ethBtn.appendChild(document.createElement("i")).className = 'fa-solid fa-check';
    }else{
        const elm = document.querySelector("#eth button i");
        elm.remove();
    }
});

let buyerData = {
    labels : ["May 2021","Jun 2021","Jul 2021","Aug 2021","Sep 2021","Oct 2021", "Nov 2021", "Dec 2021"],
    datasets : [
        {
            fillColor : "rgba(172,194,132,0.4)",
            strokeColor : "#805AD5",
            pointColor : "#fff",
            pointStrokeColor : "#61E224",
            data : [45000, 55000, 46000, 66000, 58500, 65000, 57000, 64000, 65800, 72000, 58000]
        }
    ]
};

let buyers = document.getElementById('buyers').getContext('2d');
new Chart(buyers).Line(buyerData);
