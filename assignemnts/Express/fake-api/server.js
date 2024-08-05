const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createUser = () => {
    const newfakeuser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.datatype.uuid(),
    };
    return newfakeuser;
};

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        },
    };
    return newCompany;
};

app.get("/api/users/new", (req, res) => {
    const user = createUser();
    res.json(user);
});

app.get("/api/companies/new", (req, res) => {
    const company = createCompany();
    res.json(company);
});

app.get("/api/user/company", (req, res) => {
    const user = createUser();
    const ccompany = createCompany();
    res.json({ user, ccompany });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
