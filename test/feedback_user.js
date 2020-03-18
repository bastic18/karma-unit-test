/*
Log user feedback to a database.

INPUTS
- name
- email address
- feedback
- category
- createDatetime

var feedback = {
	name: "",
	email: "",
	feedback: "",
	category: "",
	createDatetime: ""	
};

OUTPUTS
- written to a database

FUNCTIONS
1. feedbackInput - collect the feedback & calls feedbackValidator, formatDateTime
2. saveFeedback - write the feedback to a database & calls feedbackInputs
3. feedbackValidator - no empty fields for the feedback & calls emailValidator
4. emailValidator - validates email
5. formatDateTime - ensures UTC standard is enforced

*/
// TESTING STARTS HERE
describe('The log user feedback to a database test case', function(){

	it('should have feedbackInut defined', function() {
		expect(feedbackInput).toBeDefined();
    });
    it('should have saveFeedback defined', function() {
		expect(saveFeedback).toBeDefined();
    });
    it('should have feedbackValidator defined', function() {
		expect(feedbackValidator).toBeDefined();
    });
    it('should have emailValidator defined', function() {
		expect(emailValidator).toBeDefined();
    });
    it('should have formatDateTime defined', function() {
		expect(formatDateTime).toBeDefined();
    });

	describe('should call the "feedbackInput" function', function(){
		beforeEach(function() {
		    var feedback = {
				name: "",
				email: "",
				description: "",
				category: "",
				createDatetime: ""	
			};
		});

		it('and this function should call the feedbackValidator function', function() {
			spyOn('feedbackValidator').andReturn(false);
			feedbackInput(feedback);
			expect(feedbackValidator).toBeCalled();
	    });


	    it('and this function should call the formatDateTime function', function() {
			spyOn('formatDateTime').andReturn(null);
			feedbackInput(feedback);
			expect(formatDateTime).toBeCalled();
	    });

	    it('and this function should return a success', function() {
	    	spyOn('feedbackValidator').andReturn(true);
	    	spyOn('formatDateTime').andReturn("20200316082030000000");
			var result = feedbackInput(feedback);
			expect(result).toBeTruthy();
	    });

	    it('and this function should return false when formatDateTime function fails', function() {
	    	spyOn('feedbackValidator').andReturn(true);
	    	spyOn('formatDateTime').andReturn("dfgikd");
			var result = feedbackInput(feedback);
			expect(result).toBeFalsy();
	    });

	    // THIS IS NOT A UNIT TEST AS THIS TEST GOES THROUGH TWO FUNCTIONS - feedbackInput & formatDateTime
	    it('and this function should return false when feedback.createDatetime is hello', function() {
	    	spyOn('feedbackValidator').andReturn(true);
	    	feedback.createDatetime = "hello";
			var result = feedbackInput(feedback);
			expect(result).toBeFalsy();
	    });

	    it('and this function should return a success for dates in the past', function() {
	    	spyOn('feedbackValidator').andReturn(true);
	    	spyOn('formatDateTime').andReturn("18500316082030000000");
	    	console.log(feedback.createDatetime);
			var result = feedbackInput(feedback);
			expect(result).toBeTruthy();
	    });
	});

	describe('should call the "saveFeedback" function', function(){

		beforeEach(function() {


			var mysql = require('mysql');

			var con = mysql.createConnection({
			  host: "localhost",
			  user: "yourusername",
			  password: "yourpassword",
			  database: "mydb"
			});

			con.connect(function(err) {
			  if (err) throw err;
			  console.log("Connected!");
			  var sql = "CREATE TABLE feedback (name VARCHAR(255), email VARCHAR(255) , description VARCHAR(255), category VARCHAR(255),  createDatetime VARCHAR(255))";
			  con.query(sql, function (err, db_result) {
			    if (err) throw err;
			    console.log("Table created");
			  });
			});


			function add(val1,val2,val3,val4,val5){
	con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, email, description, category, createdateTime) VALUES ?";
  var values = [val1, val2, val3,val4,val5 ];
  con.query(sql, [values], function (err, db_result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

}

		    var feedback = {
				name: "",
				email: "",
				description: "",
				category: "",
				createDatetime: ""	
			};
		});

		it('and this function should call the feedbackInput function', function() {
		feedbackInput(feedback);
		spyOn('feedbackInput').andReturn(false);	
		expect(feedbackInput).toBeCalled();
	    });

	    it('and this function should return false when feedbackinput  function fails', function() {
	    
	    spyOn('feedbackInput').andReturn(false);
		var result = feedbackInput("whatupp");
		expect(result).toBeFalsy();
	    });


	    it('and this function should return true when feedbackinput  function is true', function() {
	    
	    spyOn('feedbackInput').andReturn(true);
		var result = pyOn('feedbackInput').andReturn({
				name: "alex",
				email: "blade@gmail.com",
				description: "holidae in",
				category: "upper class",
				createDatetime: "21/03/2020"	
			});
		expect(result).toBeTruthy();
		expect(add(result[0],result[1],result[2],result[3], result[4])).toBeTruthy();

	    });


	   it('and this function should return false when feedbackinput  function fails', function() {
	    
	    spyOn('feedbackInput').andReturn(false);
		var result = spyOn('feedbackInput').andReturn({
				name: "",
				email: "",
				description: "holidae in",
				category: "uper class",
				createDatetime: "21/03/2020"	
			});
		expect(result).toBeFalsy();
		expect(add(result[0],result[1],result[2],result[3], result[4])).toBeFalsy();
	    });



	});

	describe('should call the "feedbackValidator" function', function(){


	beforeEach(function() {
		    var feedback = {
				name: "",
				email: "",
				description: "",
				category: "",
				createDatetime: ""	
			};
		});

		it('and this function should return true when emailValidator  function is  and there exist no empty fields', function() {
	    
	    spyOn('emailValidator').andReturn(true);
	    expect(emailValidator).toBeCalled();
		var result = spyOn('feedbackInput').andReturn({
				name: "alex",
				email: "blade@gmail.com",
				description: "holidae in",
				category: "upper class",
				createDatetime: "21/03/2020"	
			});
		expect(result).toBeTruthy();
		expect(result['name']).not.toBe(null);
		expect(result['email']).not.toBe(null);
		expect(result['description']).not.toBe(null);
		expect(result['category']).not.toBe(null);
		expect(result['createDatetime']).not.toBe(null);
		expect(emailValidator).toBeCalled();
		expect(feedbackInput).toHaveBeenCalled();
		

	    });



	    it('and this function should return false when emailValidator  function is false and there exist no empty fields', function() {
	    
	    spyOn('emailValidator').andReturn(false);
	    expect(emailValidator).toBeCalled();
		var result = spyOn('feedbackInput').andReturn({
				name: "alex",
				email: "blade",
				description: "holidae in",
				category: "upper class",
				createDatetime: "21/03/2020"	
			});
		expect(result['name']).not.toBe(null);
		expect(result['email']).not.toBe(null);
		expect(result['description']).not.toBe(null);
		expect(result['category']).not.toBe(null);
		expect(result['createDatetime']).not.toBe(null);
		expect(result).toBeFalsy();
		expect(feedbackInput).toHaveBeenCalled();
		

	    });



	    it('and this function should return false when emailValidator function is true and there exist an empty fields', function() {
	    
	    spyOn('emailValidator').andReturn(true);
	    expect(emailValidator).toBeCalled();
		var result = spyOn('feedbackInput').andReturn({
				name: "",
				email: "blade@gmail.com",
				description: "holidae in",
				category: "upper class",
				createDatetime: "21/03/2020"	
			});
		expect(result['name']).toBe(null);
		expect(result['name']).toBeFalsy;
		expect(result['email']).not.toBe(null);
		expect(result['description']).not.toBe(null);
		expect(result['category']).not.toBe(null);
		expect(result['createDatetime']).not.toBe(null);
		expect(result).toBeFalsy();
		expect(feedbackInput).toHaveBeenCalled();
		

	    });


	    it('and this function should return false when emailValidator function is true and there exist an empty fields', function() {
	    
	    spyOn('emailValidator').andReturn(true);
	    expect(emailValidator).toBeCalled();
		var result = spyOn('feedbackInput').andReturn({
				name: "bas",
				email: "blade@gmail.com",
				description: "",
				category: "upper class",
				createDatetime: "21/03/2020"	
			});
		expect(result['name']).not.toBe(null);
		expect(result['email']).not.toBe(null);
		expect(result['description']).toBe(null);
		expect(result['description']).toBeFalsy;
		expect(result['category']).not.toBe(null);
		expect(result['createDatetime']).not.toBe(null);
		expect(result).toBeFalsy();
		expect(feedbackInput).toHaveBeenCalled();
		

	    });

	    it('and this function should return false when emailValidator function is true and there exist an empty fields', function() {
	    
	    spyOn('emailValidator').andReturn(true);
	    expect(emailValidator).toBeCalled();
		var result = spyOn('feedbackInput').andReturn({
				name: "bas",
				email: "blade@gmail.com",
				description: "holidaee innn",
				category: "",
				createDatetime: "21/03/2020"	
			});
		expect(result['name']).not.toBe(null);
		expect(result['email']).not.toBe(null);
		expect(result['description']).toBe(null);
		expect(result['category']).toBe(null);
		expect(result['category']).toBeFalsy;
		expect(result['createDatetime']).not.toBe(null);
		expect(result).toBeFalsy();
		expect(feedbackInput).toHaveBeenCalled();
		

	    });


	    it('and this function should return false when emailValidator function is true and there exist an empty fields', function() {
	    
	    spyOn('emailValidator').andReturn(true);
	    expect(emailValidator).toBeCalled();
		var result = spyOn('feedbackInput').andReturn({
				name: "bas",
				email: "blade@gmail.com",
				description: "holidaee innn",
				category: "",
				createDatetime: "21/03/2020"	
			});
		expect(result['name']).not.toBeNull();
		expect(result['email']).not.toBeNull();
		expect(result['description']).toBeNull();
		expect(result['category']).not.toBeNull();
		expect(result['createDatetime']).toBeNull();
		expect(result['createDatetime']).toBeFalsy;
		expect(result).toBeFalsy();
		expect(feedbackInput).toHaveBeenCalled();
		

	    });








	});

	describe('should call the "emailValidator" function', function(){



        beforeEach(function(){
            var email = "";
          });
          it('and this function should return success when email format is correct',function(){
            email = "test@email.com";
            var result = emailValidator(email);
            expect(result).toBeTruthy;
          });
    
          it('and this function should return false when email is testemailcom',function(){
            email = "testemailcom";
            var result = emailValidator(email);
            expect(result).toBeFalsy;
		  });
		  it('and this function should return false when email is testemailcom',function(){
            email = " ";
            var result = emailValidator(email);
            expect(result).not.toBeNull();
          });
    
          it('and this function should check to see if the format of a email is correct',function(){
            email = "test@email.com";
            expect(email).toMatch('/^w+([.-]?w+)@w+([.-]?w+)(.w{2,3})+$/');
          });





	});



	describe('should call the "formatDateTime" function', function(){

	
	
	 beforeEach(function(){
        var createDatetime = "";
      });




		    it('and this function should return a success', function() {
	    	
	    	var result= spyOn('formatDateTime').andReturn("202003170820");

			expect(result).not.toBeNull();
	    });


		    it('and this function should return a fail', function() {
	    	
	    	var result = spyOn('formatDateTime').andReturn("dfguiokohgffgh");
			expect(result).toBeFalsy();
	    });


	    		    it('and this function should return a fail', function() {
	    	
	    	var result= spyOn('formatDateTime').andReturn(" ");
			expect(result).toBeFalsy();
		});
		

		it('and this function should check to see if the format of a createDatetime is correct',function(){
            createDatetime = "202003170820";
            expect(email).toMatch('[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}[0-9]{2}[0-9]{2}');
          });



	    		    it('and this function should return a fail', function() {
	    	
	    	var result= spyOn('formatDateTime').andReturn("2020/03/17-2020/03/20");
			expect(result).toBeFalsy();
	    });







	});
});