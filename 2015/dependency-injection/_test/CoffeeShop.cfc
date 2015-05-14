component extends="testbox.system.basespec" {

    function setup(){
        // mock some owner
        mockOwner = getMockBox().createEmtpyMock("Owner");
        // create our coffee shop class with mocking capabilities
        shop = getMockBox().createMock("CoffeeShop").init(mockOwner);
        // mock the espresso machine
        mockMachine = getMockBox().createEmptyMock("EspressoMachine");
        // inject to the shop's variables scope to simulate DI
        shop.$property("espressoMachine","variables",mockMachine);
    }

    function testMakeEspresso(){
        // mock methods
        mockMachine.$("makeEspresso", createStub());
         // test
        shop.makeEspresso();
        assertTrue( mockMachine.$once('makeEspresso') );
    }

    function testOpenShop(){
        //mocks
        mockMachine.$("turnOn");
        mockOwner.$("nap");
        // test
        shop.openShop();
        assertTrue( mockMachine.$once('turnOn') );
        assertTrue( mockOwner.$once('nap') );
    }

}
