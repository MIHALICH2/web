let qn = 0;
let qa = 0;
let questions = ['1/5. Ваше телосложение?', '2/5. Какой климат вы предпочитаете?', '3', '4', '5'];
let a0 = ['Я полный', 'В меру полноват, воздушный, как пышка', 'Среднее', 'Немного худой', 'Тощий, как палка'];
let a1 = ['Жаркий. Даже если я окажусь в пустыне в +50, мне будет комфортно', 'Теплый. Когда на улице облачно и можно прогуляться в легкой одежде', 'Умеренный. Когда можно накинуть пальто и идти куда-то с кофе в руке', 'Прохладный. Около 0°C', 'Холодный. Буду есть мороженое даже при абсолютном нуле'];
let a2 = ['2', '2', '3', '4', '5'];
let a3 = ['2', '2', '3', '4', '5'];
let a4 = ['2', '2', '3', '4', '5'];
let ca = ['В меру полноват, воздушный, как пышка', 'Жаркий. Даже если я окажусь в пустыне в +50, мне будет комфортно', '1', '5', '3'];
let answers = [];
$('#q').text(questions[qn]);
$('#answ0').text(a0[0]);
$('#answ1').text(a0[1]);
$('#answ2').text(a0[2]);
$('#answ3').text(a0[3]);
$('#answ4').text(a0[4]);

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
    }
});

$('#end').click(() => {
    var perc = 0
    for (var i = 0; i<5; i++) {
        if (ca[i] == answers[i]) {
            perc += 20
        };
    };
    $('#perc').text('Тест завершен, вы хлеб на ' + perc + '%.')
})