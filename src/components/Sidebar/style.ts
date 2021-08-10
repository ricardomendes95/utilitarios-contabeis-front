import styled from 'styled-components'
import { Layout } from 'antd'
const { Header } = Layout

export const Logo = styled.img`
  /* height: ${props => props.height}; */
  width: 100%;
  /* margin: 16px; */
  /* background: #f0f2f5; */
  border-style: outset;
  border-color: #001529;
  background-image: radial-gradient(
    circle at 50% -20.71%,
    #ffffff 0,
    #ffffff 12.5%,
    #f3ffff 25%,
    #e1faf9 37.5%,
    #cdf2f2 50%,
    #b9e9ed 62.5%,
    #a6e1e9 75%,
    #95d9e7 87.5%,
    #85d2e6 100%
  );

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
