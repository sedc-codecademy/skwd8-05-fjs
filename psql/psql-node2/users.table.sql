CREATE TABLE public.users
(
    id serial NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(32) NOT NULL,
    status smallint NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public.users
    OWNER to postgres;

-- GRANT ALL ON TABLE public.users TO testuser WITH GRANT OPTION;

COMMENT ON COLUMN public.users.status
    IS '0 - Not active
1 - Verify
2 - Active
3 - Inactive';