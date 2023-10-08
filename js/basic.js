function setCookie(cname, cvalue, exdays) 
{
    const d = new Date();

    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

    let expires = "expires="+d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) 
{
    let name = cname + "=";
    let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++) 
    {
        let c = ca[i];
        while (c.charAt(0) == ' ') 
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) 
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var yearNum = 892;
var month = 2;
var day = 27;
var yearText = "It's 892 A.D.";
var gdp = 350;
var isWar = false;
var country = "Vseren";
var isCrash = false;

//sorry for the big function switch statements amr??
function TickTime()
{
    day++;
    //Makes sure dates are valid
    if(day < 1)
    {
        day = 1;
    }
    if(month < 1)
    {
        month = 1;
    }
    //Increments months
    switch(month)
    {
        //January
        case 1:
            if(day > 31)
            {
                month++;
                
                day = 1;
            }
            break;
        //February
        case 2:
            //Test for leap year, then adjusts math accordingly
            var leapYearTest = yearNum % 4;
            if (leapYearTest == 0)
            {
                console.log("tis leap year");
                if(day > 29)
                {
                    month++;
                    
                    day = 1;
                }
            }
            else
            {
                console.log("tis not a leap year");
                if(day > 28)
                {
                    month++;
                    
                    day = 1;
                }
            }
            break;
        //March
        case 3:
            if (day > 31)
            {
                month++;
                
                day = 1;
            }
            break;
        //April
        case 4:
            if (day > 30)
            {
                month++;
                
                day = 1;
            }
            break;
        //May
        case 5:
            if (day > 31)
            {
                month++;
                
                day = 1;
            }
            break;
        //June
        case 6:
            if (day > 30)
            {
                month++;
                
                day = 1;
            }
            break;
        //July
        case 7:
            if (day > 31)
            {
                month++;
                
                day = 1;
            }
            break;
        //August
        case 8:
            if (day > 31)
            {
                month++;
                
                day = 1;
            }
            break;
        //September
        case 9:
            if (day > 30)
            {
                month++;
                
                day = 1;
            }
            break;
        //October
        case 10:
            if (day > 31)
            {
                month++;
                
                day = 1;
            }
            break;
        //November
        case 11:
            if (day > 30)
            {
                month++;
                
                day = 1;
            }
            break;
        //December
        case 12:
            if (day > 31)
            {
                month++;
                
                day = 1;
            }
            break;
        default:
            console.log("Invalid Month");
            break;
    }
    if(month > 12)
    {
        yearNum++;
        month = 1;
    }
    yearText = day + " - " + month + " - " + yearNum + " A.D.";
    console.log(yearText);
    document.getElementById("year").innerHTML = yearText;
    TickGDP();
    document.getElementById("gdp").innerHTML = gdp / 100 + "trillion PDW"
}

function TickGDP()
{
    var newNum = 1;
    if(isWar == true)
    {
        newNum = newNum - 10;
    }
    if(country == "Vseren" && isCrash == true)
    {
        newNum = newNum - 25;
    }
    gdp = gdp + newNum;
}

function testLoadCookie()
{
    var test = getCookie("test");
    var new1 = getCookie("new");
    console.log(test);
    document.getElementById("testload").innerHTML = test;
    document.getElementById("year").innerHTML = new1;
}

function testSaveCookie()
{
    setCookie("test","wow",3650);
    setCookie("new","oo",10);
    console.log("Cookie Saved");
}