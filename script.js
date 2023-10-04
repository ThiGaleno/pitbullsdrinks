let i = 0;
// let A = 0;
    let tag = document.getElementById("text-writer-animation");
    let html = document.getElementById("text-writer-animation").innerHTML;
    let attr = tag.setAttribute("data", html);
    let txt = tag.getAttribute("data");
    let speed = 30;

    function typeWriter() {
      if (i <= txt.length) {
        document.getElementById("text-writer-animation").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

typeWriter();


// function deltxt() {
//      if (A <= txt.length) {
    //      document.getElementById("text").innerHTML = txt.slice(0, -A);
    //      A++;
    //      setTimeout(deltxt, 50);
    //    }
    // }
    // let backward = speed * txt.length + 1000   ;
    // // console.log(backward);
    // setTimeout( function () {
    //  deltxt();
    // },backward);