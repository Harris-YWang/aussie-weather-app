import * as React from 'react';
import styled from 'styled-components';

import GridItem from '../GridItem';
import Card from '../Card';
import Title from './Title';
import Label from './Label';
import Icon from './Icon';

const Data = styled.div`
  margin: 32px 0 0 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  color: #212121;
`;

const DataLabel = styled.div`
  margin: 8px 0;
`;

const Temperature = styled(props => <div {...props} />)`
  margin: 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: ${(props: any) => (props.color ? 'red' : 'blue')};
`;

const InlineBlock = styled.div`
  display: inline-block;
  margin: 0 10px 0 10px;
  vertical-align: middle;
`;

const DataValue = styled.div`
  margin: 8px 0;
  word-break: break-all;
  :after {
    content: '\\00a0';
  }
`;

const Max = styled.span`
  color: red;
`;
const Min = styled.span`
  color: blue;
`;

export interface ForecastProps {
  city: string;
  weatherState?: string;
  temp: number;
  minTemp?: number;
  maxTemp?: number;
  windSpeed?: number;
  humidity?: number;
  iconUrl?: string;
}

export const Forecast: React.StatelessComponent<ForecastProps> = ({
  city,
  weatherState,
  temp,
  minTemp,
  maxTemp,
  windSpeed,
  humidity,
  iconUrl
}) => {
  return (
    <GridItem>
      <Card>
        <Title>{city}</Title>
        <InlineBlock>
          <Icon alt={weatherState} src={iconUrl} />
          <Label>{weatherState}</Label>
        </InlineBlock>
        <InlineBlock>
          <Temperature color={temp > 0}>{temp} °C</Temperature>
        </InlineBlock>
        <Data>
          <DataLabel>Max</DataLabel>
          <DataValue>
            <Max>{maxTemp} °C</Max>
          </DataValue>
          <DataLabel>Min</DataLabel>
          <DataValue>
            <Min>{minTemp} °C</Min>
          </DataValue>
          <DataLabel>Wind speed</DataLabel>
          <DataValue>{windSpeed} m/s</DataValue>
          <DataLabel>Humidty</DataLabel>
          <DataValue>{humidity} %</DataValue>
        </Data>
      </Card>
    </GridItem>
  );
};

export default Forecast;
