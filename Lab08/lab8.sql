-- SCROLL DOWN FOR LAB08, INCLUDED LAB07 FOR DATA
--
--
-- Lab07: This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @version Summer, 2015
-- @author: Alvin Chung (ahc6)
-- @version Fall, 2019

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS PlayerProperty;
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Property;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY,
	time timestamp
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY,
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE Property (
	ID integer PRIMARY KEY,
	name varchar(50) NOT NULL,
	category varchar(50) NOT NULL
);

CREATE TABLE PlayerGame (
	PRIMARY KEY (gameID, playerID),
	gameID integer REFERENCES Game(ID) NOT NULL,
	playerID integer REFERENCES Player(ID) NOT NULL,
  board_location integer NOT NULL,--should be one of 0 thru 39
	cash money,
	score integer
	);

CREATE TABLE PlayerProperty(
	PRIMARY KEY (gameID, playerID, propertyID),
	gameID integer REFERENCES Game(ID) NOT NULL,
	playerID integer REFERENCES Player(ID) NOT NULL,
	propertyID integer REFERENCES Property(ID) NOT NULL,
	houses integer,
	hotels integer
);

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON Property TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2019-10-20 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.com', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.com', 'Dogbreath');

-- building properties
INSERT INTO Property VALUES (01 , 'Mediterranean Avenue', 'Dark Purple');
INSERT INTO Property VALUES (02 , 'Baltic Avenue', 'Dark Purple');
INSERT INTO Property VALUES (03 , 'Oriental Avenue', 'Light Blue');
INSERT INTO Property VALUES (04 , 'Vermont Avenue', 'Light Blue');
INSERT INTO Property VALUES (05 , 'Connecticut Avenue', 'Light Blue');
INSERT INTO Property VALUES (06 , 'St. Charles Place', 'Pink');
INSERT INTO Property VALUES (07 , 'States Avenue', 'Pink');
INSERT INTO Property VALUES (08 , 'Virginia Avenue', 'Pink');
INSERT INTO Property VALUES (09 , 'St. James Place', 'Orange');
INSERT INTO Property VALUES (10 , 'Tennessee Avenue', 'Orange');
INSERT INTO Property VALUES (11 , 'New York Avenue', 'Orange');
INSERT INTO Property VALUES (12 , 'Kentucky Avenue', 'Red');
INSERT INTO Property VALUES (13 , 'Indiana Avenue', 'Red');
INSERT INTO Property VALUES (14 , 'Illinois Avenue', 'Red');
INSERT INTO Property VALUES (15 , 'Atlantic Avenue', 'Yellow');
INSERT INTO Property VALUES (16 , 'Pacific Avenue', 'Green');
INSERT INTO Property VALUES (17 , 'North Carolina Avenue', 'Green');
INSERT INTO Property VALUES (18 , 'Pennsylvania Avenue', 'Green');
INSERT INTO Property VALUES (19 , 'Park Place', 'Dark Blue');
INSERT INTO Property VALUES (20 , 'Boardwalk', 'Dark Blue');
INSERT INTO Property VALUES (21 , 'Reading Railroad', 'Station');
INSERT INTO Property VALUES (22 , 'Pennsylvania Railroad', 'Station');
INSERT INTO Property VALUES (23 , 'B. &. O. Railroad', 'Station');
INSERT INTO Property VALUES (24 , 'Short Line', 'Station');
INSERT INTO Property VALUES (25 , 'Electric Company', 'Utility');
INSERT INTO Property VALUES (26 , 'Water Works', 'Utility');

