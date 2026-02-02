import PageBreadcrumb from '@/components/PageBreadcrumb'
import { getColor } from '@/helpers/color'
import ApexTree from 'apextree'
import { useEffect, useRef } from 'react'
import { Card, CardBody, CardHeader, CardTitle, Container } from 'react-bootstrap'
import { data1, data2 } from './data'

const Page = () => {
  const treesRef = useRef<(typeof ApexTree)[]>([])

  useEffect(() => {
    const fontFamily = getComputedStyle(document.body).fontFamily

    const basicNodeTemplate = (content: any) => `
      <div style='display: flex; flex-direction: row; gap:10px; align-items: center; height: 100%; box-shadow: 1px 2px 4px #ccc; padding: 0 15px;'>
        <img style='width: 50px; height: 50px; border-radius: 50%;' src='${content.imageURL}' alt=''>
        <div style="font-weight: 500; font-family: ${fontFamily}; font-size: 14px">${content.name}</div>
      </div>`

    const verticalNodeTemplate = (content: any) => `
      <div style='display: flex; flex-direction: column; gap: 10px; justify-content: center; align-items: center; height: 100%'>
        <img style='width: 50px; height: 50px; border-radius: 50%;' src='${content.imageURL}' alt=''/>
        <div style="font-weight: 500; font-family: ${fontFamily}; font-size: 14px">${content.name}</div>
      </div>`

    const sharedOptions = {
      contentKey: 'data',
      width: '100%',
      enableToolbar: false,
      nodeWidth: 170,
      nodeHeight: 70,
      childrenSpacing: 70,
      siblingSpacing: 30,
      fontColor: getColor('light-text-emphasis'),
      nodeTemplate: basicNodeTemplate,
      nodeStyle: 'box-shadow: -3px 6px 8px -5px rgba(0,0,0,0.31)',
      edgeColorHover: getColor('secondary'),
    }

    const renderTree = (id: string, options: any, data: any) => {
      const el = document.getElementById(id)
      if (el) {
        el.innerHTML = ''
        const tree = new ApexTree(el, options)
        tree.render(data)
        treesRef.current.push(tree)
      }
    }

    renderTree('right-to-left', { ...sharedOptions, direction: 'right' }, data1)
    renderTree('bottom-tree', { ...sharedOptions, direction: 'bottom' }, data1)
    renderTree(
      'top-tree',
      {
        ...sharedOptions,
        direction: 'top',
        nodeWidth: 150,
        nodeHeight: 100,
        nodeTemplate: verticalNodeTemplate,
      },
      data2,
    )
    renderTree(
      'collapse-expand',
      {
        ...sharedOptions,
        direction: 'top',
        nodeWidth: 150,
        nodeHeight: 100,
        nodeTemplate: verticalNodeTemplate,
        enableExpandCollapse: true,
      },
      data2,
    )

    return () => {
      treesRef.current.forEach((tree) => {
        if (typeof tree.destroy === 'function') {
          tree.destroy()
        }
      })
      treesRef.current = []
    }
  }, [])

  return (
    <Container fluid>
      <PageBreadcrumb title="Apex Tree" subtitle="Charts" />

      <Card>
        <CardHeader>
          <CardTitle as={'h4'}>Right to left</CardTitle>
        </CardHeader>

        <CardBody>
          <div dir="ltr">
            <div id="right-to-left" style={{ margin: '0 auto' }}></div>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle as={'h4'}>Bottom</CardTitle>
        </CardHeader>

        <CardBody>
          <div dir="ltr">
            <div id="bottom-tree" style={{ margin: '0 auto' }}></div>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle as={'h4'}>Top to bottom</CardTitle>
        </CardHeader>

        <CardBody>
          <div dir="ltr">
            <div id="top-tree" style={{ margin: '0 auto' }}></div>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle as={'h4'}>Collapse Expand</CardTitle>
        </CardHeader>

        <CardBody>
          <div dir="ltr">
            <div id="collapse-expand" style={{ margin: '0 auto' }}></div>
          </div>
        </CardBody>
      </Card>
    </Container>
  )
}

export default Page
