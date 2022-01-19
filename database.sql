DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS persons;

CREATE TABLE persons(
    person_id SERIAL NOT NULL,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    CONSTRAINT pk_person_id PRIMARY KEY(person_id)
);

CREATE TABLE posts(
    post_id SERIAL NOT NULL,
    title TEXT NOT NULL,
    content TEXT,
    person_id INTEGER,
    CONSTRAINT pk_post_id PRIMARY KEY(post_id),
    CONSTRAINT fk_posts_persons FOREIGN KEY(person_id) REFERENCES persons(person_id)
)