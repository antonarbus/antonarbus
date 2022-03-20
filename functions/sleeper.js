// sleeper.js
export default function sleeper(ms = 1000) {
  return function(x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms))
  }
}
