import { useEffect } from 'react'
import { useLocalStorage, useMediaQuery } from 'usehooks-ts'

export const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

interface UseDarkModeOutput {
  isDarkMode: boolean
  toggleDarkMode: () => void
  disableDarkLightMode: () => void
}

export function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY)
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    'usehooks-ts-dark-mode',
    defaultValue ?? isDarkOS ?? false
  )

  // Update darkMode if os prefers changes
  useEffect(() => {
    if (isDarkOS && isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode, isDarkOS])

  return {
    isDarkMode,
    toggleDarkMode: () => setDarkMode((prev) => !prev),
    disableDarkLightMode: () => localStorage.removeItem('theme')
  }
}
