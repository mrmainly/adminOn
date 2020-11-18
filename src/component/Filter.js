import React from 'react'
import styled from 'styled-components'

const ContFilter = styled.div`
    display: flex;
    width: 25%;
    flex-direction: column;
    background-color: #dfdfdf;
    padding-bottom: 10px;
    margin-bottom: 20px;
    align-content: flex-end;
`
const TitleBlock = styled.div`
    width: 100%;
    background-color: #176887;
    font-size: 18px;
    color: white;
    padding-left: 10px;
`
const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
`
const ItemGroup = styled.span`
    color: #a8a8a8;
    font-size: 14px;
    padding-left: 10px;
`
const Item = styled.span`
    cursor: pointer;
`

const Filter = () => {
    return(
        <ContFilter>
        <TitleBlock>Фильтрwgr</TitleBlock>
       
        <ItemGroup>РЕЗУЛЬТАТ</ItemGroup>
           <MainDiv>
              <Item>ВСЕ</Item>
              <Item>Положительные</Item>
              <Item>Отрицательные</Item>
           </MainDiv>
          
        
  </ContFilter>
    )
}

export default Filter