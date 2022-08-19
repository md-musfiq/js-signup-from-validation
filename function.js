const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(){
    const emailvalue = document.getElementById('email')
    const eValue = emailvalue.value;
    const passValue = document.getElementById('password')
    const pValue = passValue.value;
    
    if(eValue == 'amar' && pValue == 123456){
        console.log('Valid user')
    }
    else{
        console.log('Invalid User')
    }

} )