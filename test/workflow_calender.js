describe ('Workflow', function(){

beforeEach(function(){
  var date= '<div id="date> <input id="date_1" type="text">'+
  '<input id="date_2" type="text">'+
  '<input id="show_cal" type="button" value="display workflow" >'+
  'Result: <span id="calender"/> </div>';

  document.body.insertAdjacentHTML(

'afterbegin', date );
  });


afterEach(function(){
    
document.body.removeChild(document.getElementById('fixture'));
});


beforeEach(function (){
    window.calender.init();

});


it('should return list of jobs between two dates in ascending order of time', function(){
    document.getElementByID('date_1').value= '3/15/2020';
    document.getElementByID('date_2').value= '3/21/2020';
    document.getElementByID('show_cal').click();
    expect(document.getElementByID('calender').innterHTML.toBe(expect.arrayContaining(['Event Name', 'Date', 'Type'])));

});


it('should return list of jobs between two dates in ascending order of time', function(){
    expect(document.getElementByID('date_1').value).toBeNull;
    expect(document.getElementByID('date_2').value).toBeNull;
    document.getElementByID('show_cal').click();
    expect(document.getElementByID('calender').innterHTML).toBeNull();

});

it('should return list of jobs  if end date is provided but no start date. start date will be current date', function(){
    document.getElementByID('date_2').value= "3/23/2020";
    document.getElementByID('show_cal').click();
    expect(document.getElementByID('calender').innterHTML.toBe("incorrect date"));

});


it('should return list of jobs from start date  to one week ahead if no end date is provided. The end date will automatically be 1 week away', function(){
    document.getElementByID('date_1').value= "3/15/2020";
    document.getElementByID('show_cal').click();
    expect(document.getElementByID('calender').innterHTML.toBe("incorrect date"));

});


it('should return no jobs if date is incorrect and display error message', function(){
    document.getElementByID('date_1').value= 3/15/2020;
    document.getElementByID('date_2').value= "helloo";
    document.getElementByID('show_cal').click();
    expect(document.getElementByID('calender').innterHTML.toBe("incorrect date"))

});

it('should return no jobs if date is incorrect and display error message', function(){
    document.getElementByID('date_1').value= 123;
    document.getElementByID('date_2').value= "helloo";
    document.getElementByID('show_cal').click();
    expect(document.getElementByID('calender').innterHTML.toBe("incorrect date"));

});


});