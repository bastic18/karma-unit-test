// Make room reservation

/*
INPUTS
- startDate
- startTime
- endDate
- endTime

var reserveDate_ = {
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: ""
};

OUTPUTS
- rooms available between those dates and time

FUNCTIONS
1. showCalendar - shows the calendar user will use to select date
2. showClock - shows the clock user will us to select the time
3. isDateFormatted - checks is date and time is properly formatted
4. formatDateTime - checks is date and time is properly formatted
5. dbListRooms - gets the list of rooms from db between start and end
6. displayRooms - displays the list of rooms
*/

// TESTING STARTS HERE
describe('The get list rooms available between two dates case', function(){
    it('should have showCalendar defined', function() {
        expect(showCalendar).toBeDefined();
    });

    it('should have showClock defined', function() {
        expect(showClock).toBeDefined();
    });

    it('should have isDateFormatted defined', function() {
        expect(isDateFormatted).toBeDefined();
    });

    it('should have formatDate defined', function() {
        expect(formatDateTime).toBeDefined();
    });

    it('should have dbListRooms defined', function() {
        expect(dbListRooms).toBeDefined();
    });

    it('should have displayRooms defined', function() {
        expect(displayRooms).toBeDefined();
    });

    describe('should call the "displayRooms" function', function(){
        beforeEach(function() {
            var reserveDate = {
                startDate: "",
                startTime: "",
                endDate: "",
                endTime: ""
            };
        });

        it('and this function should call the isDateFormatted function', function() {
            spyOn('isDateFormatted').andReturn(true);
            displayRooms(reserveDate);
            expect(isDateFormatted).toBeCalled();
        });

        it('and this function should call the formatDateTime function', function() {
            spyOn('formatDateTime').andReturn(null);
            displayRooms(reserveDate);
            expect(formatDateTime).toBeCalled();
        });

        it('and this function should call the dbListRooms function', function() {
            spyOn('dbListRooms').andReturn([23]);
            displayRooms(reserveDate);
            expect(dbListRooms).toBeCalled();
        });

    });
    
});

// TESTING ENDS HERE

/*
INPUTS
- roomID

var roomID_ = 23;

OUTPUTS
- room details of room with roomid

FUNCTIONS
7. dbRoomInfo - gets room details from database
8. displayRoomDetails - displays the details of the room selected
*/

// TESTING STARTS HERE
describe('The get  room details for selected roomcase', function(){
    it('should have dbRoomInfo  defined', function() {
        expect(dbRoomInfo).toBeDefined();
    });

    it('should have displayRoomDetails defined', function() {
        expect(displayRoomDetails).toBeDefined();
    });

    describe('should call the "displayRoomDetails" function', function(){
        beforeEach(function() {
            var roomID = 23;
        });

        it('and this function should call the dbRoomInfo function', function() {
            spyOn('dbRoomInfo').andReturn(null);
            displayRooms(roomID);
            expect(dbRoomInfo).toBeCalled();
        });
    });
    
});

// TESTING ENDS HERE
/*
INPUTS


var reserveInfo_ = {
    
};

OUTPUTS
- update event and customer to be attached to resrved room for period of time

FUNCTIONS
9. db

*/

// TESTING STARTS HERE

