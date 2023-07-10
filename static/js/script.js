
sendButton.addEventListener("click", async()=>{
    questionInput = document.getElementById("questionInput").value;
    document.getElementById("questionInput").value = "";
    document.querySelector(".right2").style.display = "block"
    document.querySelector(".right1").style.display = "none"

    const question = document.getElementById("question");
    question.innerHTML = questionInput;

    

})
