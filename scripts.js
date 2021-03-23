function stars() {
    let count = 150;
    let scene = document.querySelector('.night');
    let w = 0;
    
    while(w < count) {
        let star = document.createElement("w");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x+'px';
        star.style.top = y+'px';
        star.style.width = 1+size+'px';
        star.style.height = 1+size+'px';

        star.style.animationDuration = 10+duration+'s';
        star.style.animationDelay = duration+'s';

        scene.appendChild(star);
        w++
    }
}
stars();