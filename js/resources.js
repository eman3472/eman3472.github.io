//Resource 'Extractors'
var oilWells = 5;
var steelMines = 5;
var aluminumMines = 5;

//Resources
var oil = 50;
var steel = 50;
var aluminum = 50;

//Resource per Well/Mine
var oilEfficiency = 1;
var steelEfficiency = 1;
var aluminumEfficiency = 1;

function TickResources()
{
    oil += oilWells * oilEfficiency;
    steel += steelMines * steelEfficiency;
    aluminum += aluminumMines * aluminumEfficiency;
}