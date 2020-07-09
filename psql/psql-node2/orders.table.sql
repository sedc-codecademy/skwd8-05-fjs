ALTER TABLE public.orders
    ADD COLUMN "user_id" integer NOT NULL DEFAULT 2;

ALTER TABLE public.orders
    ALTER COLUMN "user_id" DROP DEFAULT;