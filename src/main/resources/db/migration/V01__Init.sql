CREATE TABLE IF NOT EXISTS skill (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS skill_requirement (
    id SERIAL PRIMARY KEY,
    skill_id TEXT REFERENCES skill(id) NOT NULL,
    requires_id TEXT REFERENCES skill(id) NOT NULL
);

CREATE TABLE IF NOT EXISTS question (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    skill_id TEXT REFERENCES skill(id) NOT NULL
);

CREATE TABLE IF NOT EXISTS answer (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    question_id INTEGER REFERENCES question(id) NOT NULL
);

CREATE TABLE IF NOT EXISTS mental_representation (
    id SERIAL PRIMARY KEY,
    name    TEXT NOT NULL,
    skill_id    TEXT REFERENCES skill(id) NOT NULL,
    body_markdown TEXT NOT NULL
);


INSERT INTO skill (id, name, description) VALUES ('evaluating_sine', 'Evaluating sine', 'How to evaluate sine');
INSERT INTO skill (id, name, description) VALUES ('evaluating_cosine', 'Evaluating cosine', 'How to evaluate cosine');
INSERT INTO skill (id, name, description) VALUES ('evaluating_tangent', 'Evaluating tangent', 'How to evaluate tangent');

INSERT INTO mental_representation (name, skill_id, body_markdown) VALUES ('The unit circle', 'evaluating_sine', 'Hold in your head the unit circle of radius 1 centered at the origin');

INSERT INTO skill_requirement (skill_id, requires_id) VALUES ('evaluating_tangent', 'evaluating_sine');
INSERT INTO skill_requirement (skill_id, requires_id) VALUES ('evaluating_tangent', 'evaluating_sine');

INSERT INTO question (text, skill_id) VALUES ('Evaluate `sin 0`', 'evaluating_sine');
INSERT INTO question (text, skill_id) VALUES ('Evaluate `sin(pi/6)`', 'evaluating_sine');

INSERT INTO answer (text, question_id) VALUES ('0', 1);
INSERT INTO answer (text, question_id) VALUES ('1/2', 2);