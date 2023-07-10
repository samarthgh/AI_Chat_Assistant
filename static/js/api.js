const sendButton = document.getElementById("sendButton");
let promptInput = document.getElementById("questionInput").value;
sendButton.addEventListener("click", async () => {
    
    promptInput = document.getElementById("questionInput").value;

    const res = await fetch("/templates/index.html/api/openai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ promptInput })
       
    });

    

    const data = await res.json();
    console.log(data);
    const display = data.choices[0].message.content;
    const toshow = document.getElementById("solution");
    toshow.innerHTML = display;
});

