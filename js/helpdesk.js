//js voor helpdesk

//voornaam
var naam = prompt("Wat is uw voornaam?");
    while (naam == "" || naam == null) {
    alert("U heeft uw voornaam niet ingevuld");
    naam = prompt("Wat is uw voornaam?");
    }

//achternaam
var achter = prompt("Wat is uw achternaam?");
    while (achter == "" || achter == null) {
    alert("U heeft uw achternaam niet ingevuld");
    achter = prompt("Wat is uw achternaam?");
    }
document.write("<h2>Klantnaam: " + naam + " " + achter + "</h2>");

//Datum 
alert("datum wordt automatische ingevuld");
var datum = new Date ();
var vandaag = datum.getDate();
document.write("<br />Datum: " + datum + "<br />");

//type modem
var modem = prompt("Wat voor type is uw modem? ");
    while (modem == "" || modem == null) { 
    alert("U heeft deze vraag niet ingevuld");
    modem = prompt("Wat voor type is uw modem? ");
    }

//merk van modem
var merk = prompt("Wat is het merk van uw modem? ");
    while (merk == "" || merk == null) {
    alert("U heeft deze vraag niet ingevuld");
    merk = prompt("Wat is het merk van uw modem? ");
    }
document.write("Modem type: " + modem + " " + merk);

//pesten
var klacht = confirm("Heeft u een klacht? ");
    while (klacht == "" || klacht == null) {
    alert("U heeft geen klacht ");
    klacht = alert("Wat doet u hier nog ga weg! ");
    }
document.write("<br>Heeft de klant een klacht: " + klacht + "<br>");

//klacht internet - klinter
var klinter = confirm("Heeft u een klacht over internet? ");
document.write("<br /><fieldset><legend><b>Internet</b></legend> Heeft de klant een klacht over Internet: " + klinter + "<br>");
    if (klinter == true) {
        document.write("<br>De klant meldt een probleem met Internet:");
        
        //nu.nl
        var nu = confirm("Kunt u browsen naar www.nu.nl?");

        if(nu==true) {
            document.write("<br> Browsen naar www.nu.nl lukt");
        } else {
            document.write("<br> Browsen naar www.nu.nl lukt niet");
            document.write("<br> <a href='internet_laden.html' target='blank_'>Klik hier als browsen niet lukt</a>");
        }

            //f5
            var f5 = confirm("Reageert de pagina snel na het indrukken van F5?");

            if(f5==true) {
                document.write("<br>De pagina reageert snel");
            } else {
                document.write("<br> De pagina reageert niet snel: " + f5);
                document.write("<br> <a href='snelheid_laden.html' target='blank_'>Klik hier als uw internet niet snel laad</a>");
            }
    } else {
        document.write("<br> De klant meldt geen probleem met Internet");
    } if (nu && f5) {
        document.write("<br>...U kunt browsen en uw pagina's laden snel. U heeft geen Internet probleem");
    }
    document.write("</fieldset>");


//klacht bellen - klbellen
var klbellen = confirm("Heeft u een klacht over internet & bellen? ");
document.write("<br /><fieldset><legend><b>Bellen</b></legend> Heeft de klant een klacht over Bellen: " + klbellen + "</br>");
    if (klinter == true) {
        document.write("<br>De klant meldt een probleem met Bellen:");
        
        //kiestoon
        var toon = confirm("Hoort u een kiestoon? ");

        if(toon==true) {
            document.write("<br> U hoort een kiestoon");
        } else {
            document.write("<br> U hoort geen kiestoon")
            document.write("<br> <a href='kiestoon.html' target='blank_'>Klik hier als u geen kiestoon hoort</a>");
        }

            //iemand anders bellen
            var bellen = confirm("Kunt u uzelf bellen bijvoorbeeld een mobiele nummer? ");

            if(bellen==true) {
                document.write("<br>De klant kan zichzelf bellen");
            } else {
                document.write("<br> De klant kan zichzelf niet bellen " + bellen);
                document.write("<br> <a href='kan_niet_bellen.html' target='blank_'>Klik hier als u niet kunt bellen</a>");
            }

            //mobiel bellen waar je klacht over hebt
            var klachtbel = confirm("Kunt u met uw mobiel het nummer bellen waar u een klacht over heeft? ");

            if(klachtbel==true) {
                document.write("<br>De klant kan met het nummer bellen waar hij een klacht over heeft");
            } else {
                document.write("<br> De klant kan niet met het nummer bellen waar hij een klacht over heeft " + klachtbel);
                document.write("<br> <a href='gebeld_worden.html' target='blank_'>Klik hier als u niet gebeld kunt worden</a>");
            }

    } else {
        document.write("<br> De klant meldt geen probleem met Internet & Bellen");
    }  if (toon && bellen && klachtbel) {
        document.write("<br>...U heeft een kiestoon, u kunt bellen en gebeld worden. U heeft geen Internet & Bellen probleem");
    }
    document.write("</fieldset>");

//klacht tv - kltv
var kltv = confirm("Heeft u een klacht over internet, tv & bellen? ");
document.write("<br><fieldset><legend><b>Televisie</b></legend>Heeft de klant een klacht over Televisie: " + kltv + "<br>");

    if (kltv == true) {
        document.write("<br>De klant meldt een probleem met Televisie:");
        
        //aantal televisies
        var toestellen = prompt("Hoeveel televisies heeft u? ");
        while (toestellen == "" || toestellen == null) {
        alert("U heeft deze vraag niet ingevuld");
        toestellen = prompt("Hoeveel televisies heeft u? ");
        }
        document.write("<br>Aantal televisie toestellen: " + toestellen);

        //splitter
        var splitter = confirm("Is uw splitter goed aangesloten? ");

            if(splitter==true) {
                document.write("<br>De splitter is goed aangesloten");
            } else {
                document.write("<br> De splitter is niet goed aangesloten ");
                document.write("<br> <a href='splitter.html' target='blank_'>Klik hier als uw splitter niet goed is aangesloten</a>");
            }

        //settopbox
        var settopbox = confirm("Is uw settopbox goed aangesloten? ");

            if(settopbox==true) {
                document.write("<br>De settopbox is goed aangesloten");
            } else {
                document.write("<br> De settopbox is niet goed aangesloten");
                document.write("<br> <a href='settopbox.html' target='blank_'>Klik hier als uw settopbox niet goed is aangesloten</a>");
            }

        //zenders
        var zenders = confirm("Kunt u de zenders goed vinden? ");

            if(zenders==true) {
                document.write("<br>U kunt de zenders goed vinden");
            } else {
                document.write("<br> U kunt de zenders niet goed vinden");
                document.write("<br> <a href='zenders.html' target='blank_'>Klik hier als u geen zenders kan vinden</a>");
            }

    } else {
        document.write("<br> De klant meldt geen probleem met Internet, TV & Bellen");
    } if (splitter && settopbox && zenders) {
        document.write("<br>...U heeft uw splitter en settopbox goed aangesloten en de zenders worden gevonden. U heeft geen Internet, TV & Bellen probleem");
    }
    document.write("</fieldset>");