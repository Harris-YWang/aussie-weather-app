import styled from 'styled-components';

const SearchArea = styled.div`
	display: inline-block;
	padding: 10px;
	@media only screen and (min-width: 450px) {
		float: right;
	}
	@media (max-width: 360px) {
		padding: 1px;
	}
`;

export default SearchArea;
