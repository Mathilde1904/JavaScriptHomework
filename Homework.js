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



