function btn1() {
    window.open("https://www.facebook.com/profile.php?id=100080149751876", "_self");
}
function btn2() {
    window.open("https://www.linkedin.com/in/total-fitness-184a3021b", "_self");
}
function btn3() {
    window.open("https://www.instagram.com/totalfitness_2022?utm_medium=copy_link", "_self");
}
function btn4() {
    window.open("https://twitter.com/TotalFi04695593?t=OuNKj9P-lBsEo3Lm90EjAw&s=08-TWITTER", "_self");
}

function service()
{
    // var hay=document.querySelector('.defaultCheck1:checked').value;
    // alert(hay);
    var disease1=document.getElementById("dis1");
    var disease2=document.getElementById("dis2");
    var disease3=document.getElementById("dis3");
    var disease4=document.getElementById("dis4");
    var disease5=document.getElementById("dis5");
    var disease6=document.getElementById("dis6");
    var strength1=document.getElementById("str1");
    var strength2=document.getElementById("str2");
    var strength3=document.getElementById("str3");

    if(disease1.checked==true)
    {
        location.href = "diabetesplan.html";
    }
    else if(disease2.checked==true)
    {
        location.href = "chloestrolplan.html";
    }
    else if(disease3.checked==true)
    {
        location.href = "heartdisplan.html";
    }
    else if(disease4.checked==true)
    {
        location.href = "bldprsplan.html";
    }
    else if(disease5.checked==true && strength1.checked==true)
    {
        location.href = "weightgain.html";
    }
    else if(disease5.checked==true && strength2.checked==true)
    {
        location.href = "weightloss.html";
    }
    else if(disease5.checked==true && strength3.checked==true)
    {
        location.href = "normalfitness.html";
    }
    else if(disease6.checked==true && strength1.checked==true)
    {
        location.href = "weightgain.html";
    }
    else if(disease6.checked==true && strength2.checked==true)
    {
        location.href = "weightloss.html";
    }
    else if(disease6.checked==true && strength3.checked==true)
    {
        location.href = "normalfitness.html";
    }

}