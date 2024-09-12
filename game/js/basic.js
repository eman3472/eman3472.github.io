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

function IncrementDay()
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
}

function TickTime()
{
    for(let i = 0; i < 5; i++)
    {
        IncrementDay();
    }
    turn += 5;
    //  Decides if event has happened, and sets the event to unread.
    if (turn >= 5)
    {
        event0Read = false;
        location.reload();
        console.log(event0Read);
    }
    if (turn >= 20)
    {
        event1Read = false;
        console.log(event1Read);
    }
    if (turn >= 30)
    {
        event1Read = false;
        console.log(event1Read);
    }
    TickPP();
    TickManpower();
    TickResources();
    console.log(turn);
    SaveGame();
    UpdateUI();
}

function TickPP()
{
    pp += ppTurn;
}

function TickManpower()
{
    if(manpower < 99999)
    {
        manpower += manpowerTurn;
    }
}

function UpdateUI()
{
    //makes manpower a decimal
    var manpowerDecimal = manpower / 100;

    //Loads UI elements that be shown with just the variable + some extra flavour text
    document.getElementById("year").innerHTML = month + " - " + day + " - " + year + " A.D.";
    document.getElementById("gdp").innerHTML = pp + "pp";
    document.getElementById("manpower").innerHTML = manpowerDecimal + " Million Manpower";
    document.getElementById("oil").innerHTML = "Oil: " + oil;
    document.getElementById("steel").innerHTML = "Steel: " + steel;
    document.getElementById("aluminum").innerHTML = "Aluminum: " + aluminum;
    document.getElementById("inf").innerHTML = infEq + " Infantry Equipment";
    document.getElementById("sup").innerHTML = supEq + " Support Equipment";
    document.getElementById("tank").innerHTML = tanks + " Tanks";
    document.getElementById("fjet").innerHTML = fjets + " Fighter Jets";
    document.getElementById("bjet").innerHTML = bjets + " Bomber Jets";
    document.getElementById("bship").innerHTML = bships + " Battleships";

    //Let player know if there is a new event
    if (event0Read == false)
    {
        document.getElementById("eventsButton").outerHTML = "<button id='eventsButton' class='button button3' onclick='OpenHistory()'>Events</button>";
        console.log(event0Read);
    }
    if (event1Read == false)
    {
        document.getElementById("eventsButton").outerHTML = "<button id='eventsButton' class='button button3' onclick='OpenHistory()'>Events</button>";
        console.log(event1Read);
    }
    if (event2Read == false)
    {
        document.getElementById("eventsButton").outerHTML = "<button id='eventsButton' class='button button3' onclick='OpenHistory()'>Events</button>";
        console.log(event2Read);
    }
    else
    {
        document.getElementById("eventsButton").outerHTML = "<button id='eventsButton' class='button button2' onclick='OpenHistory()'>Events</button>";
    }
}

function SaveGame()
{
    //Date
    setCookie("year",year,3650);
    setCookie("month",month,3650);
    setCookie("day",day,3650);

    //Currencies
    setCookie("pp",pp,3650);
    setCookie("manpower",manpower,3650);

    //Equipment
    setCookie("infeq",infEq,3650);
    setCookie("supeq",supEq,3650);
    setCookie("tanks",tanks,3650);
    setCookie("fjets",fjets,3650);
    setCookie("bjets",bjets,3650);
    setCookie("bships",bships,3650);

    //Turn
    setCookie("turn",turn,3650);
    setCookie("ppTurn",ppTurn,3650);
    setCookie("manpowerTurn",manpowerTurn,3650);

    //Resources
    setCookie("oil",oil,3650);
    setCookie("steel",steel,3650);
    setCookie("aluminum",aluminum,3650);

    setCookie("oilWells",oilWells,3650);
    setCookie("steelMines",steelMines,3650);
    setCookie("aluminumMines",aluminumMines,3650);

    setCookie("oilEfficiency",oilEfficiency,3650);
    setCookie("steelEfficiency",steelEfficiency,3650);
    setCookie("aluminumEfficiency",aluminumEfficiency,3650);

    //Divisions
    setCookie("infDivs",infDivs,3650);
    setCookie("tankDivs",tankDivs,3650);
    setCookie("fjDivs",fjDivs,3650);
    setCookie("bjDivs",bjDivs,3650);
    setCookie("bsDivs",bsDivs,3650);

    //Events
    setCookie("event0Read",event0Read,3650);
    setCookie("event1Read",event1Read,3650);
    setCookie("event2Read",event2Read,3650);
}

