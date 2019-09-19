CREATE TABLE "creatures" (
"id" serial primary key,
"name" varchar(120) not null,
"origin" varchar(120) not null
);

INSERT INTO "creatures" ("name", "origin")
VALUES ('Unicorn','Europe'),
('Sphynx', 'Persia'),
('Dryad', 'Greece'),
('Kappa', 'Japan'),
('Jackalope', 'America');