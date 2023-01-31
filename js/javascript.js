function changeViewScreen()  {
    const screens = document.querySelectorAll('.screen');

    screens.forEach(screen => screen.classList.toggle('display-none'));
}