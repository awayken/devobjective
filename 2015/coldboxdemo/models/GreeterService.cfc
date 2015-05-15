/**
* I am a new Model Object
*/
component singleton {

	GreeterService function init(){

		return this;
	}

	/**
	* sayHello
	*/
	function sayHello(){
		return 'Hey, you sexy thing!';
	}


}
