function rectstyles(bodyCon, bgBlack, bgWhite, txtWhite) {
    let bodyCon = document.querySelectorAll('.body-con');
    bodyCon.setAttribute("style", "margin: 0 padding: 0 box-shadow: none");


    bgBlack = document.querySelectorAll(".bg-black");
    bgBlack.setAttribute("style", "background: #000");

    bgWhite = document.querySelectorAll(".bg-white");
    bgWhite.setAttribute("style", "background: #fff");


    bodytextWhite = document.querySelectorAll(".txt-white");
}


module.exports.rectstyles = rectstyles;