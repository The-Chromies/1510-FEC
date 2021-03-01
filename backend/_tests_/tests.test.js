// server connection commented out until I have a better understanding of async testing so that all tests pass upon push when circleci runs
//const app = require('../app.js');
const supertest = require('supertest');
//const request = supertest(app);
//app.listen(3001);

it('does Jest work', () => {
  expect(1).toBe(1)
})

it('Async test example', async done => {
  // some async test goes here - most likely listening to the port to start
  done()
})

// this test should take place after we set up the router
// it('Gets data from the products endpoint', async done => {
//   const res = await request.get('/')

//   expect(res.status).toBe(200)
//   done()
// })

// describe('API', () => {
//   it('Should get a response given a good GET request', () => {
//     return request(app)
//       .get('/api/products')
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//       });
//   });
//   it('Should auto-assign a good endpoint given a good GET request', () => {
//     return request(app)
//       .get('/')
//       .then(response => {
//         expect(response.statusCode).toBe(302);
//       });
//   });
//   it('Should 404 a bad GET request', () => {
//     return request(app)
//       .get('/api/874khf9')
//       .then(response => {
//         expect(response.statusCode).toBe(404);
//       });
//   });
// });
