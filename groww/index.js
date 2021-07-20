  function display(a){
       if(a == 'm'){
           var img = document.getElementById('product_imgae');
            img.setAttribute('src', 'https://assets-netstorage.groww.in/website-assets/prod/1.6.4/build/client/images/mf.6c2cde91.png');
            var h1 = document.getElementById('info_head');
                h1.innerText = '0%'
            var h2 = document.getElementById('info_head2');
                h2.innerText = 'commission'
            var p = document.getElementById('info_para');
                p.innerText = 'Select from 5000+ direct mutal funds and get higher return than regular funds.'
            var bar = document.getElementById('bar2');
                bar.setAttribute('class','bar')
            var bars = document.getElementById('bar1');
                bars.removeAttribute('class')
            var barg = document.getElementById('bar3')
                barg.removeAttribute('class');
                var baru = document.getElementById('bar4')
                baru.removeAttribute('class');
                var barf = document.getElementById('bar5')
                barf.removeAttribute('class');


       }
       if(a == 's'){
            
        var flex = document.querySelectorAll('flex_');
            flex.style
    
            
           var img = document.getElementById('product_imgae');
            img.setAttribute('src', 'https://assets-netstorage.groww.in/website-assets/prod/1.6.4/build/client/images/stocks.74948e96.png');
            var h1 = document.getElementById('info_head');
                h1.innerText = 'Zero'
            var h2 = document.getElementById('info_head2');
                h2.innerText = 'account charges'
            var p = document.getElementById('info_para');
                p.innerText = "You don't have to pay single rupee for opening a stocks acount or account maintenace.";
        
                var barm = document.getElementById('bar2');
                barm.removeAttribute('class');
            var bars = document.getElementById('bar1');
            bars.setAttribute('class','bar')
            var barg = document.getElementById('bar3')
                barg.removeAttribute('class');
                var baru = document.getElementById('bar4')
                baru.removeAttribute('class');
                var barf = document.getElementById('bar5')
                barf.removeAttribute('class');

       }
       
       if(a == 'g'){
           var img = document.getElementById('product_imgae');
            img.setAttribute('src', 'https://assets-netstorage.groww.in/website-assets/prod/1.6.4/build/client/images/gold.4b4ed1a9.png');
            var h1 = document.getElementById('info_head');
                h1.innerText = '99.9%'
            var h2 = document.getElementById('info_head2');
                h2.innerText = 'purity'
            var p = document.getElementById('info_para');
                p.innerText = "Invest in digital gold as low as ₹10 without any extra commission or making charges.";
        

                var barm = document.getElementById('bar2');
                barm.removeAttribute('class');
            var bars = document.getElementById('bar1');
            bars.removeAttribute('class');

            var barg = document.getElementById('bar3')
            barg.setAttribute('class','bar')

                var baru = document.getElementById('bar4')
                baru.removeAttribute('class');
                var barf = document.getElementById('bar5')
                barf.removeAttribute('class');

       }
      
       if(a == 'u'){
           var img = document.getElementById('product_imgae');
            img.setAttribute('src', 'https://assets-netstorage.groww.in/website-assets/prod/1.6.4/build/client/images/us.fc57ceac.png');
            var h1 = document.getElementById('info_head');
                h1.innerText = 'Free'
            var h2 = document.getElementById('info_head2');
                h2.innerText = 'account opening'
            var p = document.getElementById('info_para');
                p.innerText = "Invest in Apple Google Netflix and many more US companies that you live without any brokerage free.";
        
                var barm = document.getElementById('bar2');
                barm.removeAttribute('class');
            var bars = document.getElementById('bar1');
            bars.removeAttribute('class');

            var barg = document.getElementById('bar3')
            barg.removeAttribute('class');

                var baru = document.getElementById('bar4')
                baru.setAttribute('class','bar')
                var barf = document.getElementById('bar5')
                barf.removeAttribute('class');


       }
       if(a == 'f'){
           var img = document.getElementById('product_imgae');
            img.setAttribute('src', 'https://assets-netstorage.groww.in/website-assets/prod/1.6.4/build/client/images/fd.16c65ccc.png');
            var h1 = document.getElementById('info_head');
                h1.innerText = '6.7%'
            var h2 = document.getElementById('info_head2');
                h2.innerText = 'interest rate'
            var p = document.getElementById('info_para');
                p.innerText = "Open fixed deposits in any bank with higher interest rates without opening a bank account.";
        
                var barm = document.getElementById('bar2');
                barm.removeAttribute('class');
            var bars = document.getElementById('bar1');
            bars.removeAttribute('class');

            var barg = document.getElementById('bar3')
            barg.removeAttribute('class');

                var baru = document.getElementById('bar4')
                baru.removeAttribute('class');
                var barf = document.getElementById('bar5')
                barf.setAttribute('class','bar');
       }
    }


    

    let box = document.getElementById('btn');
        box.addEventListener('click',Login_box);


        function Login_box(){
            let disp = document.getElementById('login_box');
             disp.style.display = 'flex';
         
            
             
           
            

        }


  

    let log_box = document.getElementById('login_btn');
    log_box.addEventListener('click',function(){
            let dis = document.getElementById('login_box');


            dis.style.display = 'none';
           
         

        });


       
            

        let sig_cont = document.getElementById('sign_email');
         sig_cont.addEventListener('click',function(){

            

                 var user_email = document.getElementById('user_email').value;
                 if(user_email != "") {

                    let first = document.getElementById('log_box_email');
                first.style.display = 'none';

            let second = document.getElementById('log_box_pass');
                second.style.display = 'block';

                document.getElementById('user_email_dub').value = user_email;




                 }else{
                     alert('Enter email id')
                 }
        
         })


         let sumbit = document.getElementById('log_box_button_submit');

         

            sumbit.addEventListener('click',function(){
                  var users = [
            {
                email: 'rakesh@gmail.com',
                password: '123'
            },
            {
                email: 'bharadwaj@gmail.com',
                password: '123'
            },
            {
                email : 'kishan@gmail.com',
                password: '123'
            }
         ];

                var user_email = document.getElementById('user_email').value;
                let pass = document.getElementById('user_password').value;

                

                if(pass != ""){
                    window.location.href="./stocks.html";

                 
                    for(let i = 0; i<users.length; i++){
                    
                        let user = {
                        email : user_email,
                        password : pass,
                    }

                    let users = [];
                   
                        
                    
                    users.push(user);
                    localStorage.setItem('users',JSON.stringify(users));

                   
                     
                
                        
                    
                }




               

               
                    

                } else {
                    alert('Enter password')
                }

               
            })


            let darkThem = false;

            localStorage.setItem('dark', JSON.stringify(darkThem));
