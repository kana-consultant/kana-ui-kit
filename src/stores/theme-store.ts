import { Store } from '@tanstack/store'
import { useStore } from '@tanstack/react-store'

export type TThemeMode = 'light' | 'dark' | 'system'
export type TResolvedTheme = 'light' | 'dark'

export type TThemeState = {
  mode: TThemeMode
  resolved: TResolvedTheme
}

const STORAGE_KEY = 'kana-ui-theme'

function readStoredMode(): TThemeMode {
  if (typeof window === 'undefined') return 'system'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored
  return 'system'
}

function systemPrefersDark() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function resolve(mode: TThemeMode): TResolvedTheme {
  if (mode === 'system') return systemPrefersDark() ? 'dark' : 'light'
  return mode
}

function applyClass(resolved: TResolvedTheme) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.classList.toggle('dark', resolved === 'dark')
  root.style.colorScheme = resolved
}

const initialMode = readStoredMode()
export const themeStore = new Store<TThemeState>({
  mode: initialMode,
  resolved: resolve(initialMode),
})

applyClass(themeStore.state.resolved)

export function setThemeMode(mode: TThemeMode) {
  const resolved = resolve(mode)
  themeStore.setState(() => ({ mode, resolved }))
  if (typeof window !== 'undefined') window.localStorage.setItem(STORAGE_KEY, mode)
  applyClass(resolved)
}

export function toggleTheme() {
  const current = themeStore.state.resolved
  setThemeMode(current === 'dark' ? 'light' : 'dark')
}

if (typeof window !== 'undefined') {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  media.addEventListener('change', () => {
    if (themeStore.state.mode !== 'system') return
    const resolved = systemPrefersDark() ? 'dark' : 'light'
    themeStore.setState((s) => ({ ...s, resolved }))
    applyClass(resolved)
  })
}

export function useTheme() {
  return useStore(themeStore)
}

export function useThemeMode() {
  return useStore(themeStore, (s) => s.mode)
}

export function useResolvedTheme() {
  return useStore(themeStore, (s) => s.resolved)
}
