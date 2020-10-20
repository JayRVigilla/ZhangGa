DROP DATABASE IF EXISTS "microblog";

CREATE DATABASE "microblog";

\c "microblog"

CREATE TABLE posts (id SERIAL PRIMARY KEY,
                    title TEXT NOT NULL,
                    description TEXT NOT NULL,
                    body TEXT,
                    img TEXT,
                    votes INT NOT NULL DEFAULT 0);

CREATE TABLE comments (id SERIAL PRIMARY KEY,
                       text TEXT NOT NULL,
                       post_id INT NOT NULL REFERENCES posts ON DELETE CASCADE);

INSERT INTO posts (title, description, body) VALUES
    ('First Post', 'Best post ever!', 'Everyone loves posting first. I win!','https://timesofindia.indiatimes.com/thumb/msid-64137580,width-800,height-600,resizemode-4/64137580.jpg?imglength=47128'),
    ('Second Post', 'A very good post!', 'Oh well. Didn''t get to be first.','https://timesofindia.indiatimes.com/thumb/msid-64137580,width-800,height-600,resizemode-4/64137580.jpg?imglength=47128');

INSERT INTO comments (text, post_id) VALUES
    ('This is a really great post.', 1),
    ('I learned so much reading this.', 1);