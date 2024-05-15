const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

let id = null;

describe('API Loja Virtual', () =>{
    // test('Deve retornar 201 e um JSON no POST /produtos', async () =>{
    //     const response = await request.post('/produtos').send({nome: "banana", preco: 12.0});
    //     expect(response.status).toBe(201);
    //     expect(response.type).toBe('application/json')
    //     id = response.body._id;
    // });
    test('Deve retornar 422 e um JSON no POST /produtos', async() =>{
        const response = await request.post('/produtos').send({});
        expect(response.status).toBe(422);
        expect(response.type).toBe('application/json');
    });
    test('Deve retornar 200 e um array no GET /produtos', async() =>{
        const response = await request.get('/produtos');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        if(response.body.length > 0){
            id = response.body[0]._id.toString()
        };
    });
    test('Deve retornar 200 e um JSON no GET /produtos/id', async () => {
        const response = await request.get(`/produtos/${id}`);
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
    });
    test('Deve retornar 404 e um JSON no GET /produtos/id', async() =>{
        const response = await request.get('/produtos/id');
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
    });
});

