//Infantry and Tank Divisions (1,2)
var infDivs = 0;
var tankDivs = 0;

//Airborne Divisions (2,3)
var fjDivs = 0;
var bjDivs = 0;

//Naval Divisions (4)
var bsDivs;

//Misc.
var trainCount = 1;

function CreateDivision(type,count)
{
    switch(type)
    {
        //Infantry
        case 0:
            if(infEq >= 10 * count && supEq >= 5 * count)
            {
                infEq -= 10 * count;
                supEq -= 5 * count;
                infDivs++;
            }
            else
            {
                console.log("Not enough equipment!")
            }
            break;
        //Tank
        case 1:
            if(tanks >= 1 * count && supEq >= 5 * count)
            {
                tanks -= 1 * count;
                supEq -= 5 * count;
                tankDivs++;
            }
            else
            {
                console.log("Not enough equipment!")
            }
            break;
        //Fighter
        case 2:
            if(fjets >= 1 * count && supEq >= 5 * count)
            {
                fjets -= 1 * count;
                supEq -= 5 * count;
                fjDivs++;
            }
            else
            {
                console.log("Not enough equipment!")
            }
            break;
        //Bomber
        case 3:
            if(bjets >= 1 * count && supEq >= 5 * count)
            {
                bjets -= 10 * count;
                supEq -= 5 * count;
                bjDivs++;
            }
            else
            {
                console.log("Not enough equipment!")
            }
            break;
        //Battleship
        case 4:
            if(bships >= 1 * count && supEq >= 5 * count)
            {
                bships -= 1 * count;
                supEq -= 5 * count;
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
    UpdateMilUI();
}

function TrainAmount(amount)
{
    trainCount = amount;
}

function UpdateMilUI()
{
    document.getElementById("infDivs").innerHTML = infDivs;
}