const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);
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
