// specify numbers from uclemeler folder !
const list = [1,2,3,4,6];
    

function showRandomMessage()
{
    const randomItem = list[Math.floor(Math.random() * list.length)];

    const messageHtml = `
    <div class =  "message-box">
        <img class = "tuplet-image" src = "uclemeler/${randomItem}.png"/>
    </div>
    `

    const messageBoxElement = document.querySelector('.js-tuplet-message-box');
    messageBoxElement.innerHTML = messageHtml;
}

setInterval(showRandomMessage, 4500);