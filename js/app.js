const slcAll = (el) => document.querySelectorAll(el);
const slc = (el) => document.querySelector(el);

var optionColor = null;
var optionBack = false;
var optionOpen = false;
var NavOpen = false;
var optionRight = null;
var DocEl = document.documentElement;

window.innerWidth < 450 ? slc('.nav-links').style.width = "100%" : false;


slc('.hamburger-btn').addEventListener('click', () => {
    if (!NavOpen) {
        slc('.hamburger-btn').innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        slc('.nav-links').style.right = '0px';
        NavOpen = true;
    } else {
        slc('.hamburger-btn').innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
        slc('.nav-links').style.right = '-100%';
        NavOpen = false;
    }
    console.log(NavOpen);

})
slcAll('.nav-item').forEach(item=>{
  item.addEventListener('click',()=>{
    NavOpen = false;
    slc('.hamburger-btn').innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
    slc('.nav-links').style.right = '-100%';
})
})



//  check dark or light mode 
slc('#darkmode').onchange = () => {
    if (slc('#darkmode').checked == 1) {
        // dark mode 
        DocEl.setAttribute('data-theme', 'dark')
    } else {
        // light mode 
        DocEl.setAttribute('data-theme', 'light')
    }
}



slc('.btn-toggle').addEventListener('click',()=>{
    if(window.innerWidth > 567){
        optionRight = "-232px";
    }else{
        optionRight = "-162px";
    }
    if (!optionOpen) {
        slc('.option-color').style.right ="0px";
        optionOpen = true;
    } else {
        slc('.option-color').style.right = optionRight;
        optionOpen = false;
    }
});



slcAll(".color").forEach((item, index) => {

    item.style.background = item.getAttribute('data-color');

    item.addEventListener('click', (e) => {
        //get data color
        optionColor = e.target.getAttribute('data-color');
        //set color option
        DocEl.style.setProperty('--color-theme', optionColor);
    })
});

if(window.innerWidth > 991){
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            slc('nav').style.background = "var(--color-theme)";
            DocEl.style.setProperty('--color-sc-theme','#f2f2f2');
        } else {
            slc('nav').style.background = "transparent";
            DocEl.style.setProperty('--color-sc-theme','var(--color-theme)');
        }
    });
}
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500){
        slc('.scroll-toTop').style.display='flex';
    }
});
slc('.scroll-toTop').addEventListener('click',()=>{
    window.scrollTo(0,0);
})