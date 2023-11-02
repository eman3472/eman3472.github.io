﻿function SaveEvents()
{
    setCookie("events",document.getElementById("events").innerHTML,3650);
    console.log(document.getElementById("events").innerHTML);
}

function LoadEvents()
{
    document.getElementById("events").innerHTML = getCookie("events");
    TickEvent();
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
            document.getElementById("events").innerHTML += event0;
            break;
        case 1: //First Market Crash (will have effect)
            document.getElementById("events").innerHTML += event1;
            break;
    }
}