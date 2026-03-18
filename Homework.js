//Task 1a
function splitLines(text) {
    return text.split("\n");
    }

splitLines("A\nB\nC\n");

//Task 1b
function textToNumbers(list) {
    
    var numbers=[];

    for(var i=0; i<list.length; i++) {
        numbers.push(Number(list[i]));
    }
    return numbers
}

//Task 1c
function pairSums(numbers) {

    let sums = [];

    for (let i = 0; i < numbers.length - 1; i++) {
        sums.push(numbers[i] + numbers[i + 1]);
    }

    return sums;
}


//Task 2
function addTask() {
    var text=document.getElementById("inputText").value;

    var li=document.createElement("li");

    var checkbox=document.createElement("input");
    checkbox.type="checkbox";

    var span=document.createElement("span");
    span.innerHTML=text;

    checkbox.onchange=function() {
        
        if (checkbox.checked){
            span.style.textDecoration="line-through";
        }
        else {
            span.style.textDecoration="none";
        }
    };

    li.append(checkbox);
    li.appendChild(span);

    document.getElementById("list").appendChild(li)
}