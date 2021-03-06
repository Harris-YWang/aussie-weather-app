import styled from 'styled-components';

const Input = styled.input`
	margin: 5px;
	padding: 10px 15px;
	font-size: 16px;
	background: #fff;
	border: none;
	border-radius: 5px;
	display: inline-block;
	@media (max-width: 360px) {
		font-size: 12px;
	}
`;

export default Input;
