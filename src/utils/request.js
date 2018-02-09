import fetch from 'isomorphic-fetch'
import router from '@/router'
import { HOST, getToken, removeToken } from './index'

const getOptions = ({
  method,
  body,
  headers,
}) => {
  let bodyString = null
  if (Object.keys(body).length) {
    bodyString = JSON.stringify(body)
  }
  return {
    method,
    headers,
    body: bodyString,
    credentials: 'same-origin'
  }
}

const getQueryString = ({
  query = {}
}) => {
  let qs = `?time=${Date.now()}`
  if (Object.keys(query).length !== 0) {
    Object.keys(query).forEach((key) => {
      qs += `&${key}=${query[key] !== undefined ? query[key] : ''}`
    })
  }
  return qs
}

export default async function ({
  method = 'GET',
  path = '',
  query = {},
  body = {},
  headers = {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: getToken()
  },
}) {
  if (!path) {
    throw new Error('path is required!')
  }

  const res = await fetch(encodeURI(`${HOST}${path}${getQueryString({
    query,
  })}`), getOptions({
    method,
    body,
    headers,
  }))

  const data = await res.json()
  if (res.status === 401) {
    removeToken()
    setTimeout(() => {
      const state = btoa(encodeURIComponent(`${location.pathname}${location.search}`))
      router.push(`/auth?state=${state}`)
    }, 100)
  }
  if (!res.ok) { throw new Error(data.msg) }
  return data
}
