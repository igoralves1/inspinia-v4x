import Quill from 'quill';
import {
    tablerAlignCenter,
    tablerAlignJustified,
    tablerAlignLeft,
    tablerAlignRight,
    tablerBackground,
    tablerBlockquote,
    tablerBold,
    tablerCode,
    tablerH1,
    tablerH2,
    tablerH3,
    tablerIndentDecrease,
    tablerIndentIncrease,
    tablerItalic,
    tablerLetterT,
    tablerLink,
    tablerList,
    tablerPaint,
    tablerPhoto,
    tablerStrikethrough,
    tablerSubscript,
    tablerSuperscript,
    tablerTrash,
    tablerUnderline,
    tablerVideo
} from '@ng-icons/tabler-icons';

export function initQuillIcons() {
    const icons = Quill.import('ui/icons') as any;

    icons['bold'] = tablerBold
    icons['italic'] = tablerItalic
    icons['underline'] = tablerUnderline
    icons['strike'] = tablerStrikethrough
    icons['list'] = tablerList
    icons['bullet'] = tablerList
    icons['indent'] = tablerIndentIncrease
    icons['outdent'] = tablerIndentDecrease
    icons['link'] = tablerLink
    icons['image'] = tablerPhoto
    icons['video'] = tablerVideo
    icons['code-block'] = tablerCode
    icons['clean'] = tablerTrash
    icons['color'] = tablerPaint
    icons['background'] = tablerBackground
    icons['script']['super'] = tablerSuperscript
    icons['script']['sub'] = tablerSubscript
    icons['blockquote'] = tablerBlockquote
    icons['align'][''] = tablerAlignLeft
    icons['align']['center'] = tablerAlignCenter
    icons['align']['right'] = tablerAlignRight
    icons['align']['justify'] = tablerAlignJustified
    icons['header']['1'] = tablerH1
    icons['header']['2'] = tablerH2
    icons['header']['3'] = tablerH3
    icons['header'][''] = tablerLetterT
}
