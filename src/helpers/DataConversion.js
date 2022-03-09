export function ab2str(buf) {
  var binary = ''
  var bytes = new Uint8Array(buf)
  var len = bytes.byteLength
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}
// not needed
// export function str2ab(str) {
//   var binary_string = window.atob(str)
//   var len = binary_string.length
//   var bytes = new Uint8Array(len)
//   for (var i = 0; i < len; i++) {
//     bytes[i] = binary_string.charCodeAt(i)
//   }
//   return bytes.buffer
// }
