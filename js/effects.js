function Effect(id)
{
    switch(id)
    {
        case 1:
            if(country == 0)
            {
                ppTurn -= 5;
            }
            else
            {
                ppTurn -= 4;
            }
            break;
        case 2:
            if(country == 0)
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
}