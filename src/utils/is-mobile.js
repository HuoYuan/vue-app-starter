export default function isMobile() {
  const isIos = /ip(hone|ad|od)/i.test(navigator.userAgent.toLowerCase())
  const isAndroid = /android/i.test(navigator.userAgent.toLowerCase())
  return (isIos || isAndroid) || false
}
