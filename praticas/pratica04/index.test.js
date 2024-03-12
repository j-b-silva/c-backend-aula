const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test("Retornar o status 200", async function(){
    const response = await request.get("/");
    expect(response.status).toBe(200); 
} )

test("Retornar o status 201", async function(){
    const response = await request.post("/");
    expect(response.status).toBe(201);
})

test("Retornar o status 200", async function(){
    const response = await request.put("/");
    expect(response.status).toBe(200);
})

test("Retornar o status 204", async function(){
    const response = await request.delete("/");
    expect(response.status).toBe(204);
})



