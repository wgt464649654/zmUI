import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background: red;
`

export default class Button extends React.Component {
  render() {
    return (
      <Btn>npm测试</Btn>
    )
  }
}
