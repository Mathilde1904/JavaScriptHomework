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

    li.setAttribute("data-date", date);

    var checkbox=document.createElement("input");
    checkbox.type="checkbox";

    var span=document.createElement("span");
    span.innerHTML=text;

    var deleteSpan=document.createElement("span");
    deleteSpan.innerHTML=""+date;

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

    sortTasks();
}

function sortTasks() {
    var list=document.getElementById("list");
    var items=Array.from(list.children);

    items.sort(function(a,b) {
        var dateA=a.getAttribute("data-date");
        var dateB=b.getAttribute("data-date");

        if (!dateA && !dateB) return 0;
        if (!dateA) return 1;
        if (!dateB) return -1;

        return new Date(dateA)-new Date(dateB);
    });

    list.innerHTML="";

    items.forEach(function(item){
        list.appendChild(item)
    });
}