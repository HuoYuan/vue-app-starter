import request from './request'
import handleError from './handle-error'
import isMobile from './is-mobile'
import { HOST, VENDOR_URL } from './config'
import { getToken, setToken, removeToken } from './token'
import toast from './toast'

export {
  request,
  handleError,
  isMobile,
  HOST,
  VENDOR_URL,
  getToken,
  setToken,
  removeToken,
  toast
}
