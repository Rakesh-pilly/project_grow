// for open of wallet 

        let wallet = document.getElementById('nva_bar_icons_wallet');
        wallet.addEventListener('click',function(){
            window.location.href = 'wallet.html';
        })
        

        let invest = document.getElementById('nva_bar_invest');
        invest.addEventListener('click',function(){
            window.location.href = 'investment.html';
        })

        let home = document.getElementById('nav_bar_logo');
    home.addEventListener('click',function(){
        window.location.href = 'stocks.html';
    })


        

        let tcs = document.querySelector('.small_box');
        tcs.addEventListener('click',function(){
            window.location.href = 'innerStocks.html';
        })
        

        



// const popup = document.querySelector('.popup');
//   function showPopup() {
//     popup.classList.add('open');
//   }
//   function hidePopup() {
//     popup.classList.remove('open');
//   }

        function MutaulFunds(){
            window.location.href = 'dashboras.html';
            // alert('yes')

        }


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