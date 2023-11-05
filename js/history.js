var eventsFull = "";

function LoadEvents()
{
    TickEvent();
    document.getElementById("events").innerHTML = getCookie("events");
}

function TickEvent()
{
    let tempTurn = Number(getCookie("turn"));
    if(tempTurn >= 5)
    {
        AppendEvent(0);
    }
    if(tempTurn >= 20)
    {
        AppendEvent(1);
        Effect(1);
    }
    if(tempTurn >= 30)
    {
        AppendEvent(2);
        Effect(2);
    }
    console.log(Number(getCookie("turn")));
    console.log(eventsFull);
    setCookie("events",eventsFull,3650);
}

function AppendEvent(id)
{
    switch(id)
    {
        case 0: //Vseren decolonisation (no effect)
            eventsFull += event0;
            break;
        case 1: //First Market Crash (will have effect)
            eventsFull += event1;
            break;
        case 2: //Black Monday
            eventsFull += event2;
            break;
    }
}