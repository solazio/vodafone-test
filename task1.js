/*
Given a string nums, which contains only digits, and a array of numbers predefinedNumbers,add colons in nums to construct a new strings, where each number between colons is a valid number from predefinedNumbers.
Return all possible strings.

Example:
nums = "14316342115414321154"
predefinedNumbers = ["21154", "143", "21154143", "1634", "163421154"]
makeNumSentences(nums, predefinedNumbers)
Output:
[
    ":143:1634:21154:143:21154:",
    ":143:163421154:143:21154:",
    ":143:1634:21154143:21154:"
]
*/

const nums = "14316342115414321154"
const predefinedNumbers = ["21154", "143", "21154143", "1634", "163421154"]

const makeNumSentences = (numsString, predefinedNumbers) => {
  const newString = predefinedNumbers.reduce((acc, currentValue) => {
    if (numsString.indexOf(currentValue) === 0) {
      if(numsString.substring(currentValue.length).length > 0) {
        const match = makeNumSentences(numsString.substring(currentValue.length), predefinedNumbers)
          .map(el => `:${currentValue}${el}`)
        acc.push(...match)
      } else {
        acc.push(`:${currentValue}:`)
      }
    }
    return acc;
  }, [])

  return newString
}

console.log(makeNumSentences(nums, predefinedNumbers))
