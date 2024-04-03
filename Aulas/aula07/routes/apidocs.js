
const express = require('express'); //instalando pacote express
const swaggerUI = require('swagger-ui-express'); //construir a documentação
const YAML = require('yaml'); //validar o documento
const fs = require('fs'); //para ler o arquivo a partir do diretorio


const file = fs.readFileSync('./swagger.yaml', 'utf-8')
const swaggerDoc = YAML.parse(file); 
const router = express.Router();

router.use('/', swaggerUI.serve);

router.get('/', swaggerUI.setup(swaggerDoc));

module.exports = router;
