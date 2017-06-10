const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp(`postgres://${process.env.USER}@localhost:5432/todo-list`)

const getAllLists = "SELECT * FROM lists"

const getListsById = "SELECT * FROM lists WHERE id=$1"

const insertLists = "INSERT INTO lists (description, completed) VALUES ($1, $2)"

const updateLists = "UPDATE lists SET description WHERE id=$1"

const deleteLists = "DELETE FROM lists WHERE id=$1"

const Lists = {
  all: () => {
    return db.any(getAllLists)
  },
  insert: (description, completed) => {
    return db.none(insertLists, [description, completed])
  },
  oneLists: (id) => {
    return db.one(getListsById, [id])
  },
  update: (id, description, completed) => {
    return db.none(updateLists, [id, description, completed])
  },
  delete: id => db.oneOrNone(deleteLists, [id])
}

module.exports = {
  Lists
}