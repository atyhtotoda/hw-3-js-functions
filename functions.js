//function 1
function splitAndMerge(str, sign) {
    var newWord = [];
    var words = str.split(' ');
    var chapts = [];
    for (var i = 0; i < words.length; i++) {
        chapts = words[i].split('').join(sign);
        newWord += ' ' + chapts;
    }
    return (newWord);
}

splitAndMerge("Hello World!", ",");

//function 2
function convert(smth) {
    var res = [];
    for (var j in smth) {
        var array = [];
        array.push(j, smth[j]);
        res.push(array)
    }
    return (res);
}

convert({name: 'Jeremy', age: 24, role: 'Software Engineer'});

//function 3
function toCamelCase(str){
    var result = ""
    for (var i=0; i<str.length; i++) {
        if ( (str.charAt(i) == '-') || (str.charAt(i) == '_') ) {
            i++
            if (i < str.length) {
                result += str.toUpperCase().charAt(i)
            }
        } else {
            result += str.charAt(i)
        }
    }
    return result
}

toCamelCase("the-stealth-warrior")

//function 4
function reverseSentence(str) {
    var result = [];
    var newStr = str.split(" ");
    var joinArray = [];
    for (var i=0; i<newStr.length; i++) {
        var newWord = newStr[i].split("");
        var reverseArray = newWord.reverse()
        joinArray = reverseArray.join("");
        result.push(joinArray);
    }

    return result.join(" ");
}

reverseSentence("A fun little challenge!");

//function 5
function stringExpansion(str) {
    var res = '';
    for (var i=0; i<str.length; i++) {
        if (!(isNaN(parseInt(str[i], 10)))) {
            for (j = 0; j < str[i]; j++) {
                res = res + str[i+1];
            }
        }
    }

    return res;
}

stringExpansion('3D2a5d2f');

//function 6
function largest(...more) {
    var res = more[0];
    for (var i=0; i<= more.length; i++) {
        if (more[i] > res) {
            res = more[i]
        }
    }
    return res;
}

largest(2, 0.1, -5, 100, 3)

//function 7
function smallest(...more) {
    var res = more[0];
    for (var i=0; i<= more.length; i++) {
        if (more[i] < res) {
            res = more[i]
        }
    }
    return res;
}
smallest(2, 0.1, -5, 100, 3)

//function 8
function transform(array) {

    var b = [];
    for (var i = 0; i < array.length; i++) {
        b[i] = (function (x) {
            return function () { return x; };
        })(array[i]);
    }
    return b;
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
newArray[2]();

//function 9
function countDown(num) {
    output = "";
    newValue = 0;
    if (num==0) {return num;}
    else {
        for (var i=0; i<=num; i++) {
            newValue = num - i;
            output = output + newValue + " ";
        }
        return output;
    }
}

countDown(3);

//function 10
