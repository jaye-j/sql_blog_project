CREATE TABLE categories (
    id SERIAL NOT NULL PRIMARY KEY,
    name varchar(50)
);

INSERT INTO categories VALUES
    (DEFAULT, 'Javascript'),
    (DEFAULT, 'Bootstrap4'),
    (DEFAULT, 'Node.js'),
    (DEFAULT, 'CSS'),
    (DEFAULT, 'HTML6'),
    (DEFAULT, 'Express'),
    (DEFAULT, 'Python'),
    (DEFAULT, 'PostgreSQL'),
    (DEFAULT, 'React');

CREATE TABLE authors (
    id SERIAL NOT NULL PRIMARY KEY,
    name varchar(100),
    biography varchar(500),
    imageURL varchar(300)
);

INSERT INTO authors VALUES
(DEFAULT, "Jaye", "lorem ipsum dolor my arm", "https://static.dezeen.com/uploads/2015/05/Jacob-Jensen-profile_dezeen_sq.jpg"),
(DEFAULT, "Daniel", "lorem ipsum dolor my head", "https://www.truerestoration.org/wp-content/uploads/2014/01/Dolan-Bishop-Daniel-Lytle.jpg"),
(DEFAULT, "Austin", "lorem ipsum dolor my foot", "https://pbs.twimg.com/profile_images/487243471171092480/dCS4NUEW_400x400.jpeg");

CREATE TABLE blogs (
    id SERIAL NOT NULL PRIMARY KEY,
    title varchar(50),
    author_id integer REFERENCES authors(id),
    category_id integer REFERENCES categories(id),
    body varchar(500),
    date_pub date
);


