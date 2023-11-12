//  Majors
//Vsera - VSE
var vseAlliance = "Colonial Pact";

//Altfordia - ALT
var altAlliance = "Colonial Pact";

//Polosia - POL
var polAlliance = "Colonial Pact";

//Salmadirkia - SAL
var salAlliance;

//Povosechia - POV
var povAlliance;

//Karmeyskia - KAR
var karAlliance;

//Tinia - TIN
var tinAlliance;

//Baspola - BAS
var basalliance;

//  Minors
//Cartigabia - CAR
var carAlliance;
var carIsIndependent = false;

//Egavnia - EGA
var egaAliance;
var egaIsIndependent = false;

//Lourum - LOU
var louAlliancel
var louIsIndependent = false;

//Platie - PLA
var plaAlliance;
var plaIsIndependent = false;

//Chille - NCH/SCH
var nchAlliance;

var schAlliance;

//Panvilla - PAN
var panAlliance;

//Briarce - BRI
var briAlliance;

//Ignenia - IGN
var ignAlliance;

function JoinAlliance(country,alliance)
{
    switch(country)
    {
        case "pol":
            polAlliance = alliance;
            break;
        case "vse":
            vseAlliance = alliance;
            break;
        case "alt":
            altAlliance = alliance;
            break;
    }
}