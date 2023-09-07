import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface UsePathProps {
  lastPath: string
  paths: string[]
  path: string
}

export const usePath = (): UsePathProps => {
  const location = useLocation()
  const [lastPast, setLastPath] = useState<string>('')
  const [paths, setPaths] = useState<string[]>([])

  useEffect(() => {
    if (location.pathname.length > 0) {
      const arr = location.pathname.split('/').filter((x) => x)
      setPaths(arr)
      setLastPath(arr[arr.length - 1])
    }
  }, [location.pathname])

  return {
    lastPath: lastPast,
    paths: paths,
    path: location.pathname
  }
}
