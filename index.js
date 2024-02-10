document.addEventListener('DOMContentLoaded', ()=> {
    const scoreDiv = document.querySelector('.score');
    const multiplierDiv = document.querySelector('.multiplier');
    const bubble = document.querySelector('.bubble');
    const upgradesDiv = document.querySelector('.upgrades');
    const multiplier2x = document.getElementById('muliplier2x');
    const multiplier4x = document.getElementById('muliplier4x');
    const multiplier8x = document.getElementById('muliplier8x');
    let score = 0;
    let multiplier = 1;

    scoreDiv.innerHTML = score;
    multiplierDiv.innerHTML = "+" + multiplier

    multiplier2x.setAttribute("value", 2)
    multiplier2x.setAttribute("cost", 500)
    multiplier2x.disabled = true;

    multiplier4x.setAttribute("value", 4)
    multiplier4x.setAttribute("cost", 800)
    multiplier4x.disabled = true;

    multiplier8x.setAttribute("value", 8)
    multiplier8x.setAttribute("cost", 1500)
    multiplier8x.disabled = true;

    function popped(event){
        event.preventDefault();
        if (event.code !== 'Space' && event.type !== 'click') {
            return;
        }

        // score++;
        score = score + (1 * multiplier)

        scoreDiv.innerHTML = score;

        // if (score >= multiplier2x.getAttribute('cost')){
        //     multiplier2x.disabled = false;
        // }
        // if (score >= multiplier4x.getAttribute('cost')){
        //     multiplier4x.disabled = false;
        // }
        // if (score >= multiplier8x.getAttribute('cost')){
        //     multiplier8x.disabled = false;
        // }
        enableUpgrade();
    }

    function upgradeClicker(event){

        multiplier = multiplier * this.value;
        multiplierDiv.innerHTML = "+" + multiplier;
        
        score -= this.getAttribute('cost')
        scoreDiv.innerHTML = score;

        // if (score >= multiplier2x.getAttribute('cost')){
        //     multiplier2x.disabled = false;
        // }
        // if (score >= multiplier4x.getAttribute('cost')){
        //     multiplier4x.disabled = false;
        // }
        // if (score >= multiplier8x.getAttribute('cost')){
        //     multiplier8x.disabled = false;
        // }

        enableUpgrade();

        //multiplierDiv.innerHTML = 'Multiplier';
        //multiplierDiv.style.border = '3px solid rgb(178, 123, 192)';
    }

    function enableUpgrade(){
        multiplier2x.disabled = (score <= multiplier2x.getAttribute('cost')) ? true : false;
        multiplier4x.disabled = (score <= multiplier4x.getAttribute('cost')) ? true : false;
        multiplier8x.disabled = (score <= multiplier8x.getAttribute('cost')) ? true : false;
    }

    bubble.addEventListener('click', popped);
    document.addEventListener('keyup', popped);
    multiplier2x.addEventListener('click', upgradeClicker);
    multiplier4x.addEventListener('click', upgradeClicker);
    multiplier8x.addEventListener('click', upgradeClicker);


    // multiplierDiv.addEventListener('click', upgradeClicker)

})