CREATE TABLE public.roles
(
    id serial NOT NULL,
    name character varying(20) NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public.roles
    OWNER to postgres;

-- GRANT ALL ON TABLE public.roles TO testuser WITH GRANT OPTION;