let qn = 0;
let qa = 0;
// let questions = ['1/5. Ваше телосложение?', '2/5. Какой климат вы предпочитаете?', '3', '4', '5'];
// let a0 = ['Я полный', 'В меру полноват, воздушный, как пышка', 'Среднее', 'Немного худой', 'Тощий, как палка'];
// let a1 = ['Жаркий. Даже если я окажусь в пустыне в +50, мне будет комфортно', 'Теплый. Когда на улице облачно и можно прогуляться в легкой одежде', 'Умеренный. Когда можно накинуть пальто и идти куда-то с кофе в руке', 'Прохладный. Около 0°C', 'Холодный. Буду есть мороженое даже при абсолютном нуле'];
// let a2 = ['2', '2', '3', '4', '5'];
// let a3 = ['2', '2', '3', '4', '5'];
// let a4 = ['2', '2', '3', '4', '5'];
// let ca = ['В меру полноват, воздушный, как пышка', 'Жаркий. Даже если я окажусь в пустыне в +50, мне будет комфортно', '1', '5', '3'];
let answers = [];
function processFiles(files) {
    var file = files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
        // Когда это событие активируется, данные готовы.
        // Вставляем их в страницу в элемент <div>
        var output = document.getElementById("fileOutput");
        output.textContent = e.target.result;
        console.log(output.textContent);
        let all = output.textContent.split(';');
        questions = all.slice(0, 5);
        a0 = all.slice(5, 10);
        a1 = all.slice(10, 15);
        a2 = all.slice(15, 20);
        a3 = all.slice(20, 25);
        a4 = all.slice(25, 30);
        ca = all.slice(30, 35);
        $('#q').text(questions[qn]);
        $('#answ0').text(a0[0]);
        $('#answ1').text(a0[1]);
        $('#answ2').text(a0[2]);
        $('#answ3').text(a0[3]);
        $('#answ4').text(a0[4]);
        $('.que').css('visibility', 'visible')
    };
}

$('#start').click(() => {
    $('#start').css('visibility', 'hidden')
})

$('#answ0').click(() => {
    if (qn == 0) {
        answers.push(a0[0]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a1[0]);
        $('#answ1').text(a1[1]);
        $('#answ2').text(a1[2]);
        $('#answ3').text(a1[3]);
        $('#answ4').text(a1[4]);
    } else if (qn == 1) {
        answers.push(a1[0]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a2[0]);
        $('#answ1').text(a2[1]);
        $('#answ2').text(a2[2]);
        $('#answ3').text(a2[3]);
        $('#answ4').text(a2[4]);
    } else if (qn == 2) {
        answers.push(a2[0]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a3[0]);
        $('#answ1').text(a3[1]);
        $('#answ2').text(a3[2]);
        $('#answ3').text(a3[3]);
        $('#answ4').text(a3[4]);
    } else if (qn == 3) {
        answers.push(a3[0]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a4[0]);
        $('#answ1').text(a4[1]);
        $('#answ2').text(a4[2]);
        $('#answ3').text(a4[3]);
        $('#answ4').text(a4[4]);
    } else if (qn == 4) {
        answers.push(a4[0]);
        $('#answ0:hover, #answ1:hover, #answ2:hover, #answ3:hover, #answ4:hover').css('background-color', 'rgb(194, 194, 194)');
        $('#answ0:hover, #answ1:hover, #answ2:hover, #answ3:hover, #answ4:hover').css('cursor', 'not-allowed');
    }
});

$('#answ1').click(() => {
    if (qn == 0) {
        answers.push(a0[1]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a1[0]);
        $('#answ1').text(a1[1]);
        $('#answ2').text(a1[2]);
        $('#answ3').text(a1[3]);
        $('#answ4').text(a1[4]);
    } else if (qn == 1) {
        answers.push(a1[1]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a2[0]);
        $('#answ1').text(a2[1]);
        $('#answ2').text(a2[2]);
        $('#answ3').text(a2[3]);
        $('#answ4').text(a2[4]);
    } else if (qn == 2) {
        answers.push(a2[1]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a3[0]);
        $('#answ1').text(a3[1]);
        $('#answ2').text(a3[2]);
        $('#answ3').text(a3[3]);
        $('#answ4').text(a3[4]);
    } else if (qn == 3) {
        answers.push(a3[1]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a4[0]);
        $('#answ1').text(a4[1]);
        $('#answ2').text(a4[2]);
        $('#answ3').text(a4[3]);
        $('#answ4').text(a4[4]);
    } else if (qn == 4) {
        answers.push(a4[1]);
        $('#answ0:hover, #answ1:hover, #answ2:hover, #answ3:hover, #answ4:hover').css('background-color', 'rgb(194, 194, 194)');
        $('#answ0:hover, #answ1:hover, #answ2:hover, #answ3:hover, #answ4:hover').css('cursor', 'not-allowed');
    }
});