function LoadGame(updateUI,milUI)
{
    //Date
    year = Number(getCookie("year"));
    month = Number(getCookie("month"));
    day = Number(getCookie("day"));

    //Currencies
    pp = Number(getCookie("pp"));
    manpower = Number(getCookie("manpower"));

    //Equipment
    infEq = Number(getCookie("infeq"));
    supEq = Number(getCookie("supeq"));
    tanks = Number(getCookie("tanks"));
    fjets = Number(getCookie("fjets"));
    bjets = Number(getCookie("bjets"));
    bships = Number(getCookie("bships"));

    //Turn
    turn = Number(getCookie("turn"));
    ppTurn = Number(getCookie("ppTurn"));
    manpowerTurn = Number(getCookie("mapowerTurn"));

    //Resources
    oil =  Number(getCookie("oil"));
    steel =  Number(getCookie("steel"));
    aluminum =  Number(getCookie("aluminum"));

    oilWells =  Number(getCookie("oilWells"));
    steelMines =  Number(getCookie("steelMines"));
    aluminumMines =  Number(getCookie("aluminumMines"));

    oilEfficiency =  Number(getCookie("oilEfficiency"));
    steelEfficiency =  Number(getCookie("steelEfficiency"));
    aluminumEfficiency =  Number(getCookie("aluminumEfficiency"));

    //Divisions
    infDivs =  Number(getCookie("infDivs"));
    tankDivs = Number(getCookie("tankDivs"));
    fjDivs =  Number(getCookie("fjDivs"));
    bjDivs =  Number(getCookie("bjDivs"));
    bsDivs =  Number(getCookie("bsDivs"));

    //Events
    event0Read = Boolean(getCookie("event0Read"));
    event1Read = Boolean(getCookie("event1Read"));
    event2Read = Boolean(getCookie("event2Read"));

    //Resets game if there is no cookie
    if(Number(getCookie("year")) == 0)
    {
        year = 1970;
        month = 5;
        day = 10;
        turn = 0;
        pp = 360;
        ppTurn = 5;
        manpower = 3167;
        manpowerTurn = 5;
        infeq = 0;
        supeq = 0;
        tanks = 0;
        fjets = 0;
        bjets = 0;
        bships = 0;
        oil = 50;
        steel = 50;
        aluminum = 50;
        oilWells = 3;
        steelMines = 5;
        aluminumMines = 4;
        oilEfficiency = 1;
        steelEfficiency = 1;
        aluminumEfficiency = 1;
        infDivs = 0;
        tankDivs = 0;
        fjDivs = 0;
        bjDivs = 0;
        bsDivs = 0;
        event0Read = true;
        event1Read = true;
        event2Read = true;
    }
    if(updateUI)
    {
        UpdateUI();
    }
    if(milUI)
    {
        UpdateMilUI();
    }
}

function OpenHistory()
{
    SaveGame();
    window.location.href='history.html';
}
function OpenDiplo()
{
    SaveGame();
    window.location.href='diplomacy.html';
}
function OpenWar()
{
    SaveGame();
    window.location.href='war.html';
}
function OpenTrade()
{
    SaveGame();
    window.location.href='trade.html';
}
function OpenEspionage()
{
    SaveGame();
    window.location.href='espionage.html';
}
function OpenMilitary()
{
    SaveGame();
    window.location.href='military.html';
}
function ClosePage()
{
    window.location.href='game.html';
}

function ResetGame()
{
    setCookie("year",0,3650)
    LoadGame();
}