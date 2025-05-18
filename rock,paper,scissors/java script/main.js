let img = document.querySelectorAll(".image1");

let img2 = document.querySelectorAll(".image2");



for (let i = 0; i <= img.length - 1; i++) {
    img[i].addEventListener("click", () => {
        hidden(i);
        document.querySelector(".title-user").innerHTML = "you choosed:"
        let randomimg = Math.floor(Math.random() * img2.length);
        img2[randomimg].classList.remove("d-none");
        selectt(i, randomimg)
    })
}



function hidden(i) {
    for (let j = 0; j <= img.length - 1; j++) {
        if (img[i] !== img[j]) {
            img[j].classList.add("d-none");
        }
    }
}


document.querySelector(".refresh").addEventListener("click", () => {
    for (let i = 0; i <= img.length - 1; i++) {
        img[i].classList.remove("d-none");
        img2[i].classList.add("d-none");
        if (document.querySelector("#user-point").innerHTML == 3) {

            document.querySelector(".left-box").classList.add("d-none");
            document.querySelector(".right-box").classList.add("d-none");
            document.querySelector(".user-win").classList.remove("d-none");



        }
        if (document.querySelector("#cpu-point").innerHTML == 3) {

            document.querySelector(".left-box").classList.add("d-none");
            document.querySelector(".right-box").classList.add("d-none");
            document.querySelector(".cpu-win").classList.remove("d-none");

        }

    }
})





function userPoint() {
    document.querySelector("#user-point").innerHTML = Number(document.querySelector("#user-point").innerHTML) + 1;
}
function cpuPoint() {
    document.querySelector("#cpu-point").innerHTML = Number(document.querySelector("#cpu-point").innerHTML) + 1;
}

function selectt(user, cpu) {
    if (user != cpu) {

        if (user == 0) {
            if (cpu == 1) {
                userPoint()
            }
            if (cpu == 2) {
                cpuPoint()
            }
        }

        if (user == 1) {
            if (cpu == 0) {
                cpuPoint()
            }
            if (cpu == 2) {
                userPoint()
            }
        }

        if (user == 2) {
            if (cpu == 0) {
                userPoint()
            }
            if (cpu == 1) {
                cpuPoint()
            }
        }

    }

}