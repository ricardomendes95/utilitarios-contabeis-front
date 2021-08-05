/* eslint-disable react/display-name */
import { Layout, Table, Tag, Space, Card, Form, Input, Button } from 'antd'
import { Content, Footer, Header } from 'antd/lib/layout/layout'
import * as React from 'react'
import Sidebar from '../../../components/Sidebar'
import ReactDOM from 'react-dom'
import { FormInstance } from 'antd/lib/form'
import { CartaResponsabilidadeService } from '../../../services'
import { useState } from 'react'

const DownloadCarta: React.FC = () => {
  const [directory, setDirectory] = useState('')

  const formRef = React.createRef<FormInstance>()
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }
  const tailLayout = {
    wrapperCol: { offset: 20, span: 16 }
  }

  async function onFinish(values: any) {
    console.log(values)
    const { data } = await CartaResponsabilidadeService.getAll()
    if (data) {
      setDirectory(data.name)
    }
    console.log(data.name)
  }

  function onReset() {
    formRef.current!.resetFields()
  }

  function onFill() {
    formRef.current!.setFieldsValue({
      note: 'Hello world!',
      gender: 'male'
    })
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (
        text:
          | boolean
          | React.ReactChild
          | React.ReactFragment
          | React.ReactPortal
          | null
          | undefined
      ) => <a>{text}</a>
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: string[]) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      )
    }
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]
  return (
    <Sidebar>
      <Layout>
        <Content style={{ padding: '15px' }}>
          <Card type="inner" title="Carta de Responsabilidade">
            <Form
              {...layout}
              ref={formRef}
              name="control-ref"
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="directory"
                label="Local onde deseja salvar"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginRight: '10px' }}
                >
                  Gerar
                </Button>
                <Button
                  htmlType="button"
                  onClick={onReset}
                  style={{ backgroundColor: '#3CB371', color: 'white' }}
                >
                  Baixar
                </Button>
              </Form.Item>
            </Form>
          </Card>

          <Table columns={columns} dataSource={data} />
        </Content>
      </Layout>
    </Sidebar>
  )
}
