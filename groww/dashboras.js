   function stocks(){
        window.location.href = 'stocks.html';
            
    }




let name = JSON.parse(localStorage.getItem('users'));




    

    let info = document.getElementById('nva_bar_icons_dp');
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


var nutshell = document.querySelector('.m-f-nutshell');

var img1 = document.querySelector('#nutshell-1-image')

var body = document.querySelector('body');

var MFimg = document.querySelector('#MF-img') 
let icon1 = document.querySelector('#mf-icon-1')
let icon2 = document.querySelector('#mf-icon-2')
let icon3 = document.querySelector('#mf-icon-3')
let icon4 = document.querySelector('#mf-icon-4')
let icon5 = document.querySelector('#mf-icon-5')
let icon6 = document.querySelector('#mf-icon-6')

let nticon1 = document.querySelector('#nutshell-1-image');
let nticon2 = document.querySelector('#nutshell-2-image');
let nticon3 = document.querySelector('#nutshell-3-image');
let nticon4 = document.querySelector('#nutshell-4-image');
let nticon5 = document.querySelector('#nutshell-5-image');

var SIPimg = document.querySelector('#SIPimg')

if(body.classList == "dark"){ 
    MFimg.src = "images/MutualFunds-drk.svg";
    SIPimg.src = "images/SIP-drk.svg";
    icon1.src =  "images/mf-icon-1-drk.svg";
    icon2.src = "images/mf-icon-2-drk.svg";
    icon3.src = "images/mf-icon-3-drk.svg";
    icon4.src = "images/mf-icon-4-drk.svg";
    icon5.src = "images/mf-icon-5-drk.svg";
    icon6.src = "images/mf-icon-6-drk.svg";

    nticon1.src = "images/mf-nutshell-1-drk.svg";
    nticon2.src = "images/mf-nutshell-2-drk.svg";
    nticon3.src = "images/mf-nutshell-3-drk.svg";
    nticon4.src = "images/mf-nutshell-4-drk.svg";
    nticon5.src = "images/mf-nutshell-5-drk.svg";

}

