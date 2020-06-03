CREATE TABLE users (
	id serial NOT NULL,
	email character varying(100) NOT NULL,
	fullname character varying(100),
	dob date,
	city character varying(100),
	country character varying(100),
	
	PRIMARY KEY(id)
);

delete table: DROP TABLE users;

empty table: TRUNCATE TABLE users;

ALTER TABLE public.users ADD address character varying(100);
