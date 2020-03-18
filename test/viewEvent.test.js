/* 
VIEW UPCOMING EVENTS
INPUTS
- eventPeriod
- event Category

OUTPUTS
- events displayed

var event = {
    id: ""
    name: ""
    category: ""
    date: ""
    room: []  //would be an array
}
 input = [this week, wedding]
 event = [28372, Jada's Wedding, Wedding, July 21 2020, [BallRoom,Reception Room]]

 PERIOD CLASSIFICATION:
 This week - 'week'
 This month -  'mnth'
 This year - 'yr'
 Next year - 'nyr'

 EVENT CLASSIFICATION:
 Wedding - 'wed'
 Parties -  'prty'
 Conference - 'cnfn'
 Awards Ceremonies - 'awrd'

FUNCTIONS:
1. displayEvents - Displays events matching inputted criteria. Calls getEvents with getInput
2. getInput -       retrieves and returns the input entered by user (includes category and period of event) 
3. getEvents -      Compares the input variables with event attributes in the database and returns 
                    those events whose varaibles match input variables. Calls getPeriod
4. getPeriod -      retrieves period of event (compares it to current date to establish period date falls under)
                    and returns period (current week/month)

*/

describe('View Upcoming Events', function() {

    it ('should have displayEvents defined', function() {
        expect(displayEvents.toBeDefined());
    });

    it ('should have getInput defined',function() {
        expect(getInput.toBeDefined());
    });

    it ('should have getEvents defined', function() {
        expect(getEvents.toBeDefined());
    });

     it ('should have getPeriod defined', function() {
        expect(getPeriod.toBeDefined());
    });




    describe('should call the "displayEvents" function', function() {
        
        it('and this function should call getEvents function', function() {
            spyOn('getEvents').andReturn(true);
            displayEvents();
            expect (getEvents).toHaveBeenCalledWith(['week', 'wedding']);
        });

         it('and this function should call getInput function', function() {
            spyOn('getInput').andReturn(true);
            displayEvents();
            expect (getInput).toBeCalled();
        });

        it('and this function should return an array of events', function() {
            spyOn('getEvents').andReturn(eventsArr);
            var result = displayEvents();
            expect (result).toBe(eventsArr);
        });

        it('and this function should return NO UPCOMING EVENTS when getEvents function returns nothing', function() {
            spyOn('getEvents').andReturn(null);
            var result = displayEvents();
            expect (result).toBe('No Upcoming Events');
        });

        it('and this function should return false when a string is returned', function() {
            spyOn('getEvents').andReturn("hello");
            var result = displayEvents();
            expect (result).toBeFalsy();
        });

    });



    describe('should call the "getInput" function', function() {
        beforeEach(function() {
            var form = {
                prd: 'week',
                category: 'wed'
            }
        });

        it ('and this function should return input from the form in an array', function() {
            var result = getInput(form);
            expect (result).toBe(['week','wed']);
        });

        it ('and this function should return input from the form in an array', function() {
            var result = getInput("");
            expect (result).toBeFalsy();
        });
        
    });



    describe('should call the "getEvents" function', function() {
        var allEvents = {
            evnt1,
            evnt2,
            evnt3
        };

        var evnt1 = {
            id: '48393',
            name: "Jada's Wedding",
            category: "wed",
            date: '18032020',
            room: ["ReceptionRm1", "BallRm2"]	
        };

        var evnt2 = {
            id: '39278',
            name: "NCB Conference",
            category: "cnfn",
            date: '20042020',
            room: ["ConferenceRm4"]	
        };

        var evnt3 = {
            id: '24843',
            name: "Summer Party",
            category: "prty",
            date: '01072020',
            room: ["Backyard", "PoolRm1"]	
        };
        
        it('and this function should be called with the getPeriod function', function() {
            spyOn('getPeriod').andReturn(true);
            getEvents();
            expect (getPeriod).toBeCalled();
        });

        it('and this function should return the events that meet the criteria', function() {
            var result = getEvents('','wed');
            expect (result).length.toBe('1');
        });

    });



    describe('should call the "getPeriod" function', function() {
        beforeEach(function() {
            var evnt1 = {
                id: '48393',
                name: "Jada's Wedding",
                category: "wed",
                date: '18032020',
                room: ["ReceptionRm1", "BallRm2"]	
            };

            var evnt2 = {
                id: '39278',
                name: "NCB Conference",
                category: "cnfn",
                date: '20042020',
                room: ["ConferenceRm4"]	
            };

            var evnt3 = {
                id: '24843',
                name: "Summer Party",
                category: "prty",
                date: '01072020',
                room: ["Backyard", "PoolRm1"]	
            };

            var badEvnt = {
                id: '24843',
                name: "Summer Party",
                category: "not category",
                date: '01072020',
                room: ["Backyard", "PoolRm1"]	
            };
        
        });        
    
        it('and this function should return the period from an event', function() {
            var result = getPeriod(evnt1);
            expect (getPeriod).toBe("week");
        });

        it('and this function should return the period from an event', function() {
            var result = getPeriod(evnt2);
            expect (getPeriod).toBe("mnth");
        });

        it('and this function should return the period from an event', function() {
            var result = getPeriod(evnt3);
            expect (getPeriod).toBe("year");
        });


        it('and this function should return false when this function fails', function() {
            var result = getPeriod(badEvnt);
            expect (getPeriod).toBeFalsy();
        });

    });

});

