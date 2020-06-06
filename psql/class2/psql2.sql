-- Write querty that will select all bookings made by member with name Baker Anne at tennis court 1 facility
-- SELECT bookid, facid, memid, starttime, slots FROM bookings WHERE memid = 12 AND facid = 0;

-- Write query that will return  bookings for Table Tennis and member is GUEST

-- AS

-- SELECT bookid AS bookingID, facid, memid AS memberID FROM bookings;

--SUBQUERIES
-- SELECT 
-- 	bookid, 
-- 	(SELECT name FROM facilities WHERE facilities.facid = bookings.facid) AS facilityName,
-- 	(SELECT firstname FROM members WHERE members.memid = bookings.memid) AS memberFirstName,
-- 	(SELECT surname FROM members WHERE members.memid = bookings.memid) AS memberlastname,
-- 	starttime, 
-- 	slots,
-- 	((SELECT membercost FROM facilities WHERE facilities.facid = bookings.facid) * slots) AS cost,
-- 	(SELECT monthlymaintenance FROM facilities WHERE facilities.facid = bookings.facid) AS monthlycost
-- FROM 
-- 	bookings;

-- GET ALL MEMBERS FROM  MEMBERS THAT HAD MADE BOOKING
-- SELECT 
-- 	memid, 
-- 	surname,
-- 	firstname
-- FROM members
-- WHERE memid IN (SELECT bookings.memid FROM bookings WHERE bookings.memid = members.memid) 

-- SELECT
-- 	memid,
-- 	surname
-- FROM members
-- WHERE memid IN ('0', 10, 33)

-- GET ALL FACILITIES FROM FACILITIES THAT HAD BEEN PART OF A BOOKING

SELECT  
facid,  
name,  
membercost,  
guestcost,  
initialoutlay,  
monthlymaintenance  
FROM facilities  
WHERE facid IN (SELECT bookings.facid FROM bookings WHERE bookings.facid = facilities.facid)

-- DISTINCT
SELECT memid FROM bookings 
SELECT DISTINCT memid FROM bookings 
-- It will return unique ids of members regardless of how many times they repeat itself into booking table


-- IN
SELECT memid FROM members WHERE memid IN (3, 10, 22);
-- It will return results back only for members which ids are into the IN array.