$('#answ2').click(() => {
    if (qn == 0) {
        answers.push(a0[2]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a1[0]);
        $('#answ1').text(a1[1]);
        $('#answ2').text(a1[2]);
        $('#answ3').text(a1[3]);
        $('#answ4').text(a1[4]);
    } else if (qn == 1) {
        answers.push(a1[2]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a2[0]);
        $('#answ1').text(a2[1]);
        $('#answ2').text(a2[2]);
        $('#answ3').text(a2[3]);
        $('#answ4').text(a2[4]);
    } else if (qn == 2) {
        answers.push(a2[2]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a3[0]);
        $('#answ1').text(a3[1]);
        $('#answ2').text(a3[2]);
        $('#answ3').text(a3[3]);
        $('#answ4').text(a3[4]);
    } else if (qn == 3) {
        answers.push(a3[2]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a4[0]);
        $('#answ1').text(a4[1]);
        $('#answ2').text(a4[2]);
        $('#answ3').text(a4[3]);
        $('#answ4').text(a4[4]);
    } else if (qn == 4) {
        answers.push(a4[2]);
        $('#answ0:hover, #answ1:hover, #answ2:hover, #answ3:hover, #answ4:hover').css('background-color', 'rgb(194, 194, 194)');
        $('#answ0:hover, #answ1:hover, #answ2:hover, #answ3:hover, #answ4:hover').css('cursor', 'not-allowed');
    }
});

$('#answ3').click(() => {
    if (qn == 0) {
        answers.push(a0[3]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a1[0]);
        $('#answ1').text(a1[1]);
        $('#answ2').text(a1[2]);
        $('#answ3').text(a1[3]);
        $('#answ4').text(a1[4]);
    } else if (qn == 1) {
        answers.push(a1[3]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a2[0]);
        $('#answ1').text(a2[1]);
        $('#answ2').text(a2[2]);
        $('#answ3').text(a2[3]);
        $('#answ4').text(a2[4]);
    } else if (qn == 2) {
        answers.push(a2[3]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a3[0]);
        $('#answ1').text(a3[1]);
        $('#answ2').text(a3[2]);
        $('#answ3').text(a3[3]);
        $('#answ4').text(a3[4]);
    } else if (qn == 3) {
        answers.push(a3[3]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a4[0]);
        $('#answ1').text(a4[1]);
        $('#answ2').text(a4[2]);
        $('#answ3').text(a4[3]);
        $('#answ4').text(a4[4]);
    } else if (qn == 4) {
        answers.push(a4[3]);
        $('#answ0:hover, #answ1:hover, #answ2:hover, #answ3:hover, #answ4:hover').css('background-color', 'rgb(194, 194, 194)');
        $('#answ0:hover, #answ1:hover, #answ2:hover, #answ3:hover, #answ4:hover').css('cursor', 'not-allowed');
    }
});

$('#answ4').click(() => {
    if (qn == 0) {
        answers.push(a0[4]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a1[0]);
        $('#answ1').text(a1[1]);
        $('#answ2').text(a1[2]);
        $('#answ3').text(a1[3]);
        $('#answ4').text(a1[4]);
    } else if (qn == 1) {
        answers.push(a1[4]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a2[0]);
        $('#answ1').text(a2[1]);
        $('#answ2').text(a2[2]);
        $('#answ3').text(a2[3]);
        $('#answ4').text(a2[4]);
    } else if (qn == 2) {
        answers.push(a2[4]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a3[0]);
        $('#answ1').text(a3[1]);
        $('#answ2').text(a3[2]);
        $('#answ3').text(a3[3]);
        $('#answ4').text(a3[4]);
    } else if (qn == 3) {
        answers.push(a3[4]);
        qn += 1;
        $('#q').text(questions[qn]);
        $('#answ0').text(a4[0]);
        $('#answ1').text(a4[1]);
        $('#answ2').text(a4[2]);
        $('#answ3').text(a4[3]);
        $('#answ4').text(a4[4]);
    } else if (qn == 4) {
        answers.push(a4[4]);
        $('#answ0:hover, #answ1:hover, #answ2:hover, #answ3:hover, #answ4:hover').css('background-color', 'rgb(194, 194, 194)');
        $('#answ0:hover, #answ1:hover, #answ2:hover, #answ3:hover, #answ4:hover').css('cursor', 'not-allowed');
    }
});

$('#end').click(() => {
    var perc = 0
    for (var i = 0; i<5; i++) {
        if (ca[i] == answers[i]) {
            perc += 20
        };
    };
    if (perc <= 40) {
        var mark = 2;
    } else if (perc == 60) {
        var mark = 3;
    } else if (perc == 80) {
        var mark = 4;
    } else {
        var mark = 5
    }
    $('#perc').text('Тест завершен, правильных ответов ' + perc + '%. Примерная оценка ' + mark + '.');
});