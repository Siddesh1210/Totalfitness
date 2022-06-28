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

// TRy
//  let person = document.getElementById("exampleInputName").value;
// localStorage.setItem("user",person);
// window.myuser=document.getElementById("exampleInputName").value;
// alert(person);
// export{person};






// End

function create() {
    let name = document.getElementById("exampleInputName").value;
    let pwd = document.getElementById("pwd").value;
    let pwd2 = document.getElementById("pwd2").value;
    let email = document.getElementById("exampleInputEmail1").value;
    if (pwd == pwd2 && name != "" && email != "") {
        Swal.fire({
            icon: 'success',
            title: name,
            imageUrl: 'https://www.itl.cat/pngfile/big/36-366531_collection-of-7-mickey-mouse-cartoons-hd-mickey.png',
            text: 'Account created successfully',
            imageHeight: 100,
            imageAlt: 'A tall image'
          }).then(function (isConfirm) {
            if (isConfirm) {
              location.href = "index2.html";
            }
          })
        // if (return!=true){

        // location.href="index.html";}
    }
    else if (name == "" || email == "" || pwd == "" || pwd2 == "") {
        Swal.fire({
            icon: 'error',
            title: name,
            imageUrl: 'https://www.pngitem.com/pimgs/m/208-2086493_mickey-mouse-clip-art-sad-face-cartoon-characters.png',
            text: 'Please fill in all detail',
            imageHeight: 100,
            imageAlt: 'A tall image'
          })
        //   .then(function (isConfirm) {
        //     if (isConfirm) {
        //       location.href = "signup.html";
        //     }
        //   })
    }
    else if (pwd != pwd2) {
        Swal.fire({
            icon: 'error',
            title: name,
            imageUrl: 'https://www.pngitem.com/pimgs/m/208-2086493_mickey-mouse-clip-art-sad-face-cartoon-characters.png',
            text: 'Please enter password correctly',
            imageHeight: 100,
            imageAlt: 'A tall image'
          })
        //   .then(function (isConfirm) {
        //     if (isConfirm) {
        //       location.href = "signup.html";
        //     }
        //   })
    }
}