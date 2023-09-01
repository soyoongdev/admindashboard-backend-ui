import { useLocalStorage, useMediaQuery, useUpdateEffect } from 'usehooks-ts'

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

interface UseDarkModeOutput {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY)
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    'usehooks-ts-dark-mode',
    defaultValue ?? isDarkOS ?? false
  )

  // Update darkMode if os prefers changes
  useUpdateEffect(() => {
    setDarkMode(isDarkOS)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkOS])

  return {
    isDarkMode,
    toggleDarkMode: () => setDarkMode((prev) => !prev)
  }
}
