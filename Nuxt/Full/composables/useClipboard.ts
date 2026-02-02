export function useClipboard() {
    const copyText = async (value: string): Promise<void> => {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(value)
        } else {
            const textarea = document.createElement('textarea')
            textarea.value = value
            textarea.style.position = 'fixed'
            textarea.style.opacity = '0'
            document.body.appendChild(textarea)
            textarea.focus()
            textarea.select()

            try {
                document.execCommand('copy')
                return Promise.resolve()
            } catch (err) {
                return Promise.reject(err)
            } finally {
                document.body.removeChild(textarea)
            }
        }
    }

    const cutText = async (element: HTMLInputElement | HTMLTextAreaElement): Promise<void> => {
        element.select()
        const success = document.execCommand('cut')
        return success ? Promise.resolve() : Promise.reject('Cut failed')
    }

    const highlightElementText = (el: HTMLElement) => {
        const range = document.createRange()
        range.selectNodeContents(el)
        const selection = window.getSelection()
        selection?.removeAllRanges()
        selection?.addRange(range)
    }

    return {
        copyText,
        cutText,
        highlightElementText,
    }
}
