import { writable } from 'svelte/store'

export const theme = writable(localStorage.getItem('theme') || 'light')

theme.subscribe((t) => localStorage.setItem('theme', t))
