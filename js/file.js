let menu = document.querySelector(".menu")
let spans = document.querySelectorAll(".menu span")
let back = document.querySelector(".list") //back of list
let cols = document.querySelectorAll(".col")
menu.addEventListener("click",function(){
    if(back.style.opacity === '0'){
        spans.forEach(element => { 
            element.style.backgroundColor = 'red'
            if(element.style.top !='50%'){
                element.style.top = '50%'
            }
        });
        spans[0].style.transform = `rotate(${45}deg)`
        spans[1].style.opacity = '0'
        spans[2].style.transform = `rotate(${-45}deg)`
        back.style.opacity='1'
        back.style.visibility = 'visible'
        // back.style.display = 'block'
        // cols.forEach(element => {
        //     element.style.zIndex='-500'
        // });
        back.onclick = function(){
            back.style.opacity='0'
            back.style.backgroundColor = 'rgba(0, 0, 0, 0.877)'
            spans[0].style.top = '0'
            spans[0].style.transform = `rotate(${0}deg)`
            spans[1].style.opacity='1';
            spans[2].style.transform = `rotate(${0}deg)`
            spans[2].style.top = 'auto'
            spans[2].style.bottom = '0'
            spans.forEach(element => {
                element.style.backgroundColor = 'black'  
            });
            // cols.forEach(element => {
            //     element.style.zIndex='555'
            // });
            // back.style.display = 'none'
            back.style.visibility = 'hidden'
        }
    }
    else{
        back.style.opacity='0'
        back.style.visibility = 'hidden'
        back.style.backgroundColor = 'rgba(0, 0, 0, 0.877)'
        // back.style.display = 'none'
        spans[0].style.top = '0'
        spans[0].style.transform = `rotate(${0}deg)`
        spans[1].style.opacity='1';
        spans[2].style.transform = `rotate(${0}deg)`
        spans[2].style.top = 'auto'
        spans[2].style.bottom = '0'
        spans.forEach(element => {
            element.style.backgroundColor = 'black'
            
        });
        // cols.forEach(element => {
        //     element.style.zIndex='0'
        // });
    }   
})
// ------------------buger-icon animation----------------
let header = document.querySelector("header")
window.addEventListener("scroll",function(){
    if(this.pageYOffset >= 400){
        header.style.backgroundColor = '#fff'
    }
    else{
        header.style.backgroundColor = 'transparent'
    }
})
// --------------onscroll change navbar background-color----------------
let lis = document.querySelectorAll(".list ul li a")
lis.forEach(el=>{
    el.onclick = function(){
        lis.forEach(el=>{
            el.classList.remove("active")
        })
        el.classList.add("active")
    }
})

//-----------------------------------
let j = 0
let devloper_h1 = document.querySelector(".developer")
let sentence_2 = "A developer"
let interval_2 = setInterval(function(){
    devloper_h1.textContent += sentence_2[j]
    j+=1
    if(j === sentence_2.length+1){
        j=0
        devloper_h1.textContent =""
    }
},300)
// ------------------show h1 animated----------------
let p_about = document.getElementsByName("topic_head")

p_about.forEach(el=>{
    el.style.marginLeft = `${(window.innerWidth - el.clientWidth)/2}px`
    el.style.marginRight = `${(window.innerWidth - el.clientWidth)/2}px`
})
window.onresize = function(){
    p_about.forEach(el=>{
        el.style.marginLeft = `${(window.innerWidth - el.clientWidth)/2}px`
        el.style.marginRight = `${(window.innerWidth - el.clientWidth)/2}px`
    })
}
// ------------------center topic_head----------------
const Arr_web = ["https://drive.google.com/uc?id=1eeZ4xLig-sHX09GnrQk98GN9IU5iZT_W","https://drive.google.com/uc?id=13BKgfH5UnKREVbt-VpwurvVIkLhWDa6c","https://drive.google.com/uc?id=1mXF9LmBIRyv3GvzLpIh-Z9SQSXFVewsY"]
const Arr_design = ["https://drive.google.com/uc?id=1B7tSo21yoEly97gm0WcPbsaLJ00S-Qz2","https://drive.google.com/uc?id=1K2aCX_qvkJePH0roylW7_mOCsnKmS5VZ","https://drive.google.com/uc?id=1QHqxXxj3mNvnAboow_vi95DHT-I50N8V","https://drive.google.com/uc?id=1y4ufMaSgEdHnUUGkhH1RyJEAwXUNEpA1","https://drive.google.com/uc?id=1qfD41hZW6YXt2ZZSC98iFACb9YNcORD_","https://drive.google.com/uc?id=1pHZB8XuJfnnKuHYRl3rePHu8_xXUUTXs","https://drive.google.com/uc?id=1b053fhUsjERTIlIoqwJkRHsXCyUe6QZg","https://drive.google.com/uc?id=1yn09sOPqiDQkSdy9su-a_4QHYtCDxkii","https://drive.google.com/uc?id=1FAAsFjny58ON56v8m6tFGkmK0KoVIJb3","https://drive.google.com/uc?id=1DQc8FpI6YLVndnTFRNF22kctkcbSV9yr","https://drive.google.com/uc?id=1uVvaVYRtm34qwT9I9MySQ2Tv24Zj8KFi","https://drive.google.com/uc?id=1DAX00Hn258lrzCS7_xAERztBbUVzNgfu"]
let web = document.querySelector(".portfolio .col-web")
let soft = document.querySelector(".portfolio .col-software")
let design = document.querySelector(".portfolio .col-design")
function display_img(Arr,domain){
    for (let x = 0 ; x<= Arr.length-1;x++){
        // creating div contains img and info_box
        let img_box = document.createElement("div")
        img_box.classList = 'img-1'
        domain.appendChild(img_box)
        // creating img and insert it inside img_box
        let img = document.createElement("img")
        img.src=Arr[x]
        img_box.appendChild(img)
        // creating div info and insert info_box inside img_box
        let info_box = document.createElement("div")
        info_box.classList='info'
        img_box.appendChild(info_box)
        // creating a_tag and insert it inside info box
        let a_tag = document.createElement("a")
        a_tag.textContent = 'View Work'
        // a_tag.href = "#" changable
        a_tag.target = "_blank"
        info_box.appendChild(a_tag) 
    }
}
// For Web - work
display_img(Arr_web,web)
// For Software Work
display_img(Arr_web,soft)
// Fro Design - work
display_img(Arr_design,design)
// ----------------------------------
