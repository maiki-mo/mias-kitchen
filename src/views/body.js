import React, { Fragment } from 'react';
import styled from 'styled-components';

import text from '../constants/english.json';

const BodyContainer = styled.section`
  width: 100%;
  height: 1600px;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const BodyQuote = styled.h1`
  font-size: 18px;
  padding: 0 200px;
  text-align: center;
`;

const BodyColumn = styled.div`
  text-align: center;
  height: 300px;
`;

const BodyRow = styled.div`
  width: 100%;
`;

const BodyText = styled.p`
  font-size: 18px;
  padding: 0 50px;
  text-align: left;
`;

const BodyTextHeader = styled.h4`
  text-align: center;
  font-size: 38px;
  font-weight: 300;
  margin: 20px 100px;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
`;

const Body = () => (
  <Fragment>
    <BodyQuote>
      {text.body.quote}
    </BodyQuote>
    <BodyContainer>
      <BodyRow>
        <BodyColumn>
          <BodyText>
            <BodyTextHeader>
              {text.body.rowOneHeader}
            </BodyTextHeader>
            {text.body.rowOne}
          </BodyText>
        </BodyColumn>
        <BodyColumn>Hey</BodyColumn>
      </BodyRow>
      <BodyRow>
        <BodyColumn>Hey</BodyColumn>
        <BodyColumn>Hey</BodyColumn>
      </BodyRow>
    </BodyContainer>
  </Fragment>
);

export default Body;
