function Effect(id)
{
    switch(id)
    {
        case 1:
            if(country == "Vsera")
            {
                ppTurn -= 5;
            }
            else
            {
                ppTurn -= 4;
            }
            break;
        case 2:
            if(contry == "Vsera")
            {
                ppTurn -= 5;
            }
            else {
                ppTurn -= 4;
            }
        default:
            console.log("Event " + id + " has no effects");
            break;
    }
    SaveGame();
    UpdateUI();
}