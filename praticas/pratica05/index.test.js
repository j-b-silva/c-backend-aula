const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test('Deve retornar o status 200 no GET', async function(){
    const response = await request.get("/produtos");
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
});


test('Deve retornar o status 200 no GET', async function(){
    const response = await request.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
});


test('Deve retornar o status 400 no GET', async function(){
    const response = await request.get("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
})


test('Deve retornar o status 201 no POST', async function(){
    const response = await request.post("/produtos").send({nome:'caju', preco: 1.00});
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toMatch(/json/);
} )


test('Deve retornar o status 422 no POST', async function(){
    const response = await request.post("/produtos");
    expect(response.status).toBe(422);
});

test('Deve retornar o status 200 no PUT', async function(){
    const response = await request.put("/produtos/1").send({nome: "uva", preco: 2.00});
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
})


test('Deve retornar o status 404 no PUT', async function(){
    const response = await request.put("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
});

test('Deve retornar o status 204 no DELETE', async function(){
    const response = await request.delete("/produtos/1");
    expect(response.status).toBe(204);
    expect(response.body).toEqual({})
})

test('Deve retornar o status 404 no DELETE', async function(){
    const response = await request.delete("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.headers['content-type']);
})
