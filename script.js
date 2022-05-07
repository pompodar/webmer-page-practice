document.querySelector('.menu-mobile').addEventListener('click', () => {
    if (document.querySelector('.planet menu').classList.contains('active')) {
        document.querySelector('.planet').classList.remove('full-screen');
        document.querySelector('.planet menu').classList.remove('width-auto');
        document.querySelector('.planet menu').classList.remove('active'); 
        document.querySelector('.menu-closed').classList.add('menu-width-auto');    
        document.querySelector('.menu-closed').classList.remove('menu-width-none');    
        document.querySelector('.menu-open').classList.add('menu-width-none');   
        document.querySelector('.menu-open').classList.remove('menu-width-auto');       
    } else {
        document.querySelector('.planet').classList.add('full-screen');
        document.querySelector('.planet menu').classList.add('width-auto');
        document.querySelector('.planet menu').classList.add('active');
        document.querySelector('.menu-closed').classList.add('menu-width-none');    
        document.querySelector('.menu-closed').classList.remove('menu-width-auto');    
        document.querySelector('.menu-open').classList.add('menu-width-auto');        
        document.querySelector('.menu-open').classList.remove('menu-width-none');        
    }
})
