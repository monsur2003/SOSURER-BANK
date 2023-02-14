document.getElementById('login-btn').addEventListener('click',function(){
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passWordField = document.getElementById('password');
    const password = passWordField.value;
    
    if(email==='monsur@gmail.com'&& password==='monsur'){
        location.href='bank.html'
    }else{
        alert('Bank dakati korte aschis password chara')
    }
})

