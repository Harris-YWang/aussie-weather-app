import * as React from 'react';
import styled from 'styled-components';

import Card from '../Card';
import GridItem from '../GridItem';
import Icon from './Icon';
import Label from './Label';
import Title from './Title';

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

const Temperature = styled((props) => <div {...props} />)`
	margin: 8px 0;
	font-size: 16px;
	font-weight: 600;
	color: ${(props: any) => (props.color > 0 ? 'red' : 'blue')};
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

export interface IWeatherCardProps {
	city: string;
	weatherState?: string;
	temp: number;
	minTemp?: number;
	maxTemp?: number;
	windSpeed?: number;
	humidity?: number;
	iconUrl?: string;
}

export const WeatherCard: React.StatelessComponent<IWeatherCardProps> = ({
	city,
	weatherState,
	temp,
	minTemp,
	maxTemp,
	windSpeed,
	humidity,
	iconUrl
}) => (
	<GridItem>
		<Card>
			<Title>{city}</Title>
			<InlineBlock>
				<Icon alt={weatherState} src={iconUrl} />
				<Label>{weatherState}</Label>
			</InlineBlock>
			<InlineBlock>
				<Temperature temp={temp}>{temp} °C</Temperature>
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

export default WeatherCard;
