function bmi()
        {
            var w=document.getElementById("weightinput").value;
            var h=document.getElementById("heightinput").value;
            var bmi=w/(h/100*h/100);
            var roundbmi=bmi.toFixed(2);
            document.getElementById("resultbmi").innerHTML="Your BMI is "+roundbmi;
            document.getElementById("resultbmi").style.border="1px solid black";
            // preventDefault();
            if(roundbmi<18.6)
            {
            document.getElementById("bmibtn1").style.color='white';
            document.getElementById("bmibtn2").style.color='black';
            document.getElementById("bmibtn3").style.color='black';
            document.getElementById("bmibtn4").style.color='black';
            document.getElementById("bmibtn1").style.backgroundColor='yellow';
            document.getElementById("resultbmi").style.color='white';
            document.getElementById("resultbmi").style.backgroundColor='yellow';
            document.getElementById("bmibtn2").style.backgroundColor='white';
            document.getElementById("bmibtn3").style.backgroundColor='white';
            document.getElementById("bmibtn4").style.backgroundColor='white';
            }
            else if(roundbmi>18.5 && roundbmi<25.1)
            {
            document.getElementById("bmibtn2").style.color='white';
            document.getElementById("bmibtn1").style.color='black';
            document.getElementById("bmibtn3").style.color='black';
            document.getElementById("bmibtn4").style.color='black';
            document.getElementById("bmibtn1").style.backgroundColor='white';
            document.getElementById("resultbmi").style.color='white';
            document.getElementById("resultbmi").style.backgroundColor='green';
            document.getElementById("bmibtn2").style.backgroundColor='green';
            document.getElementById("bmibtn3").style.backgroundColor='white';
            document.getElementById("bmibtn4").style.backgroundColor='white';
            }
            else if(roundbmi>25.2 && roundbmi<30)
            {
            document.getElementById("bmibtn3").style.color='white';
            document.getElementById("bmibtn1").style.color='black';
            document.getElementById("bmibtn2").style.color='black';
            document.getElementById("bmibtn4").style.color='black';
            document.getElementById("bmibtn1").style.backgroundColor='white';
            document.getElementById("bmibtn2").style.backgroundColor='white';
            document.getElementById("resultbmi").style.color='white';
            document.getElementById("resultbmi").style.backgroundColor='orange';
            document.getElementById("bmibtn3").style.backgroundColor='orange';
            document.getElementById("bmibtn4").style.backgroundColor='white';
            }
            else
            {
            document.getElementById("bmibtn4").style.color='white';
            document.getElementById("bmibtn1").style.color='black';
            document.getElementById("bmibtn2").style.color='black';
            document.getElementById("bmibtn3").style.color='black';
            document.getElementById("bmibtn1").style.backgroundColor='white';
            document.getElementById("bmibtn2").style.backgroundColor='white';
            document.getElementById("bmibtn3").style.backgroundColor='white';
            document.getElementById("resultbmi").style.color='white';
            document.getElementById("resultbmi").style.backgroundColor='red';
            document.getElementById("bmibtn4").style.backgroundColor='red';
            }
        }

        function first()
        {
          window.open("https://youtu.be/AErtEV69HT8","_self"); 
        }
        function second()
        {
          window.open("https://youtu.be/S_gIr7FfWi4","_self"); 
        }
        function third()
        {
          window.open("https://youtu.be/XbkFLvMDaZc","_self"); 
        }
        function fourth()
        {
          window.open("https://youtu.be/nSECUu4VFOc","_self"); 
        }

        function btn1()
        {
          window.open("https://www.facebook.com/profile.php?id=100080149751876","_self"); 
        }
        function btn2()
        {
          window.open("https://www.linkedin.com/in/total-fitness-184a3021b","_self"); 
        }
        function btn3()
        {
          window.open("https://www.instagram.com/totalfitness_2022?utm_medium=copy_link","_self"); 
        }
        function btn4()
        {
          window.open("https://twitter.com/TotalFi04695593?t=OuNKj9P-lBsEo3Lm90EjAw&s=08-TWITTER","_self"); 
        }

        function signupnow()
        {
          window.open("signup.html","_self");
        }

        // var x=localStorage.getItem("user");
        // alert(x);
        // alert(myuser);
        // import{person} from './signup.js';
        // alert(person);