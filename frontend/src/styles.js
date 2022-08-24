import styled from "styled-components";

export const Canvas = styled.canvas`
	border: 2px dashed lightgrey;
	border-radius: 2px;
`;

export const Dual = styled.div`
	display: grid;
	grid-template-columns: 415px 415px;
	column-gap: 15px;
`;

export const Group = styled.section`
	margin-bottom: 45px;
	width: 415px;
	position: relative;
`;

export const Label = styled.label`
	display: block;
	text-transform: uppercase;
	font-weight: 500;
	margin-bottom: 10px;
`;

export const Small = styled.small`
	margin-top: -5px;
	margin-bottom: 10px;
	display: block;
`;

export const Input = styled.input`
	padding: 5px 8px;
	display: block;
	margin-bottom: 10px;
	border: 2px solid lightgrey;
	border-radius: 2px;
`;

export const Textarea = styled.textarea`
	width: 100%;
	box-sizing: border-box;
	padding: 5px 8px;
	white-space: pre-wrap;
	font: italic 800 24px/1.2 "URW Antiqua";
	border: 2px solid lightgrey;
	border-radius: 2px;
	resize: none;
`;
