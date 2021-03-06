

$(document).ready(() => {

    // Owl carrousel Reglage J query

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

//Partie permettant de gerer les vignettes de vidéos et meme leur espacement via le margin
// Item: c'est le nombre de vignette que l'on desire
    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 17  ,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
// Partie covid
    $('.covid').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 7 ,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.categorie').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 6 ,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 5
            },
            1600: {
                items: 6
            }
        }
    })
})





