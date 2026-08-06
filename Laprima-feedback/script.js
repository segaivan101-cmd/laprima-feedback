/* ==========================================
   LAPRIMA GUEST EXPERIENCE
   FINAL SCRIPT
========================================== */


/* ==========================================
   DOM READY
========================================== */

document.addEventListener("DOMContentLoaded", function(){



    /* ==========================================
       LOADING SCREEN
    ========================================== */


    const loader = document.getElementById(
        "loading-screen"
    );


    if(loader){

        setTimeout(function(){


            loader.classList.add(
                "hide"
            );


            setTimeout(function(){


                loader.style.display = "none";


            },800);



        },1500);


    }





    /* ==========================================
       HERO ANIMATION
    ========================================== */


    const heroContent =
    document.querySelector(
        ".hero-content"
    );


    if(heroContent){


        setTimeout(function(){


            heroContent.classList.add(
                "show"
            );


        },300);


    }





    /* ==========================================
       STAR RATING
    ========================================== */


    const ratingGroups =
    document.querySelectorAll(
        ".stars"
    );


    ratingGroups.forEach(function(group){


        const stars =
        group.querySelectorAll(
            "i"
        );



        stars.forEach(function(star,index){



            star.addEventListener(
                "click",
                function(){



                    stars.forEach(function(item,i){



                        if(i <= index){


                            item.classList.remove(
                                "fa-regular"
                            );


                            item.classList.add(
                                "fa-solid"
                            );


                        }else{


                            item.classList.remove(
                                "fa-solid"
                            );


                            item.classList.add(
                                "fa-regular"
                            );


                        }



                    });



                }
            );



        });



    });





    /* ==========================================
       SMOOTH SCROLL
    ========================================== */


    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function(link){



        link.addEventListener(
            "click",
            function(e){



                const target =
                document.querySelector(
                    this.getAttribute("href")
                );



                if(target){


                    e.preventDefault();


                    target.scrollIntoView({

                        behavior:"smooth"

                    });


                }


            }
        );


    });






    /* ==========================================
       SUBMIT BUTTON
    ========================================== */


    const submitButton =
    document.querySelector(
        ".submit-btn"
    );


    if(submitButton){


        submitButton.addEventListener(
            "click",
            function(){


                alert(
                    "Thank you for sharing your experience with Laprima Hotel."
                );


            }
        );


    }





});








/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */


window.addEventListener(
"scroll",
function(){



    const navbar =
    document.querySelector(
        ".navbar"
    );



    if(!navbar) return;




    if(window.scrollY > 80){


        navbar.classList.add(
            "scrolled"
        );


    }else{


        navbar.classList.remove(
            "scrolled"
        );


    }



});








/* ==========================================
   SYSTEM CHECK
========================================== */


console.log(
"Laprima Guest Experience Loaded Successfully"
);