function getItem(key) {
  return localStorage.getItem(key)
}

function setItem(key, value) {
  localStorage.setItem(key, value)
}

function removeItem(key) {
  localStorage.removeItem(key)
}

const TEMPLATE_APP_TOKEN = 'TEMPLATE_APP_TOKEN'


export function getToken() {
  return getItem(TEMPLATE_APP_TOKEN)
}

export function setToken(token) {
  setItem(TEMPLATE_APP_TOKEN, token)
}

export function removeToken() {
  removeItem(TEMPLATE_APP_TOKEN)
}
