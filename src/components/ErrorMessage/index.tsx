import React from 'react';
import styled from 'styled-components';

const ErrorTitle = styled.div`
	display: block;
	font-size: 1.17em;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	font-weight: bold;
`;

const ErrorText = styled.div`
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
`;

const ErrorMessage = (props: { keyword: string }) => (
	<div>
		<ErrorTitle>Sorry, No results</ErrorTitle>
		<ErrorText>Nothing came up for that "{props.keyword}" search</ErrorText>
	</div>
);

export default ErrorMessage;
