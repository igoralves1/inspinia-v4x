export function getColor(v: string, a: number = 1) {
    if (typeof window === 'undefined') return ''

    const html = document.documentElement
    if (!html) return ''

    const val = getComputedStyle(document.documentElement)
        .getPropertyValue(`--ins-${v}`)
        .trim();

    return v.includes('-rgb') ? `rgba(${val}, ${a})` : val;
}

export function getDefaultFontFamily(): string {
    const body = document.body
    if (!body) return ''
    const font = getComputedStyle(body).fontFamily
    return font ?? ''
}
