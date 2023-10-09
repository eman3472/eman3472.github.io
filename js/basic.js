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

var year = 1967;
var month = 1;
var day = 1;
var yearText = "It's 892 A.D.";
var pp = 350;
var manpower = 3174;
var isAtWar = false;
var country = "Vseren";
var isCrash = false;

//sorry for the big function, switch statements amr??
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
            var leapYearTest = year % 4;
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
            console.log("month");
            break;
    }
    if(month > 12)
    {
        year++;
        month = 1;
    }
    
    TickPP();
    TickManpower();
    UpdateUI();
}

function TickPP()
{
    pp = pp + 1;
}

function TickManpower()
{
    if(manpower < 99999)
    {
        manpower = manpower + 1;
    }
}

function UpdateUI()
{
    var manpowerDecimal = manpower / 100;
    console.log(manpowerDecimal);
    document.getElementById("year").innerHTML = day + " - " + month + " - " + year + " A.D.";
    document.getElementById("gdp").innerHTML = pp + "pp";
    document.getElementById("manpower").innerHTML = manpowerDecimal + " Million Manpower";
}

function SaveGame()
{
    setCookie("year",year,3650);
    console.log(getCookie("year") + " Cookie has been saved. (year)");
    setCookie("month",month,3650);
    console.log(getCookie("month") + " Cookie has been saved. (month)");
    setCookie("day",day,3650);
    console.log(getCookie("day") + " Cookie has been saved. (day)");
    setCookie("pp",pp,3650);
    console.log(getCookie("pp") + " Cookie has been saved. (pp)");
    setCookie("manpower",manpower,3650);
    console.log(getCookie("manpower") + " Cookie has been saved. (manpower)");
}

function LoadGame()
{
    year = Number(getCookie("year"));
    console.log("Cookie has been loaded. (year)");
    month = Number(getCookie("month"));
    console.log("Cookie has been loaded. (month)");
    day = Number(getCookie("day"));
    console.log("Cookie has been loaded. (day)");
    pp = Number(getCookie("pp"));
    console.log("Cookie has been loaded. (pp)");
    manpower = Number(getCookie("manpower"));
    console.log("Cookie has been loaded. (manpower)");
    UpdateUI();
}

function testLoadCookie()
{
    var test = getCookie("test");
    console.log(test);
    document.getElementById("testload").innerHTML = test;
}

function testSaveCookie()
{
    setCookie("test","wow",3650);
    console.log("Cookie Saved");
}