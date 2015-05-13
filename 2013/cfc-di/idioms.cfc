component {

// Mixins
	property name="service1" inject;
	property name="service2" inject="id:CoolService";

// Constructor
	public any function init(service) {
		variables.service = service;
		return init;
	}
	
// Setters
	
	public any function setService(service) inject {
		variables.service = service;
		return;
	}
	

	
}