component name='Car' accessors='true' {

    property name='color' default='';

    function init() {
        return this;
    }

    function describe() {
        return 'This car is ' & getColor();
    }

}
