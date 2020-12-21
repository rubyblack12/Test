const endpoint = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
dulieu = fetch(endpoint).then((response) => response.json()).then((data) => {
    console.log(data)
    for (let i = 0; i < data.results.length; i++) {
        console.log(data.results[i])
        let rawhtml = ` <style="display: flex;justify-content: center;">
        <h3>Câu:${i+1}</h3>
        <div class="question">${data.results[i].question}</div>
        <div><input type="radio" name="answers${i}" value="${data.results[i].correct_answer}">B.<span>${data.results[i].correct_answer}</span></div>
        <div><input type="radio" name="answers${i}" value="${data.results[i].incorrect_answers[0]}">A.<span>${data.results[i].incorrect_answers[0]}</span></div>
        <div><input type="radio" name="answers${i}" value="${data.results[i].incorrect_answers[1]}">C.<span>${data.results[i].incorrect_answers[1]}</span></div>
        <div><input type="radio" name="answers${i}" value="${data.results[i].incorrect_answers[2]}">D.<span>${data.results[i].incorrect_answers[2]}</span></div>
        <div style="display: flex;justify-content: center;">
            <div class="category" style="margin: 15px;">Category: Sport</div>
            <div class="difficulty" style="margin: 15px;">Difficulty: easy</div>
        </div>
        <div class="error${i}"></div>
    </center>`
        document.querySelector(".app").insertAdjacentHTML("beforeend", rawhtml)
    }

    let answers = document.querySelector(".form")
    document.querySelector(".submit").addEventListener("click", (event) => {
        event.preventDefault()
        let count = 0
        for (let i = 0; i < data.results.length; i++) {
            let a = "answers.answers" + i + ".value"
            console.log(a)
            answer = eval(a)
            console.log(answer)
            if (answer == data.results[i].correct_answer) {
                count++
                document.querySelector(".error" + i).innerHTML = "<p style='color:green;'>ĐÚNG</p>"
            } else {
                document.querySelector(".error" + i).innerHTML = "<p style='color:red;'>Sai</p>"
            }
        }
        alert("Bạn trả lời đúng: " + count + " Câu")
        document.querySelector(".result").textContent = "ĐÚNG    " + count + "/" + data.results.length
    })
})