import { getColor } from '@/helpers/color'
import { diffWords } from 'diff'
import { type CSSProperties, type JSX, useEffect, useState } from 'react'

type PropsType = {
  originalText: string
  modifiedText: string
}

const TextDifferentView = ({ originalText, modifiedText }: PropsType) => {
  const [diffOutput, setDiffOutput] = useState<JSX.Element[]>([])

  useEffect(() => {
    const diff = diffWords(originalText, modifiedText)

    const jsx = diff.map((part, index) => {
      let style: CSSProperties = {}

      if (part.added) {
        style = { backgroundColor: getColor('success-rgb', 0.1), color: getColor('success') }
      } else if (part.removed) {
        style = {
          backgroundColor: getColor('danger-rgb', 0.1),
          color: getColor('danger'),
          textDecoration: 'line-through',
        }
      }

      return (
        <span key={index} style={style}>
          {part.value}
        </span>
      )
    })

    setDiffOutput(jsx)
  }, [originalText, modifiedText])

  return (
    <div className="p-3 bg-light-subtle border border-dashed rounded lh-lg">
      <div className="diff-output diff">{diffOutput}</div>
    </div>
  )
}

export default TextDifferentView
