module.exports = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve()
      } catch (e) {
        reject()
      }
    }, delay)
  })
}