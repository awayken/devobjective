component extends="testbox.system.testing.BaseSpec"{

// executes before all suites
    function beforeAll(){
        variables.car = createObject( 'component', expandPath('/testingtesting/com/beans/car.cfc') );
    }

// executes after all suites
    function afterAll(){}

// All suites go in here
    function run(){
        writeDump( variables.car );
        abort;
        describe("A car", function(){
            it('should exists', function() {
                expect( variables.car ).toExist();
            });

            it('has four wheels', function(){
                  expect( true ).toBe( true );
                //expect( this.car.wheels ).toExist();
                //expect( this.car.wheels ).toBeArray();
                //expect( this.car.wheels ).toHaveLength( 4 );
            });
        });
    }
}
