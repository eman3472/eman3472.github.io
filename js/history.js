﻿function LoadEvents()
{
    switch(Number(getCookie("pureDay")))
    {
        case 1:
            AppendEvents(0);
            break;
        case 2:
            AppendEvents(0);
            AppendEvents(1);
            break;
        default:
            break;
    }
    console.log(Number(getCookie("pureDay")));
}

function AppendEvents(id)
{
    document.getElementById("events").innerHTML += "<button class='button button2'>Test</button>\n";
}