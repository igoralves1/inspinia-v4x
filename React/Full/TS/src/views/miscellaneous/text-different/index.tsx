import ComponentCard from '@/components/cards/ComponentCard'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import TextDifferentView from '@/components/TextDifferentView'
import { useState } from 'react'
import { Col, Container, FormControl, Row } from 'react-bootstrap'

const Page = () => {
  const [originalText, setOriginalText] = useState<string>(
    'On a rainy Monday morning in a small town, Emma walked into her favorite café, her umbrella dripping and her hair slightly frizzy from the storm. She always ordered the same thing: black coffee, two sugars, and a blueberry muffin. But today, someone was already sitting at her usual table by the window. It was Jack — a quiet man with a book in hand and headphones around his neck. Their eyes met for a second. He smiled and motioned for her to join him. Hesitant but intrigued, Emma accepted.',
  )

  const [modifiedText, setModifiedText] = useState<string>(
    'On a rainy Monday morning in a small town, Emma stepped into her favorite café, her umbrella dripping and her hair slightly frizzy from the damp weather. She always ordered the same thing: black coffee with two sugars and a blueberry muffin. But today, someone was already seated at her usual window table. It was Jack — a quiet man with a book in one hand and headphones resting around his neck. Their eyes met briefly. He smiled and gestured for her to join him. Hesitant but curious, Emma agreed.',
  )

  return (
    <Container fluid>
      <PageBreadcrumb title="Text Different" subtitle="Miscellaneous" />

      <ComponentCard title="diff">
        <Row>
          <Col md={6}>
            <h5 className="mb-2 text-uppercase">Original Text</h5>
            <FormControl as="textarea" className="diff-original" rows={8} value={originalText} onChange={(e) => setOriginalText(e.target.value)} />
          </Col>

          <Col md={6}>
            <h5 className="mb-2 text-uppercase">Changed Text</h5>
            <FormControl as="textarea" className="diff-changed" rows={8} value={modifiedText} onChange={(e) => setModifiedText(e.target.value)} />
          </Col>

          <Col md={12}>
            <h5 className="mb-2 mt-3 text-uppercase">Results</h5>
            <TextDifferentView originalText={originalText} modifiedText={modifiedText} />
          </Col>
        </Row>
      </ComponentCard>
    </Container>
  )
}

export default Page
