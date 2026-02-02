import Quill from 'quill'
import { iconToSVG } from '@iconify/utils'
import tablerIcons from '@iconify-json/tabler/icons.json'

export default defineNuxtPlugin(() => {
  const icons = Quill.import('ui/icons') as Record<string, any>

const renderIcon = (name: string, size = 18) => {
    const key = `tabler:${name}`
    const icon = (tablerIcons as any).icons?.[name] || (tablerIcons as any)[key]
    if (!icon) {
      // fallback to text label so button still shows something
      console.warn(`Icon not found: ${key}`)
      return name
    }
    const svg = iconToSVG(icon, { height: String(size) })
    // Compose full SVG markup
    const attrs = Object.entries(svg.attributes)
      .map(([k, v]) => `${k}="${v}"`).join(' ')
    return `<svg ${attrs}>${svg.body}</svg>`
  }

  // Example mappings
  icons['bold'] = renderIcon('bold')
  icons['italic'] = renderIcon('italic')
  icons['underline'] = renderIcon('underline')
  icons['link'] = renderIcon('link')
  icons['image'] = renderIcon('photo')
  icons['video'] = renderIcon('video')
  icons['code-block'] = renderIcon('code')
  icons['list'] = renderIcon('list')
  icons['ordered'] = renderIcon('list-numbers')
  icons['blockquote'] = renderIcon('quote')
})
