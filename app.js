var questions = [
    new Question("Яка з цих мов програмування не є об'єктно-орієнтованою?", ["Java", "C#", "C++", "C"], "C"),
    new Question(" Курс CS50 є вступним курсом до ___ ?", ["Массачусетського технологічного інституту", "Гарвардського університету", "Колумбійського університету", "Стенфордського університету"], "Гарвардського університету"),
    new Question("Який результат дасть наступний код (Python 3)?<br> word = 'foobar'<br> print(word[3:] + word[:3])", ["foobar", "barfoo", "fobar", "Виникне помилка"], "barfoo"),
    new Question("Яка з цих мов програмування використовується для створення web-додатків?", ["PHP", "Python", "C++", "Всі перелічені"], "Всі перелічені"),
    new Question("Який буде результат виконання наступного фрагменту коду (Python 3)?<br>for i in range(3):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i, end=' ')", ["0 1 2", "3", "1 2 3", "Виникне помилка"], "0 1 2"),
    new Question("Що визначає атрибут BORDER в елементі розмітки TABLE (HTML5)?", ["Визначає розміщення таблиці в документі", "Визначає товщину рамки", "Встановлює колір окантовки", "Управляє лініями, що розділяють комірки таблиці"], "Визначає товщину рамки"),
    new Question("Яким тегом задається комірка заголовка в таблицях (HTML5)?", ["&lttd&gt", "&lttt&gt", "&ltth&gt", "&lttr&gt"], "&ltth&gt"),
    new Question("Які конструкції для циклів є в javascript?", ["Тільки дві: for і while", "Тільки одна: for", "Три: for, while і do...while", "В javascript немає циклів"], "Три: for, while і do...while"),
    new Question("Хто переважно проводить лекції на курсі CS50?", ["Замайла Чен", "Марк Цукерберг", "Девід Малан", "Дан Балан"], "Девід Малан"),
    new Question("Який з цих символів в Linux називається <<конвеєром>> і займається перенаправленням виводу з однієї програми на ввід в іншу?", [">", "%", "@", "|"], "|"),
    ];
    
var quiz = new Quiz (questions);

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        
        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++){
            element = document.getElementById("choice" + i);
            element.innerHTML = choices [i];
            guess ("btn" + i, choices[i]);
        }
        
        showProgress();
    }
}
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    };
}

function showScores() {
    var gameOverHtml = "<h1>Результат</h1>";
    gameOverHtml += "<h2 id = 'score'> Ваш результат: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}
    
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex +1;
    var element = document.getElementById("progress");
    element.innerHTML = "Запитання " + currentQuestionNumber + " з " + quiz.questions.length;
}


populate ();