module.exports = function check(str, bracketsConfig) {
  const bracketsArr = str.split('')
  const stack = []
  let bracketsMap = {}

  bracketsConfig.forEach((item) => {
    const key = item[1]
    if (!bracketsMap[key]) bracketsMap[key] = item[0]
  })

  bracketsArr.forEach((item) => {
    if (bracketsMap[item] === stack[stack.length - 1] && stack.length) {
      stack.pop()
    } else {
      stack.push(item)
    }
  })

  return stack.length === 0 ? true : false
}
