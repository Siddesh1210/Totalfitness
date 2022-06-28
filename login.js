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

function create() {
  let name = document.getElementById("exampleInputName").value;
  let email = document.getElementById("exampleInputEmail1").value;
  let pwd = document.getElementById("pwd").value;
  if (name != "" && email != "" && pwd != "") {
    Swal.fire({
      icon: 'success',
      title: name,
      imageUrl: 'https://www.itl.cat/pngfile/big/36-366531_collection-of-7-mickey-mouse-cartoons-hd-mickey.png',
      text: 'Logged in successfully',
      imageHeight: 100,
      imageAlt: 'A tall image'
    }).then(function (isConfirm) {
      if (isConfirm) {
        location.href = "index2.html";
      }
    })
  }
  else if (name == "" || email == "" || pwd == "") {
    Swal.fire({
      icon: 'error',
      title: name,
      imageUrl: 'https://www.pngitem.com/pimgs/m/208-2086493_mickey-mouse-clip-art-sad-face-cartoon-characters.png',
      text: 'Please fill in proper detail',
      imageHeight: 100,
      imageAlt: 'A tall image'
    }).then(function (isConfirm) {
      if (isConfirm) {
        location.href = "login.html";
      }
    })
  }

}