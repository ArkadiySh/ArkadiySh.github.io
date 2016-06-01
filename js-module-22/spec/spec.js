var pow = require('../js/src/pow.js')


describe('pow', function() {

  it('should calculate the power of a positive number', function() {
  	var result;
  	result = pow(2, 2);
    expect(result).toBe(4); 
	});

  it('should calculate the power of a negative number', function() {
  	var result;
  	result = pow(-5, 3);
    expect(result).toBe(-125);
  });

  it('should calculate the negative power of a positive number', function() {
  	var result;
  	result = pow(5, -3);
    expect(result).toBe(0.04); 
  });

  it('checks if parameters isNaN', function() {
  	var result;
  	result = pow('f', 2);
    expect(result).toBe('Enter correct numbers'); 
  });
});