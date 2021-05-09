import { useState, useEffect } from 'react'

const PREFIX = 'messaging-app: '

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState()

  const prefixedKey = PREFIX + key
  const jsonValue = localStorage.getItem(prefixedKey)

  useEffect(() => {
    localStorage.setItem(prefixedKey, value)
  }, [prefixedKey, value])

  if (jsonValue != null) {
    return JSON.parse(jsonValue)
  } else if (typeof initialValue === 'function') {
    return initialValue()
  } else {
    return initialValue
  }

  return [value, setValue]
}

export default useLocalStorage
