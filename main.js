
document.getElementById('output').style.visibility='hidden';
document.querySelector('.form-select').addEventListener('change',view);

function view(e){
    document.getElementById('output').style.visibility='visible';
    var lbs=document.getElementById('lbsInput').value;
    var mSys=e.target.value;
    if(mSys==1){
        document.querySelector('.fst').innerHTML= 'Kilo Gram'; 
        document.querySelector('.snd').innerHTML= 'Pound'; 
        document.querySelector('.trd').innerHTML= 'Ounce'; 
        document.getElementById('fstOutput').innerHTML= lbs/1000;
        document.getElementById('sndOutput').innerHTML= lbs*0.0022046;
        document.getElementById('trdOutput').innerHTML= lbs*0.035274;
        
    }
    else if(mSys ==2){
        document.querySelector('.fst').innerHTML= 'Gram'; 
        document.querySelector('.snd').innerHTML= 'Pound'; 
        document.querySelector('.trd').innerHTML= 'Ounce'; 
        document.getElementById('fstOutput').innerHTML= lbs*1000;
        document.getElementById('sndOutput').innerHTML= lbs*2.2046;
        document.getElementById('trdOutput').innerHTML= lbs*35.274;
    }
    else if(mSys ==3){
        document.querySelector('.fst').innerHTML= 'Gram'; 
        document.querySelector('.snd').innerHTML= 'Kilo Gram'; 
        document.querySelector('.trd').innerHTML= 'Ounce'; 
        document.getElementById('fstOutput').innerHTML= lbs/0.0022046;
        document.getElementById('sndOutput').innerHTML= lbs/2.2046;
        document.getElementById('trdOutput').innerHTML= lbs*16;
    }
    else{
        document.querySelector('.fst').innerHTML= 'Gram'; 
        document.querySelector('.snd').innerHTML= 'Kilo Gram'; 
        document.querySelector('.trd').innerHTML= 'Pound'; 
        document.getElementById('fstOutput').innerHTML= lbs/0.035274;
        document.getElementById('sndOutput').innerHTML= lbs/35.274;
        document.getElementById('trdOutput').innerHTML= lbs*0.0625;
    }


}
  
