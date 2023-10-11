const iconeBars = document.getElementById('iconBars');
const iconeX = document.getElementById('iconX');
const menu = document.getElementById('itens-menu')


iconeBars.addEventListener('click', function(){
    iconeBars.style.display = 'none';
    iconeX.style.display = 'block';

    menu.style.right = '0';
});

iconeX.addEventListener('click', function(){
    iconeBars.style.display = 'block';
    iconeX.style.display = 'none';
    
    menu.style.right = '-900px';
});

