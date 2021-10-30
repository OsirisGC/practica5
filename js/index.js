
var grades = cont ("What's your grades?")

if(grades >= 0 && grades <= 3 ){

    alert("Very poor!")
}
if(grades == 3 || grades <= 5  ){

    alert("Not Enough!")
}
if(grades == 5 || grades == 6  ){

    alert("Enough!")
}
if(grades == 6 || grades == 7  ){

    alert("Good!")
}
if(grades == 8 || grades == 9  ){

    alert("Very Good!")
}
if(grades == 9 || grades == 10  ){

    alert("Excellent!")
}
else if(grades > 10 ){
    alert("Error!!!")
}
