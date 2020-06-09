function checkClock()
{
    var aika = new Date();
    var vastaus = 'ei viela'
    if ( aika.getMinutes() == 17){
        vastaus = 'No nyt!';
        if (aika.getSeconds() % 2 ){
        document.body.style.backgroundColor = 'red';
        }else{
            document.body.style.backgroundColor = 'blue';
        }
    }
    console.log(aika.getSeconds() % 2 )
    document.getElementById("demo").innerHTML = vastaus;
}