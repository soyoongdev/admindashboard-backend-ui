import { useCallback, useEffect, useState } from 'react'
import { useLocalStorage, useMediaQuery } from 'usehooks-ts'

export const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

interface UseDarkModeOutput {
  theme: 'dark' | 'light' | 'system'
  toggleDarkLightMode: () => void
  setTheme: (theme: 'dark' | 'light' | 'system') => void
}

export function useDarkMode(defaultValue: 'dark' | 'light' | 'system' = 'system'): UseDarkModeOutput {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY)
  const [localTheme, setLocalTheme] = useLocalStorage<'dark' | 'light' | 'system'>('theme', defaultValue)
  const [theme, setTheme] = useState<'dark' | 'light' | 'system'>(() => {
    return localTheme || (isDarkOS ? 'dark' : 'light')
  })

  const onWindowWatch = () => {
    document.documentElement.classList.toggle('dark', localTheme === 'dark' || (!('theme' in localStorage) && isDarkOS))
  }

  onWindowWatch()

  useEffect(() => {
    if (theme === 'system') {
      localStorage.removeItem('theme')
      onWindowWatch()
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark')
      setLocalTheme(theme)
    }
  }, [theme])

  const toggleDarkLightMode = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return {
    theme,
    toggleDarkLightMode,
    setTheme
  }
}
