var trainCount = 1;

function CreateDivision(type)
{
    switch(type)
    {
        //Infantry
        case 0:
            if(infEq >= 10 * trainCount && supEq >= 5 * trainCount)
            {
                infEq -= 10 * trainCount;
                supEq -= 5 * trainCount;
                infDivs++;
            }
            else
            {
                console.log("Not enough equipment!")
            }
            break;
        //Tank
        case 1:
            if(tanks >= 1 * trainCount && supEq >= 5 * trainCount)
            {
                tanks -= 1 * trainCount;
                supEq -= 5 * trainCount;
                tankDivs++;
            }
            else
            {
                console.log("Not enough equipment!")
            }
            break;
        //Fighter
        case 2:
            if(fjets >= 1 * trainCount && supEq >= 5 * trainCount)
            {
                fjets -= 1 * trainCount;
                supEq -= 5 * trainCount;
                fjDivs++;
            }
            else
            {
                console.log("Not enough equipment!")
            }
            break;
        //Bomber
        case 3:
            if(bjets >= 1 * trainCount && supEq >= 5 * trainCount)
            {
                bjets -= 10 * trainCount;
                supEq -= 5 * trainCount;
                bjDivs++;
            }
            else
            {
                console.log("Not enough equipment!")
            }
            break;
        //Battleship
        case 4:
            if(bships >= 1 * trainCount && supEq >= 5 * trainCount)
            {
                bships -= 1 * trainCount;
                supEq -= 5 * trainCount;
                bsDivs++;
            }
            else
            {
                console.log("Not enough equipment!")
            }
            break;
        //Invalid Type
        default:
            console.log("Not a valid division type!")
            break;
    }
    SaveGame();
    UpdateMilUI();
}

function TrainAmount(amount)
{
    trainCount = amount;
}

function UpdateMilUI()
{
    document.getElementById("infDivs").innerHTML = "Infantry: " + infDivs;
    document.getElementById("tankDivs").innerHTML = "Tanks: " + tankDivs;
    document.getElementById("fjDivs").innerHTML = "Fighters: " + fjDivs;
    document.getElementById("bjDivs").innerHTML = "Bombers: " + bjDivs;
    document.getElementById("bsDivs").innerHTML = "Battleships: " + bsDivs;
}