-- initial game builds
-- game 1
INSERT INTO PlayerGame VALUES (1, 1, 0, 500, 750.00);
INSERT INTO PlayerGame VALUES (1, 2, 0, 500, 5550.00);
INSERT INTO PlayerGame VALUES (1, 3, 0, 500, 2850.00);
-- game 2
INSERT INTO PlayerGame VALUES (2, 1, 0, 750, 10.00);
INSERT INTO PlayerGame VALUES (2, 2, 0, 500, 50.00);
INSERT INTO PlayerGame VALUES (2, 3, 0, 500, 1000.00);
-- game 3
INSERT INTO PlayerGame VALUES (3, 2, 0, 500, 500.00);
INSERT INTO PlayerGame VALUES (3, 3, 0, 500, 6000.00);

-- PlayerProperty relationships
-- game 1
INSERT INTO PlayerProperty(gameID, playerID, propertyID, houses) VALUES (1, 2, 02, 3);
INSERT INTO PlayerProperty(gameID, playerID, propertyID, hotels) VALUES (1, 3, 20, 2);
INSERT INTO PlayerProperty(gameID, playerID, propertyID, houses) VALUES (1, 3, 14, 2);
INSERT INTO PlayerProperty(gameID, playerID, propertyID, hotels) VALUES (1, 1, 06, 3);
INSERT INTO PlayerProperty(gameID, playerID, propertyID, houses) VALUES (2, 1, 05, 2);
INSERT INTO PlayerProperty(gameID, playerID, propertyID, hotels) VALUES (2, 3, 08, 5);
INSERT INTO PlayerProperty(gameID, playerID, propertyID) VALUES (3, 2, 01);
INSERT INTO PlayerProperty(gameID, playerID, propertyID, houses, hotels) VALUES (3, 3, 19, 4, 1);
INSERT INTO PlayerProperty(gameID, playerID, propertyID, hotels) VALUES (3, 3, 20, 1);

-- accessors
SELECT COUNT(*) FROM Property; -- should return 26
SELECT * FROM PlayerProperty; -- select all from PlayerProperty

--
-- Lab08: This SQL script retrieves information from a monopoly database.
--
-- @author: Alvin Chung (ahc6)
-- @version Fall, 2019

-- Exercise 8.1

-- a. Retrieve a list of all the games, ordered by date with the most recent game coming first. 

SELECT * 
FROM Game 
ORDER BY time DESC;

-- b. Retrieve all the games that occurred in the past week.

SELECT * 
FROM Game 
WHERE time >= '2019-10-18';

-- c. Retrieve a list of players who have (non-NULL) names.

SELECT name 
FROM Player 
WHERE name IS NOT NULL;

-- d. Retrieve a list of IDs for players who have some game score larger than 2000.

SELECT playerID 
FROM PlayerGame 
WHERE score >= 2000;

-- e. Retrieve a list of players who have GMail accounts.

SELECT * 
FROM Player 
WHERE emailAddress LIKE '%@gmail.com';


-- Exercise 8.2

-- a. Retrieve all “The King”’s game scores in decreasing order.

SELECT score AS ScoresForTheKing
FROM Player, PlayerGame
WHERE Player.ID = PlayerGame.playerID
  AND Player.name = 'The King'
ORDER BY score DESC;

-- b. Retrieve the name of the winner of the game played on 2006-06-28 13:20:00.

SELECT Player.name AS Winner
FROM Player, PlayerGame, Game
WHERE Game.time = '2006-06-28 13:20:00'
  AND Game.ID = PlayerGame.gameID
  AND Player.ID = PlayerGame.playerID
ORDER BY PlayerGame.score DESC
LIMIT 1;

-- c. So what does that P1.ID < P2.ID clause do in the last example query?

-- 	A: It's asking for only the names of P1 from the Player table that has lower ID numbers than P2's ID numbers.

-- d. The query that joined the Player table to itself seems rather contrived. Can you think of a realistic situation in which you’d want to join a table to itself?

-- 	A: Self joins are useful when you have data where some are connected with others, while some aren't. An example can be of several employees with a manager(s). 
--    	   The employees would have the manager's ID linked to their data, but the manager him/herself wouldn't have one because he/she doesn't have someone above him/her.