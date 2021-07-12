    
var users = [
{
      name : 'Pilly Rakesh',
      email: 'rakesh@gmail.com',
    imgae: "images\\dp.JPG",
    
},
{
     name: 'Kishan Kumar',
     email: 'kishan@gmail.com',
     imgae: "images\\kishan.jpg",
},

{
    name: 'Bharadwaj S',
    email: 'bharadwaj@gmail.com',
    imgae: 'images\\bharadwaj.jpg',
}

];


let name = JSON.parse(localStorage.getItem('users'));
for(let  i = 0; i<users.length; i++){

    if(users[i].email == name[0].email){
        document.getElementById('user_name').innerText = users[i].name;
        document.getElementById('user_email').innerText = users[i].email;
        let dp  = document.getElementById('user_image');
            dp.setAttribute('src',users[i].imgae)

        document.getElementById('users_dp').src = users[i].imgae;

       
    }
}



     
    

    let info = document.getElementById('nva_bar_icons_dp') //this is 
        info.addEventListener('click',function(){
            let div = document.getElementById('info');
            

            if(div.style.display == 'none'){
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }

        });

        let div_info = document.getElementById('info');
        div_info.addEventListener('mouseleave',function(){
            div_info.style.display = 'none';
        })



     


function dark(){
    
   let dark = document.getElementById('dark_mode');
    
        document.body.classList.toggle('darkmode');

        if(document.body.classList.contains('darkmode')){

            let image =  document.getElementById('main_logo');
                
            image.setAttribute('src', 'https://assets-netstorage.groww.in/website-assets/prod/1.6.6/build/client/images/logo-light-groww.1815ad63.svg')
            

        } else{
            let image =  document.getElementById('main_logo');
                
            image.setAttribute('src', 'https://assets-netstorage.groww.in/website-assets/prod/1.6.5/build/client/images/logo-dark-groww.83f43714.svg');
        }

        

}


let logout = document.getElementById('logout');
    logout.addEventListener('click',function(){
        window.location.href = 'index.html';
    });


    nav_bar_logo


    let explor = document.getElementById('nva_bar_explore');
    explor.addEventListener('click',function(){
        window.location.href = 'stocks.html';
    })

    let home = document.getElementById('nav_bar_logo');
    home.addEventListener('click',function(){
        window.location.href = 'stocks.html';
    })


    


    let wallet = document.getElementById('nva_bar_icons_wallet');
    wallet.addEventListener('click',function(){
        window.location.href = 'wallet.html';
    })

    let invest = document.getElementById('nva_bar_invest');
        invest.addEventListener('click',function(){
            window.location.href = 'investment.html';
        })



    var price = 3273.80;

    let bal = localStorage.getItem('bal');
    bal = JSON.parse(bal);

    var p = document.getElementById('holdingsP');

    var p2 = document.getElementById('investedSP');

    var p3 = document.getElementById('returnsSP');
    

    var num = bal[0].shares;
    
    var Balance = bal[0].balance;

let total =  ((price+57.9) * num);

    p.innerText += total.toFixed(2);

    let investedVal = price*num;

    p2.innerText += investedVal.toFixed(2);

    p3.innerText += 57.9*num.toFixed(2);


//-------------reflect the wallet balance---------------

let footerBal = document.getElementById('pointerFooterBalance');

Balance = Number(Balance);

    
    var rounde = Math.round((Balance + Number.EPSILON) * 100) / 100;

footerBal.innerHTML = rounde;

let clickDiv = document.querySelector(".holdings");

let sellWindow = document.querySelector('.sellWindow');
let visibleDiv = document.getElementById('sellCard');


clickDiv.addEventListener('click', function(){
   sellWindow.style.visibility = "hidden";
   visibleDiv.style.visibility = 'visible';

})

    // display the wallet balance (MINI)-------------------------


    let walletDisp = document.getElementById('walletBalanceDispM')
    let sharesNum = document.getElementById('NsharesSP');

    walletDisp.innerHTML = rounde;
    sharesNum.innerHTML = num;

//---------------------- Changing the input box color-----------------

let inpB = document.getElementById('share-value-inputBox');

var sharesInNumber = inpB.value;

inpB.addEventListener('input', function(){

    var p1 = document.getElementById('bestPrice');
    var p2 = document.getElementById('amountLessErrorP');

    var sellButton = document.getElementById('sellBtn');

    let temp2 = Number(inpB.value);

    let sharesInNumber = document.getElementById('ShareBought')
    sharesInNumber.innerHTML = inpB.value;

    if(temp2 > num){
        inpB.style.backgroundColor = "rgb(255,245,224)"; // swapping the background of the input box
        inpB.style.color = "rgb(255,182,28)";
        sellButton.style.backgroundColor = "rgb(255,245,224)"
        sellButton.style.color = "black"

         p1.style.visibility = "hidden";    // swapping the p tag to alert when the balance is low.
        p2.style.visibility = "visible";
    }

    else{
        inpB.style.background = "rgba(38, 215, 171, 0.24)";
        inpB.style.color = 'rgb(38,215,171)';

        p1.style.visibility = "visible";  // swapping back to the initial when the balance is not low.
        p2.style.visibility = "hidden";

         sellButton.style.backgroundColor = "rgb(38,215,171)"
        sellButton.style.color = "#fff"

    }
    
})

//---------SELL FUNCTION---------------------------

function sellTata(){
    let inpNum = Number(inpB.value)
    if(num >= inpNum ){
        bal[0].shares = Number(bal[0].shares);
       bal[0].shares -= inpNum;

       bal[0].balance = Number(bal[0].balance);
       bal[0].balance  = (inpNum *  3273.80);
       

        //   bal[0].balance = 0;


       localStorage.setItem('bal', JSON.stringify(bal));

       // ----- placing the order div----------------
 
           visibleDiv.innerHTML = null;
           visibleDiv.style.visibility = 'hidden';


        

        let placingIcon = document.getElementById('placingOrderIcon');
        let buySuccess = document.getElementById('buySuccess');

        placingIcon.style.visibility = 'visible';

         setTimeout(function(){
             placingIcon.style.visibility = 'hidden';

             buySuccess.style.visibility = "visible";

         }, 2000)

  

    }
}


function done(){
    window.location.reload();
}
