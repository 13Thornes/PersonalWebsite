CREATE TABLE IF NOT EXISTS public.silly_words
(
    id integer NOT NULL DEFAULT nextval('silly_words_id_seq'::regclass),
    word character varying(20) COLLATE pg_catalog."default" NOT NULL,
    definition character varying(32) COLLATE pg_catalog."default" NOT NULL,
    release_date date,
    genre character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT silly_words_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.silly_words
    OWNER to postgres;