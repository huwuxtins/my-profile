var neo4j = require('neo4j-driver');

var dotenv = require('dotenv'); // Load dotenv package
dotenv.config(); // Load .env file

const URI = process.env.NEO4J_URI
const USERNAME = process.env.NEO4J_USERNAME
const PASSWORD = process.env.NEO4J_PASSWORD
const DATABASE = process.env.NEO4J_DATABASE

const driver = neo4j.driver(URI, neo4j.auth.basic(USERNAME, PASSWORD))

module.exports = {
  read: async (cypher, params = {}, database = DATABASE) => {
      const session = driver.session({
            defaultAccessMode: neo4j.session.READ,
            database,
      })

      return session.run(cypher, params)
          .then(res => {
              session.close()
              return res
          })
          .catch(e => {
              session.close()
              throw e
          })
  },
  write: async (cypher, params = {}, database = DATABASE) => {
      const session = driver.session({
            defaultAccessMode: neo4j.session.WRITE,
            database,
      })

      return session.run(cypher, params)
          .then(res => {
                session.close()
                return res
          })
          .catch(e => {
                session.close()
                throw e
          })
  },
}