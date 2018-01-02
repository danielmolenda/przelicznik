function showValue()
{
    var pln = parseFloat(document.getElementById('cash').value);
    var eur = 4.2120; 
    var usd = 3.5653;
    var gbp = 4.78901;
	var jpy = 0.0318264;
                               
    var sel=document.getElementById("waluty");
    var selection=sel.options[sel.selectedIndex].value;
    var e=document.getElementById("EUR");
    var d=document.getElementById("USD");
    var g=document.getElementById("GBP");
    var j=document.getElementById("JPY");
              
    if(selection == 'EUR')
	{
		var eur = (pln/eur).toFixed(2);
        document.getElementById('w').innerHTML = 'Kwota w Euro wynosi: '+eur+' €';
    }
              
    if(selection == 'USD')
	{   
        var usd = (pln/usd).toFixed(2);
        document.getElementById('w').innerHTML = 'Kwota w Dolarach wynosi: '+usd+' $';
    }
               
    if(selection == 'GBP')
	{   
        var funt = (pln/gbp).toFixed(2);
        document.getElementById('w').innerHTML = 'Kwota w Funtach wynosi: '+'£'+funt;
    }
               
    if(selection == 'JPY')
    {   
        var yen = (pln/jpy).toFixed(2);
        document.getElementById('w').innerHTML = 'Kwota w Jenach wynosi: '+yen+' JPY';
    }
}