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
            if(pp >= 5)
            {
                pp -= 5;
                supEq += 5;
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