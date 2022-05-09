const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
    if(menu.classList.contains('hidden') && window.innerWidth < 768) {
        menu.classList.remove('hidden');
        menu.classList.add(
            'flex',
            'flex-col',
            'flex-center',
            'bg-purple-900',
            'w-full',
            'absolute',
            'top-16'
        );
    } else {
        menu.classList.add('hidden');
    }
});

menu.addEventListener('click', () => {
    menu.classList.add('hidden');
  });
  
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu.classList.add('hidden');
      menu.classList.remove(
        'flex',
        'flex-col',
        'text-center',
        'bg-purple-900',
        'w-full',
        'absolute',
        'top-16'
      );
    }
  });