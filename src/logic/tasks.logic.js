const axios = require('axios')

const BASE_URL = 'http://localhost:3000'

const getAllTasks = async (id_user) => {
  let result = await axios.get(BASE_URL + `/tasks?id_user=${id_user}`)
  return result
}

const getTask = async ({ id_task, id_user }) => {
  let result = await axios.get(BASE_URL + `/tasks/${id_task}?id_user=${id_user}`)
  return result
}

const createTask = async (data) => {
  let result = await axios.post(BASE_URL + '/task', data)
  return result
}

const updateTask = async ({ id_task, id_user }) => {
  let result = await axios.patch(BASE_URL + `/task/${id_task}?id_user=${id_user}`)
  return result
}

const deleteTask = async ({ id_task, id_user }) => {
  let result = await axios.delete(BASE_URL + `/task/${id_task}?id_user=${id_user}`)
  return result
}

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask}