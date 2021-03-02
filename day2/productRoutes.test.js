// const jest = require("jest");

const { TestScheduler } = require("jest");

// function sum(a, b) {
//     return a + b;
// }

// TestScheduler('check function sum should value a and b', () => {
//     const a = 2;
//     const b = 8;
//     const c = a + b;
//     expect(sum(a, b)).toEqual(c);
// });

const app = require("../app");
const request = require("supertest");

test("routes/products should return message this is products", () => {
    return request(app).get("/products").expect(200).expect("this is products");
})

