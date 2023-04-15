
//console.log("JS connect");
function task1(){
    let username = prompt("Введите ваше имя");
    alert("Привет, " + username);
}
function task2(){
    let loveMovi = "АВАТАР";
    let rightAnswer = false;
    while(!rightAnswer) {
        if(prompt("Введите название моего любимого фильма").toUpperCase()==loveMovi){
            alert("Угадали! Вы экстрасенс!!!");
            rightAnswer = true;
        } else if(confirm("Неверно! Попробуете ещё?")){
            continue;
        } else break;
    }
}
function task3(){
    let arr = ['a','b','c'];
    let userword = "Сначала";
    let sentence = "было слово. В конце - только буква";
    let letter = "Я";
    arr.splice(0,1,userword);
    arr.splice(1,1,sentence);
    arr.splice(2,1,letter);
    alert(arr);
}

let hw = document.getElementById("homework");
hw.addEventListener("click", event => {
    console.log(event.currentTarget.className);
    switch(event.target.className){
        case "task_1":
            task1();
            break;
        case "task_2":
            task2();
            break;
        case "task_3":
            task3();
            break;
    }
})

