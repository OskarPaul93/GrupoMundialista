const grupos = document.querySelectorAll(".grupo");

grupos.forEach((grupo, index) => {

    grupo.style.opacity = "0";
    grupo.style.transform = "translateY(20px)";

    setTimeout(() => {

        grupo.style.transition = "all .5s ease";
        grupo.style.opacity = "1";
        grupo.style.transform = "translateY(0)";

    }, index * 120);

});