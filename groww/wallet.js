 
    
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


    


    let wallet_tab = document.getElementById('nva_bar_icons_wallet');
    wallet_tab.addEventListener('click',function(){
        window.location.href = 'wallet.html';
    })

    let invest = document.getElementById('nva_bar_invest');
        invest.addEventListener('click',function(){
            window.location.href = 'investment.html';
        })

    var bal = [
        {
            balance:20
        }
    ]

    var amount = localStorage.getItem('bal');

        // if (amount == "" ) {
        //     localStorage.setItem('bal', JSON.stringify(bal))
        // }

        var walletVal = document.getElementById('wallet-value');

        amount = JSON.parse(amount);

        // localStorage.setItem('bal', JSON.stringify(bal));
        
        var rounded = Math.round((amount[0].balance  + Number.EPSILON) * 100) / 100;
        
      //  amount.forEach(element => {
            walletVal.innerText =  rounded //element.balance;
       // });

        

        let wallet = document.getElementById("wallet-value-inputBox");

         var cb = document.getElementById('cbWallet');

        var ba = document.getElementById('baWallet');
       
        cb.innerHTML = rounded;
        ba.innerHTML = rounded;

        

// -------------------------------------------------------------------------

   
    function plusHundred(){
        
        let num = Number(wallet.value);
        num +=100;

        wallet.value = num;
    }

    function plusFiveHundred() {
        let num = Number(wallet.value);
        num+= 500;

        wallet.value = num;
    }

    var upi = {
        id:"masaischool"
    }

    var upiId = document.getElementById('wallet-upi-inp');

 function deposite(){
     var cb = document.getElementById('cbWallet');

     var ba = document.getElementById('baWallet');

     let p = document.getElementById('nonVisP')
     p.style.visibility = "visible"

    if(upiId.value == upi.id ){
        let temp = Number(wallet.value);

        let bal = JSON.parse(localStorage.bal)

        
       
        bal.forEach(element => {
            element.balance = Number(element.balance)
             element.balance += Number(wallet.value);
             
            //  element.balance = 0;
            var rounde = Math.round((element.balance + Number.EPSILON) * 100) / 100;

             walletVal.innerText =  rounde//element.balance.toFixed(2);
             cb.innerHTML =  rounde//element.balance.toFixed(2);
             ba.innerHTML =  rounde//element.balance.toFixed(2);
        });

        localStorage.setItem('bal', JSON.stringify(bal));
        
        wallet.value = "";
        upiId.value = "";
    }
}