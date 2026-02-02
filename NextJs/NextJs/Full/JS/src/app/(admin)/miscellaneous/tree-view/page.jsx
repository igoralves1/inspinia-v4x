'use client';

import { data } from '@/app/(admin)/miscellaneous/tree-view/data';
import ComponentCard from '@/components/cards/ComponentCard';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { useState } from 'react';
import { Tree } from 'react-arborist';
import { Col, Container, Row } from 'react-bootstrap';
import { TbChevronDown, TbChevronRight } from 'react-icons/tb';
const Page = () => {
  const [treeData, setTreeData] = useState(data);
  const updateNodeById = (data, id, checked) => {
    return data.map(node => {
      if (node.id === id) {
        return {
          ...node,
          checked
        };
      }
      if (node.children) {
        return {
          ...node,
          children: updateNodeById(node.children, id, checked)
        };
      }
      return node;
    });
  };
  return <Container fluid>
      <PageBreadcrumb title="Treeview" subtitle="Miscellaneous" />

      <Row>
        <Col md={6}>
          <ComponentCard title="Basic Treeview">
            <Tree initialData={data} openByDefault>
              {({
              node,
              style,
              dragHandle
            }) => <div style={style} ref={dragHandle} onClick={() => node.toggle()} className="d-flex gap-1 align-items-center py-1">
                  {node.data.icon}
                  <span>{node.data.text}</span>
                </div>}
            </Tree>
          </ComponentCard>
        </Col>

        <Col md={6}>
          <ComponentCard title="Tree with Checkboxes">
            <Tree data={treeData} openByDefault>
              {({
              node,
              style
            }) => <div style={style} className="d-flex align-items-center gap-2 py-1">
                  <input type="checkbox" className={'form-check-input'} checked={node.data.checked || false} onChange={e => {
                const updated = updateNodeById(treeData, node.id, e.target.checked);
                setTreeData(updated);
              }} />
                  {node.data.icon}
                  <span>{node.data.text}</span>
                </div>}
            </Tree>
          </ComponentCard>
        </Col>

        <Col md={6}>
          <ComponentCard title="Expandable Toggle with Icons">
            <Tree initialData={data} openByDefault={true}>
              {({
              node,
              style,
              dragHandle
            }) => <div style={style} ref={dragHandle} className="d-flex align-items-center gap-2 py-1">
                  <div>
                    {node.isInternal && <span onClick={() => node.toggle()} style={{
                  cursor: 'pointer'
                }}>
                        {node.isOpen ? <TbChevronDown /> : <TbChevronRight />}
                      </span>}
                    {node.data.icon}
                  </div>
                  <span>{node.data.text}</span>
                </div>}
            </Tree>
          </ComponentCard>
        </Col>
      </Row>
    </Container>;
};
export default Page;