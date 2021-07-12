   
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
    
    

    let myChart = document.getElementById('myChart').getContext('2d');

    let lineChart = new Chart(myChart, {
        type:'line',
        data:{
            labels:[
                '06-MAY',
                '07-MAY',
                '10-MAY',
                '11-MAY',
                '12-MAY',
                '14-MAY',
                '17-MAY',
                '18-MAY',
                '19-MAY',
                '20-MAY',
                '21-MAY',
                '24-MAY',
                '25-MAY',
                '26-MAY',
                '27-MAY',
                '28-MAY',
                '31-MAY',
                '01-JUN',
                '02-JUN',
                '03-JUN',
                '04-JUN',
                '07-JUN',
                '08-JUN',
                '09-JUN',
                '10-JUN'
            ],

            datasets:[{
                label:"₹",
                data:[
                    3105.50,
                    3133.00,
                    3145.95,
                    3125.00,
                    3120.00,
                    3098.50,
                    3055.00,
                    3100.00,
                    3084.00,
                    3067.10,
                    3061.00,
                    3081.50,
                    3092.00,
                    3120.00,
                    3161.95,
                    3189.50,
                    3150.00,
                    3168.60,
                    3150.85,
                    3154.55,
                    3128.00,
                    3145.00,
                    3198.00,
                    3202.00,
                    3210.00
                ],
                fill: false,
                borderColor: 'rgb(38, 215, 171)',
                tension: 0.1
            }],
        },
        
        options: {
            scales: {
                xAxis:{
                    display:false
                },
                yAxis: {
                    display:false
                }
            },
            interaction: {
                intersect:false
            },
            plugins:{
                legend:false,
                tooltip:{
                    bodyColor: '#fff',
                }
            }            
        }
        
    });
// -----------------------End of Charts-------------------------

 let monis = localStorage.getItem('bal')
 monis = JSON.parse(monis)
 let walletBalance = monis[0].balance;

 let displayP = document.getElementById('walletBalanceDispM')

    let mehH = Number(monis[0].balance);
    var rounde = Math.round((mehH + Number.EPSILON) * 100) / 100;

     displayP.innerText = rounde;


 // -----------------To compare to share price x N of shares with balance available----------------------------

let shareInput = document.getElementById('share-value-inputBox'); // reference to the number of shares input box

shareInput.addEventListener('input', compare )

// references 


    var numB = shareInput.value;


function compare (){    // comparing the the total price with the available balance on the wallet.
   var price = Number(document.getElementById('tataPrice').innerText);
   var p1 = document.getElementById('bestPrice');
   var p2 = document.getElementById('amountLessErrorP');

   var inpBox = document.getElementById('share-value-inputBox')
   let tempVAL = shareInput.value;
   tempVAL = Number(tempVAL)
  

   let addBtn = document.getElementById('addBtn');
   let buyBtn = document.getElementById('buyBtn');

   let sharesInNumber = document.getElementById('ShareBought')
   sharesInNumber.innerHTML = shareInput.value;

   let value = (tempVAL * price);  // getting the total value.

   if(value > walletBalance ){
      p1.style.visibility = "hidden";    // swapping the p tag to alert when the balance is low.
      p2.style.visibility = "visible";

      buyBtn.style.visibility = "hidden"; // swapping the buy button with add money button when low balance.
      addBtn.style.visibility = "visible";

      inpBox.style.backgroundColor = "rgb(255,245,224)"; // swapping the background of the input box
      inpBox.style.color = "rgb(255,182,28)";            //  - green to red;
   }
   else{
       p1.style.visibility = "visible";  // swapping back to the initial when the balance is not low.
       p2.style.visibility = "hidden";

       inpBox.style.backgroundColor = "rgba(38, 215, 171, 0.24)";
       inpBox.style.color = "rgb(38,215,171)";

        buyBtn.style.visibility = "visible";
       addBtn.style.visibility = "hidden";

   }

}
//-------------------------end of compare function------------------------------------


//-------------------------------- Add money button-------------------------------

function addMoney() {
    window.location.href = "wallet.html";
}
//------------------------Function to buy the stocks------------------------------------
function buyTata(){

    let buyDiv = document.getElementById('visible');  // reference of the initial div displayed ( buy/ N of shares input box).

    let waitingDiv = document.getElementById('placingOrderIcon'); // referencer to the waiting icons.
    
    let buySucc = document.getElementById('buySuccess'); // reference to the "buy successful" div.
    

   if( shareInput.value != ""){             // making sure the input fields are not empty.

        let num = Number(shareInput.value);                // getting the value from the input (N of shares).
        let price = Number(document.getElementById('tataPrice').innerText);    // getting the price of the stock.
        let value = (num * price);                                           // N * price to get the total value.
      
        


    let bal = JSON.parse(localStorage.bal)           

    if(bal[0].shares == null){                // updating the No. of shares purchased.
        bal[0].shares = num;
    }

    else{
        bal[0].shares = Number(bal[0].shares);
        bal[0].shares += num;
    }

    bal[0].balance -= value;               // subtracting the value from the wallet.

  bal[0].balance = (Math.round(bal[0].balance * 100) / 100).toFixed(2);    // fixing just 2 decimal points

    if(bal[0].balance < 1){ bal[0].balance = 0 }



    localStorage.setItem('bal', JSON.stringify(bal));   // stringifying the json file back.


 
    buyDiv.innerText = null;                     // clearing the innerHTML of the initial div.
    buyDiv.style.visibility = "hidden";

    waitingDiv.style.visibility = "visible"        // making "placing order" page visible.

    setTimeout(function () {                       // stopping the placing order page after 2 sec and-
        waitingDiv.style.visibility = "hidden";    //            - displaying the "buy success" page.
        buySucc.style.visibility = 'visible';
    }, 2000)
}

}

//--------------------------------------------End of Buying Function > Pheww!!!!!-------------


// function to take back to the buying card once done.

function done() {
    let buyDiv = document.getElementById('visible');       // reference to the initial buying card.
    let buySucc = document.getElementById('buySuccess');  // reference to the buy success card.

    buySucc.style.visibility = "hidden";                // swapping the visibility of the both.
    buyDiv.style.visibility = "visible";

    location.reload();                               // reloading the page to get back the innerHTML.

}
// -----------------read more (about company section) ----------------

function readMore(){
    let moreTxt = document.getElementById('readMoreABC');
    let readmore = document.getElementById('SpanGreen')



    if(moreTxt.style.display === 'none'){
        moreTxt.style.display = 'inline';
         readmore.innerHTML = '....Read less'
    }
    else {
        moreTxt.style.display = 'none';
        readmore.innerHTML = '....Read more';
    }
}
