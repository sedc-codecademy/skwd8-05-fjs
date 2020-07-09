
CREATE TABLE public.users_roles
(
    uid integer NOT NULL,
    rid smallint NOT NULL,
    CONSTRAINT uid_rid UNIQUE (uid, rid)
)


ALTER TABLE public.users_roles
    OWNER to postgres;
    