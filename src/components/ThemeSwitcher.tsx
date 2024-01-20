import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    // Set initial theme based on browser preference if not stored in localStorage
    if (!storedTheme) {
      const preferredTheme =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';

          console.log(window.matchMedia('(prefers-color-scheme: dark)'));
          
      setTheme(preferredTheme);
      console.log(preferredTheme);
      
    }

    setMounted(true);
  }, [setTheme]);

  if (!mounted) {
    return null
  }

  return (
    <select value={theme} onChange={e => setTheme(e.target.value)}>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
      <option value="system">System</option>
    </select>
  )
}

export default ThemeSwitch