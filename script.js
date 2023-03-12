window.onload = init;

function init(){
    const buttons = document.getElementsByClassName( "passing-btn" );

    for ( var i = 0; i < buttons.length; i++ ){
        const button = buttons[i];
        button.srcImage = i+1;

        button.onclick = function(){
            if ( this.classList.contains( "selected" ) ) return;

            const Selection = "img-selected";

            //Remove currents
            var currentBkImg = document.getElementsByClassName( Selection )[0];
            currentBkImg.classList.remove( Selection );

            var currentBtn = document.getElementsByClassName( "selected" )[0];
            currentBtn.classList.remove( "selected" );

            //Adding news
            var Background = document.getElementsByClassName( "carrosel-img" )[this.srcImage-1];
            Background.classList.add( Selection );

            var Button = document.getElementsByClassName( "passing-btn" )[this.srcImage-1];
            Button.classList.add( "selected" );

            //Animate Background
            Background.animate([
                {opacity: .5}, {opacity: 1}
            ],
            {
                duration: 500,
                iterations: 1,
                playbackRate: "ease-in-out",
                fill: "forwards"
            })
        }
    }

}