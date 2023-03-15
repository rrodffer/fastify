import fastify from "fastify"

const app = fastify()

app.get('/teste', () => {
  return 'FASTIFY 🥸'
})

app.listen({
  port: 3333
}).then(() => {
  console.log('Servidor iniciado 🕷️')
})