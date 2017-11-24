const prodHttpDomain = 'http://localhost:8545';
const devHttpDomain = 'http://localhost:8545';
module.exports = {
  httpDomain: process.env.NODE_ENV === 'production' ? prodHttpDomain : devHttpDomain
}
