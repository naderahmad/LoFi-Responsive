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

function spotify() {
    let playerSpotify = document.getElementById("iframe"),
        playerhtml =  document.querySelector(".player"),
        check = document.getElementById("checkbox");

    if (check.checked == false) {
        playerSpotify.style.visibility = "visible";
        playerSpotify.style.width = "60%"
        playerSpotify.src = "https://open.spotify.com/embed/playlist/35xI4hSJ8MdO1xkXwsd56a"
        playerhtml.style.display = "none";
        playerhtml.pause();
    } else {
        playerSpotify.style.visibility ="hidden";
        playerSpotify.style.width = "0";
        playerSpotify.src = "";
        playerhtml.style.display = "flex";
    }
}

