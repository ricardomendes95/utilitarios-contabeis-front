/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
import {
  Layout,
  Card,
  Form,
  Input,
  Button,
  FormInstance,
  DatePicker,
  Row,
  Col,
  InputNumber,
  Select,
  Checkbox
} from 'antd'
import { Content } from 'antd/lib/layout/layout'
import Sidebar from '../../components/Sidebar'
import { CartaResponsabilidadeService } from '../../services'
import React, { useState } from 'react'
import { GetCartaResponsabilidadeResponse } from '../../services/cartaResponsabilidade/types'
import { Moment } from 'moment'

import 'moment/locale/pt-br'
import locale from 'antd/es/date-picker/locale/pt_BR'

const { Option } = Select

const CartaResponsabilidade: React.FC = () => {
  const [startDate, setStartDate] = useState<string>()
  const [endDate, setEndDate] = useState<string>()
  const [homeSheet, setHomeSheet] = useState<number>()
  const [descriptionPaging, setDescriptionPaging] = useState<string>()
  const [bookNumber, setBookNumber] = useState<number>()
  const [checkBookNumber, setCheckBookNumber] = useState(true)
  const [registrationData, setRegistrationData] = useState<string>()
  const [checkEmissionDate, setCheckEmissionDate] = useState(true)
  const [id, setId] = useState<number>()
  const [razao, setRazao] = useState<string>()
  const [typeAdress, setTypeAdress] = useState<string>()
  const [adress, setAdress] = useState<string>()
  const [street, setStreet] = useState<string>()
  const [number, setNumber] = useState<number>()
  const [distric, setDistric] = useState<number>()
  const [codCounty, setCodCounty] = useState<number>()
  const [county, setCounty] = useState<string>()
  const [uf, setUf] = useState<string>()
  const [cep, setCep] = useState<number>()
  const [crc, setCrc] = useState<string>()

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }

  const tailLayout = {
    wrapperCol: { offset: 20, span: 16 }
  }

  async function handleFinish(values: any) {
    console.log(values)
  }
  function handleStartDate(date: Moment | null, dateString: string) {
    console.log(dateString)

    setStartDate(dateString)
  }
  function handleEndDate(date: Moment | null, dateString: string) {
    setEndDate(dateString)
  }
  function handleChangeDescriptionPaging(value: string) {
    setDescriptionPaging(value)
  }
  function handleChangeRegistrationData(value: string) {
    setRegistrationData(value)
  }
  function handleChangeCrc(value: string) {
    setCrc(value)
  }
  function handleCheckBookNumber() {
    setCheckBookNumber(!checkBookNumber)
  }
  function handleCheckEmissionDate() {
    setCheckEmissionDate(!checkEmissionDate)
  }
  return (
    <Sidebar>
      <Layout>
        <Content style={{ padding: '15px' }}>
          <Card type="inner" title="Carta de Responsabilidade">
            <Form
              {...layout}
              onFinish={handleFinish}
              layout="vertical"
              fields={[
                { name: ['homeSheet'], value: homeSheet },
                { name: ['id'], value: id },
                { name: ['razao'], value: razao },
                { name: ['typeAdress'], value: typeAdress },
                { name: ['adress'], value: adress },
                { name: ['number'], value: number },
                { name: ['distric'], value: distric },
                { name: ['codCounty'], value: codCounty },
                { name: ['county'], value: county },
                { name: ['uf'], value: uf },
                { name: ['cep'], value: cep }
              ]}
            >
              <Row>
                <Col span={5}>
                  <Form.Item
                    label="Data inicial"
                    name="startDate"
                    labelCol={{ span: '24' }}
                  >
                    <DatePicker onChange={handleStartDate} locale={locale} />
                  </Form.Item>
                  <Form.Item
                    label="Data Final"
                    name="endDate"
                    labelCol={{ span: '24' }}
                  >
                    <DatePicker onChange={handleEndDate} locale={locale} />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    name="homeSheet"
                    label="Folha inicial"
                    labelCol={{ span: '24' }}
                  >
                    <InputNumber min={1} defaultValue={1} />
                  </Form.Item>
                  <Form.Item
                    name="descriptionPaging"
                    label="Descrição paginação"
                    labelCol={{ span: '24' }}
                  >
                    <Select
                      defaultValue="Folha"
                      onChange={handleChangeDescriptionPaging}
                    >
                      <Option value="Folha">Folha</Option>
                      <Option value="Página">Pagina</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item
                    name="bookNumber"
                    label="Emitir nº do livro"
                    labelCol={{ span: '24' }}
                  >
                    <Checkbox
                      style={{ marginRight: '20px' }}
                      checked={checkBookNumber}
                      onChange={handleCheckBookNumber}
                    ></Checkbox>
                    <InputNumber
                      disabled={!checkBookNumber}
                      min={1}
                      defaultValue={1}
                    />
                  </Form.Item>

                  <Form.Item
                    name="registrationData"
                    label="Dados Cadastrais"
                    labelCol={{ span: '24' }}
                  >
                    <Select
                      defaultValue="Conforme período atual"
                      onChange={handleChangeRegistrationData}
                    >
                      <Option value="atual">Conforme período atual</Option>
                      <Option value="inicial">Conforme período inicial</Option>
                      <Option value="final">Conforme período final</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item name="checkEmissionDate">
                    <Checkbox
                      style={{ marginRight: '20px' }}
                      checked={checkEmissionDate}
                      onChange={handleCheckEmissionDate}
                    ></Checkbox>
                    <label>Emitir data de emisão/hora</label>
                  </Form.Item>
                </Col>
              </Row>
              <Card title="Dados do Escritório" bordered={false}>
                <Row>
                  <Col span={5}>
                    <Form.Item
                      name="id"
                      label="Código"
                      rules={[
                        {
                          required: true,
                          message: 'Insira o código da empresa'
                        }
                      ]}
                      labelCol={{ span: '15' }}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={19}>
                    <Form.Item name="razao" label="Empresa do Escritorio">
                      <Input value={razao} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={5}>
                    <Form.Item
                      name="typeAdress"
                      label="Tipo do endereço"
                      labelCol={{ span: '24' }}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={19}>
                    <Form.Item name="street" label="Endereço">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={5}>
                    <Form.Item
                      name="number"
                      label="Número"
                      labelCol={{ span: '24' }}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={19}>
                    <Form.Item name="distric" label="Bairro">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={5}>
                    <Form.Item
                      name="codCounty"
                      label="Código município"
                      labelCol={{ span: '24' }}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={10}>
                    <Form.Item name="county" label="Município">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item name="uf" label="UF">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={5}>
                    <Form.Item name="cep" label="CEP">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={10}>
                    <Form.Item
                      name="crc"
                      label="Numero de Inscrição do CRC"
                      labelCol={{ span: '24' }}
                    >
                      <Select
                        defaultValue="Do contador"
                        onChange={handleChangeCrc}
                      >
                        <Option value="Do contador">Do Contador</Option>
                        <Option value="Do escritorio">Do Escritório</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </Card>

              <Form.Item {...tailLayout}>
                <Button
                  htmlType="submit"
                  style={{ backgroundColor: '#3CB371', color: 'white' }}
                >
                  Confirmar
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Content>
      </Layout>
    </Sidebar>
  )
}
export default CartaResponsabilidade
