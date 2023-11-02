var eventsFull = "";

function SaveEvents()
{
    setCookie("events",eventsFull,3650);
}

function LoadEvents()
{
    TickEvent();
    document.getElementById("events").innerHTML = getCookie("events");
}

function TickEvent()
{
    switch(Number(getCookie("turn")))
    {
        case 5:
            AppendEvent(0);
            break;
        case 20:
            AppendEvent(1);
            break;
    }
    console.log(Number(getCookie("turn")));
    SaveEvents();
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
    }
}