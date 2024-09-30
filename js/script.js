window.addEventListener('load', ()=>{
  const btn = document.querySelector('.menu-toggle-btn');
  const gnb = document.querySelector('.gnb');

  btn.addEventListener('click',()=>{
    let compStyles = window.getComputedStyle(gnb);

    let hheight = compStyles.getPropertyValue('height');
    if(hheight == '0px'){
      gnb.style.maxHeight = gnb.scrollHeight + 'px';
    } else {
      gnb.style.maxHeight = '0px';
    }
    console.log(hheight);
  })
})