component name='CoffeeShop' singleton {
    // define a property and tell WireBox to inject it
    property name='espressoMachine' inject='id:espressoMachine';

    function init( any owner inject ) {
        variables.owner = arguments.owner;
        return this;
    }

    function openShop() onDIComplete {
        espressoMachine.turnOn();
        owner.nap();
    }

    function setCashRegister( cashRegister ) inject='id' {
        variables.cashRegister = arguments.cashRegister;
    }

    function makeEspresso() {
        return espressoMachine.makeEspresso();
    }
}
