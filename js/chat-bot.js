import responseObj from "./response.js";
const chatbot = document.querySelector(".chat-bot");
const  chatbotWindow  = document.querySelector(".chat-bot-window");
const chatbotWindowBackground = document.querySelector(".chat-bot-window-background");
const chatbotWindowClose = document.querySelector(".chat-bot-close");

chatbot.addEventListener("click", ()=>{
    chatbotWindow.classList.toggle("option-display");
    chatbotWindowBackground.classList.toggle("option-display");
})
chatbotWindowBackground.addEventListener("click", ()=>{
    chatbotWindow.classList.toggle("option-display");
    chatbotWindowBackground.classList.toggle("option-display");
})
chatbotWindowClose.addEventListener("click", ()=>{
    chatbotWindow.classList.toggle("option-display");
    chatbotWindowBackground.classList.toggle("option-display");
})

const chatBody = document.querySelector(".chat-body");
const textInput = document.querySelector("#textinput");
const send = document.querySelector(".send");
const loadingEle = document.querySelector(".loading");
send.addEventListener("click", ()=>renderUserMessage());
textInput.addEventListener("keyup", (event)=>{
    if(event.keyCode === 13){
        if(textInput.value == ""){
            console.log("no message");
        }
        else{
            renderUserMessage();
        }
        
    }
})

const renderUserMessage = ()=>{
    const userInput = textInput.value;
    renderMessageEle(userInput, "user");
    textInput.value = "";
    toggleloading(false);
    setTimeout(()=>{
        renderChatbotResponse(userInput.toLowerCase());
        setScrollPosition();
        toggleloading("true");
    }, 600)
};

const renderChatbotResponse = (userInput) =>{
    const res = getChatbotResponse(userInput);
    renderMessageEle(res);
};

const renderMessageEle = (txt,type) =>{
    let className = "user-message";
    if(type !== 'user'){
        className = "chatbot-message";
    }
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add(className);
    messageEle.append(txtNode);
    chatBody.append(messageEle);
}

const getChatbotResponse = (userInput) =>{
    return responseObj[userInput] == undefined ?"Please try something else (0 _ 0)":responseObj[userInput];
}

const setScrollPosition = ()=>{
    if(chatBody.scrollHeight > 0){
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

const toggleloading = (show) =>{
    loadingEle.classList.toggle("hide", show);
}


