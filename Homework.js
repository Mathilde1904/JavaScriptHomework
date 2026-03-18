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
    var date=document.getElementById("dueDate").value;

    var li=document.createElement("li");

    var checkbox=document.createElement("input");
    checkbox.type="checkbox";

    var span=document.createElement("span");
    span.innerHTML=text;

    var deleteSpan=document.createElement("span");
    deleteSpan.innerHTML=" "+date;

    checkbox.onchange=function() {
        if (checkbox.checked){
            span.style.textDecoration="line-through";
        }
        else {
            span.style.textDecoration="none";
        }
    };

    var deleteBtn=document.createElement("button");
    deleteBtn.innerHTML="Delete";

    deleteBtn.onclick=function(){
        li.remove();
    };

    li.append(checkbox);
    li.appendChild(span);
    li.appendChild(deleteSpan)
    li.appendChild(deleteBtn);

    document.getElementById("list").appendChild(li);
}