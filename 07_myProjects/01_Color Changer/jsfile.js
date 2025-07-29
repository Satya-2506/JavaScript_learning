const body = document.querySelector("body")
const buttons = document.querySelectorAll(".button")
// console.log(buttons)   // NodeList

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e)

        // if(e.target.id === 'gray') {
        //     body.style.backgroundColor = 'gray';
        // }
        // if(e.target.id === 'white') {
        //     body.style.backgroundColor = 'white';
        // }
        // if(e.target.id === 'blue') {
        //     body.style.backgroundColor = 'blue';
        // }
        // if(e.target.id === 'yellow') {
        //     body.style.backgroundColor = 'yellow';
        // }
        // if(e.target.id === 'purple') {
        //     body.style.backgroundColor = 'purple';
        // }

        switch(e.target.id) {
            case "gray": 
                body.style.backgroundColor = 'gray';
                break;
            case "white": 
                body.style.backgroundColor = 'white';
                break;
            case "blue": 
                body.style.backgroundColor = 'blue';
                break;
            case "yellow": 
                body.style.backgroundColor = 'yellow';
                break;
            case "purple": 
                body.style.backgroundColor = 'purple';
                break;
        }

    })
})