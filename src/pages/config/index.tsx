import { Button, Card, Col, Input, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { ConfigService } from '../../services'

export const Config = () => {
  const [ipServer, setIpServer] = useState<string | undefined>()

  async function handleSaveIP() {
    const save = await ConfigService.saveIpDominio({
      ipServer
    })
    console.log(save)
  }

  async function getServerDominio() {
    const get = await ConfigService.getIpDominio()
    if (get.data) {
      setIpServer(get.data)
    }
  }

  useEffect(() => {
    getServerDominio()
  }, [])

  return (
    <Sidebar selected="9">
      <Content style={{ padding: '15px' }}>
        <Card type="inner" title="Conexão Dominio">
          <Row>
            <Col span={8}>
              <label htmlFor="">
                Informe o IP onde o servidor se encontra:
              </label>
              <Input
                placeholder="ex: 192.168.0.1"
                value={ipServer}
                onChange={e => setIpServer(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col
              span={8}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '10px'
              }}
            >
              <Button type="primary" onClick={handleSaveIP}>
                {' '}
                Salvar
              </Button>
            </Col>
          </Row>
        </Card>
      </Content>
    </Sidebar>
  )
}
