﻿var infEq = 0;
var supEq = 0;
var tanks = 0;
var fjets = 0;
var bjets = 0;
var bships = 0;

function PurchaseEQ(id)
{
    switch(id)
    {
        case 0:
            if(pp >= 10)
            {
                pp -= 10;
                infEq += 10;
            }
            else
            {
                console.log("You poor");
            }
            break;

        case 1:
            if(pp >= 10)
            {
                pp -= 10;
                supEq += 10;
            }
            else
            {
                console.log("You poor");
            }
            break;

        case 2:
            if(pp >= 100)
            {
                pp -= 100;
                tanks++;
            }
            else
            {
                console.log("You poor");
            }
            break;

        case 3:
            if(pp >= 250)
            {
                pp -= 250;
                fjets++;
            }
            else
            {
                console.log("You poor");
            }
            break;
        
        case 4:
            if(pp >= 260)
            {
                pp -= 260;
                bjets++;
            }
            else
            {
                console.log("You poor");
            }
            break;
        
        case 5:
            if(pp >= 350)
            {
                pp -= 350;
                bships++;
            }
            else
            {
                console.log("You poor");
            }
            break;

            default:
                console.log("You messed up");
    }
    UpdateUI();
}