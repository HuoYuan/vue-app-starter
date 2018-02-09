const { WEB_ENV } = process.env

const VENDOR_URL = {
  beta: 'http://salesdemo.teambition.net',
  release: 'https://tb.tfzq.com',
}[WEB_ENV]

const HOST = {
  beta: 'http://139.224.16.98:3033',
  release: 'https://addon.tfzq.com/api',
}[WEB_ENV]

export {
  VENDOR_URL,
  HOST
}
