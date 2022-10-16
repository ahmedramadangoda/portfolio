// right button in window
let btn = document.querySelector(".btn-up");
window.onscroll = function () {
    // scroll button right of page
    if (window.scrollY >= 300) {
        btn.style.cssText = "display: block; opacity: .7;"
    } else {
        btn.style.cssText = "display: block; right: -70px"
    }
};
// function of button up in window
btn.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};

// *************** start type effect write on landing h1 ********************//

let h1 = document.querySelector(".header-h1").getAttribute("data-text");

let i = 0;

window.onload = function () {
    
    let typeWriteH1 = setInterval ( function () {

        let h1Landing = document.querySelector(".header-h1").textContent += h1[i];
        
        i++;
        //  if i (عدد حروف الجمله) small than length - 1 stop interval 
        if (i > h1.length - 1) {
            clearInterval(typeWriteH1);
        }
    } , 200);
};

// *************** end type effect write on landing h1 *************************//


// start progress in skill section //
                    //  HTML progress   //
let circularProgressHtml = document.querySelector(".circular-progress-html"),
    progressValueHtml = document.querySelector(".progress-value-html");

let progressStartValueHtml = 0,    
    progressEndValueHtml = 98;    

let htmlProgress = setInterval(() => {
        
    progressStartValueHtml++;

    progressValueHtml.textContent = `${progressStartValueHtml}%`
    circularProgressHtml.style.background = `conic-gradient(#3eb9de ${progressStartValueHtml * 3.6}deg, #7a7a7a96 0deg)`

    if(progressStartValueHtml == progressEndValueHtml){
        clearInterval(htmlProgress);
    }

    }, 20);

                    //  CSS progress  //

let circularProgressCss = document.querySelector(".circular-progress-css"),
    progressValueCss = document.querySelector(".progress-value-css");

let progressStartValueCSS = 0,    
    progressEndValueCSS = 90;    

let cssProgress = setInterval(() => {
        
    progressStartValueCSS++;

    progressValueCss.textContent = `${progressStartValueCSS}%`
    circularProgressCss.style.background = `conic-gradient(#3eb9de ${progressStartValueCSS * 3.6}deg, #7a7a7a96 0deg)`

    if(progressStartValueCSS == progressEndValueCSS){
        clearInterval(cssProgress);
    }

    }, 20);

                            //  java-script progress   //

let circularProgressJs = document.querySelector(".circular-progress-js"),
    progressValueJs = document.querySelector(".progress-value-js");

let progressStartValueJs = 0,    
    progressEndValueJs = 75;    

let jsProgress = setInterval(() => {
        
    progressStartValueJs++;

    progressValueJs.textContent = `${progressStartValueJs}%`
    circularProgressJs.style.background = `conic-gradient(#3eb9de ${progressStartValueJs * 3.6}deg, #7a7a7a96 0deg)`

    if(progressStartValueJs == progressEndValueJs){
        clearInterval(jsProgress);
    }

    }, 20);

                            //  bootstrap progress  //

let circularProgressBootstrab = document.querySelector(".circular-progress-bootstrab"),
    progressValueBootstrab = document.querySelector(".progress-value-bootstrab");

let progressStartValueBootstrab = 0,    
    progressEndValueBootstrab = 95;    

let bootstrapProgress = setInterval(() => {
        
    progressStartValueBootstrab++;

    progressValueBootstrab.textContent = `${progressStartValueBootstrab}%`
    circularProgressBootstrab.style.background = `conic-gradient(#3eb9de ${progressStartValueBootstrab * 3.6}deg, #7a7a7a96 0deg)`

    if(progressStartValueBootstrab == progressEndValueBootstrab){
        clearInterval(bootstrapProgress);
    }

    }, 20);

                            //  Sass progress   //

let circularProgressSass = document.querySelector(".circular-progress-sass"),
    progressValueSass = document.querySelector(".progress-value-sass");

let progressStartValueSass = 0,    
    progressEndValueSass = 87;    

let sassProgress = setInterval(() => {
        
    progressStartValueSass++;

    progressValueSass.textContent = `${progressStartValueSass}%`
    circularProgressSass.style.background = `conic-gradient(#3eb9de ${progressStartValueSass * 3.6}deg, #7a7a7a96 0deg)`

    if(progressStartValueSass == progressEndValueSass){
        clearInterval(sassProgress);
    }

    }, 20);


// End progress in skill section //


// ************** start ul li projects ****************************************//
let liProject = document.querySelectorAll(".swicher-project li");
let imgsProjects = document.querySelectorAll(".big-box"); 

liProject.forEach( (li)=> {
    li.addEventListener("click", manageImg);
    li.addEventListener("click", removeActive);
});
        // remove active class from all li and add to the current element you clicked on it
function removeActive(){
    liProject.forEach((li) => {
        li.classList.remove("active-pro");
        this.classList.add("active-pro");
    })
};
// manage img
function manageImg() {
    imgsProjects.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.work).forEach((ele) => {
        ele.style.display = "block";
    })
};

// ************** End ul li projects ************************************//
