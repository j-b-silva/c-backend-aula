const supertest = require('supertest');

const app = require('./app');

const require = supertest(app);

test('Deve retornar 201 no POST e um JSON', async function(){
    const response = await request.post("/produtos").send({nome:"uva", preco:20.00});
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('id', 1);
});

test('Deve retornar 200 no GET e um JSON no array', async function(){
    const response = await request.get("/produtos");
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(Array.isArray(response.body)).toBe(true);
});

test('Deve retornar 200 no GET e um JSON', async function(){
    const response = await request.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
});

test('Deve retornar 404 no GET e um JSON', async function(){
    const response = await request.get("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('msg', "Produto não encontrado"); 
});

test('Deve retornar 422 no POST e um JSON', async function(){
    const response = await request.post("/produtos/");
    expect(response.status).toBe(422);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('msg',"Nome e preço dos produtos são obrigatórios");
});

test('Deve retornar 200 no PUT e um JSON', async function(){
    const response = await request.put("/produtos/1").send({nome: "uva verde", preco: 18.00});
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('id', 1)
    expect(response.body).toHaveProperty('nome', "uva verde");
    expect(response.body).toHaveProperty('preco', 18.00);
});

test('Deve retornar 404 no PUT e um JSON', async function(){
    const response = await request.put("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body).toHaveProperty('msg',"Produto não encontrado");
});

test('Deve retornar 204 no DELETE', async function(){
    const response = await request.delete("/produtos/1").send({});
    expect(response.status).toBe(204);
    expect(response.headers['content-type']).toMatch(/json/);
});

test('Deve retornar 404 no DELETE e um JSON', async function(){
    const response = await request.delete("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('msg', "Produto não encontrado");
});




