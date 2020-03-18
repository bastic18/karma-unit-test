
/*
Log user feedback to a database.

INPUTS
- name
-company
- price
- quantity
-amnt
- createDatetime
-item

var invoice = {
	name: "",
    item:"",
    company:"";
	price: "",
	quantity: "",
    amnt:"",
	createDatetime: ""	
};

OUTPUTS
- written to a database

FUNCTIONS
1. clientInfo - collects clients information & calls infoValidator, formatDateTime
2. saveInvoice - write the invoice to a database & calls clientInfo
3. infoValidator - no empty fields for the clientInfo
4. calAmount - calculates the amount that should be charged 
5. formatDateTime - ensures UTC standard is enforced
6. sendInvoice - this sends the invoive to the client
7. getPriceQuan - Gets the price and quantity from the user


*/



// TESTING STARTS HERE
describe('The log company information to a database test case', function(){

	it('should have clientInfo defined', function() {
		expect(clientInfo).toBeDefined();
    });
    it('should have saveInfo defined', function() {
		expect(saveInfo).toBeDefined();
    });
    it('should have infoValidator defined', function() {
		expect(infoValidator).toBeDefined();
    });
    it('should have calAmount defined', function() {
		expect(calAmount).toBeDefined();
    });
    it('should have formatDateTime defined', function() {
		expect(formatDateTime).toBeDefined();
    });

	describe('should call the "clientInfo" function', function(){
		beforeEach(function() {
		    var invoice = {
                name: "",
                item:"",
                company:"",
                price: "",
                quantity: "",
                amnt:"",
                createDatetime: ""	
			};
		});

		it('and this function should call the infoValidator function', function() {
			spyOn('infoValidator').andReturn(false);
			infoInput(invoice);
			expect(infoValidator).toBeCalled();
	    });

	    it('and this function should call the formatDateTime function', function() {
			spyOn('formatDateTime').andReturn(null);
			feedbackInput(invoice);//Ask about this
			expect(formatDateTime).toBeCalled();
	    });

	    it('and this function should return a success', function() {
	    	spyOn('infoValidator').andReturn(true);
	    	spyOn('formatDateTime').andReturn("20200316082030000000");
			var result = clientInfo(invoice);
			expect(result).toBeTruthy();
	    });

	    it('and this function should return false when formatDateTime function fails', function() {
            spyOn('infoValidator').andReturn(true);
	    	spyOn('formatDateTime').andReturn("dkidfgkifid");
			var result = clientInfo(invoice);
			expect(result).toBeFalsy();
	    });

	    it('and this function should return a success for dates in the past', function() {
	    	spyOn('clientInfo').andReturn(true);
	    	spyOn('formatDateTime').andReturn("18500316082030000000");
	    	console.log(invoice.createDatetime);
			var result = clientInfo(invoice);
			expect(result).toBeTruthy();
	    });
	});

	describe('should call the "saveInvoice" function', function(){
        beforeEach(function() {
		    var invoice = {
                name: "",
                item:"",
                company:"",
                price: "",
                quantity: "",
                amnt:"",
                createDatetime: ""	
            };
            
        });
            it('and this function should return save', function() {
	    	spyOn('clientInfo').andReturn(true);
	    	spyOn('formatDateTime').andReturn("20200316082030000000");
			var result = clientInfo(invoice);
			expect(result).toBeTruthy();
            });
            

            it('and this function should return save', function() {
	    	spyOn('clientInfo').andReturn(true);
	    	spyOn('formatDateTime').andReturn("20200316082030000000");
			var result = clientInfo(invoice);
			expect(result).toBeTruthy();
            });

            it('and this function should return incorrect date when formatDateTime function fails', function() {
            spyOn('infoValidator').andReturn(true);
	    	spyOn('formatDateTime').andReturn("dkidfgkifid");
			var result = clientInfo(invoice);
			expect(result).toBeFalsy();
            });

            it('and this function should return incorrect name when infoValidator function fails', function() {
            spyOn('infoValidator').andReturn(true);
	    	spyOn('clientInfo').andReturn("false");
			var result = clientInfo(invoice);
			expect(result).toBeFalsy();
            
    });
});

	describe('should call the "clientInfo" function', function(){
        beforeEach(function() {
		    var invoice = {
                name: "",
                item:"",
                company:"",
                price: "",
                quantity: "",
                createDatetime: ""	
			};

           
    });
});

	describe('should call the "calAmount" function', function(){
        beforeEach(function() {
		    var invoice = {
                name: "",
                item:"",
                company:"",
                price: "",
                quantity: "",
                amnt:"",
                createDatetime: ""	
            };
            
        });

    
});

	describe('should call the "formatDateTime" function', function(){
        beforeEach(function() {
		    var invoice = {
                name: "",
                item:"",
                company:"",
                price: "",
                quantity: "",
                createDatetime: ""	
			};

	});
});


});