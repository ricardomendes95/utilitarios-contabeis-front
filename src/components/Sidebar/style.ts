import styled from 'styled-components'
import { Layout } from 'antd'
const { Header } = Layout

export const Logo = styled.img`
  /* height: ${props => props.height}; */
  width: 100%;
  /* margin: 16px; */
  background: #f0f2f5;
  /* border-radius: 5px; */
`
export const Headers = styled(Header)`
  background-color: green;
  padding: 0;
  margin-top: 0;
  height: 10%;
  display: flex;
  align-self: initial;
`
