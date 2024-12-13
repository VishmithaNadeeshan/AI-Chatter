var md = window.markdownit();

function send() {
    const userInput = document.getElementById("txtF").value;
    const chatMsgs = document.querySelector(".chatMsgs");
    const userMsg = document.createElement("div");
    userMsg.className = "msgUser1";
    userMsg.innerHTML = `
        <div class="msgContent">
            <h3>${userInput}</h3>
            <img src="images/user1.png"  class="userLogo">
            
        </div>
    `;
    chatMsgs.appendChild(userMsg);

    document.getElementById("txtF").value = "";

    const loader = document.createElement("div");
    loader.className = "loader";
    chatMsgs.appendChild(loader);
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        contents: [
            {
                parts: [
                    {
                        text: userInput
                    }
                ]
            }
        ]
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD1n-cB2kdG_bFXbDCB3GVjp2iIEPCUVb4", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        loader.remove(); 

        const botReply=(result.candidates[0].content.parts[0].text)


        const botMsg = document.createElement("div");
        botMsg.className = "msgUser2";
        botMsg.innerHTML = `<div class="msgContent2">
        <img src="images/Robot.jpg"  class="userLogo">
        <h3>${md.render(botReply)}</h3>   
        </div>`;
        chatMsgs.appendChild(botMsg);
    });
}


