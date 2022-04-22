window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    var hoge = document.querySelector(".hoge");
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
    hoge.innerText =
    "absolute: " + absolute + "<br>"
    + "alpha: " + alpha + "<br>"
    + "beta: " + beta + "<br>"
    + "gamma: " + gamma + "<br>";
}
