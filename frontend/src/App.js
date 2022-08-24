import * as Paint from "./Paint";

import { Canvas, Dual, Group, Input, Label, Small, Textarea } from "./styles";

import React from "react";

const width = 1280,
	height = 720;

const getImageFromFileUpload = async (file) => {
	const dataURL = await new Promise((res, rej) => {
		const reader = new FileReader();

		reader.onload = () => res(reader.result);
		reader.onerror = rej;

		reader.readAsDataURL(file);
	});

	const image = new Image();

	await new Promise((res) => {
		image.src = dataURL;
		image.onload = res;
	});

	return image;
};

function App() {
	const canvas = React.useRef();
	const [personImage, setPersonImage] = React.useState();
	const [personImagePosition, setPersonImagePosition] = React.useState(0); // (x position)
	const [bookImage, setBookImage] = React.useState();
	const [name, setName] = React.useState();
	const [logo, setLogo] = React.useState();
	const [fontSize, setFontSize] = React.useState(60);

	const handlePersonImageUpload = async ({
		target: {
			files: [file],
		},
	}) => {
		let personImage = await getImageFromFileUpload(file);
		setPersonImage(personImage);
	};

	const handleBookImageUpload = async ({
		target: {
			files: [file],
		},
	}) => {
		let bookImage = await getImageFromFileUpload(file);
		setBookImage(bookImage);
	};

	React.useEffect(() => {
		console.log({ name });

		if (canvas.current) {
			const context = canvas.current.getContext("2d");

			console.log({ personImagePosition });

			context.clearRect(0, 0, width, height);

			Paint.template({ logo }).with(context);
			if (personImage)
				Paint.person({
					image: personImage,
					position: personImagePosition,
				}).with(context);
			if (bookImage) Paint.book({ image: bookImage }).with(context);
			if (name) Paint.name(name, { fontSize }).with(context);
		}
	}, [personImage, personImagePosition, bookImage, name, fontSize]);

	React.useEffect(() => {
		(async function () {
			let logo = new Image();

			await new Promise((res) => {
				logo.src = require("./assets/logo.png");
				logo.onload = res;
			});

			setLogo(logo);
		})();
	}, []);

	return (
		<React.Fragment>
			<Group>
				<Canvas ref={canvas} width={width} height={height} />
			</Group>

			<Dual>
				<Group>
					<Label>Name of interviewee</Label>
					<Textarea
						value={name}
						onChange={({ target }) => setName(target.value)}
						type="text"
						placeholder="Enter name here"
					/>
				</Group>
				<Group>
					<Label>Font size (px)</Label>
					<Input
						type="number"
						value={fontSize}
						onChange={({ target }) => setFontSize(target.value)}
					/>
				</Group>
			</Dual>

			<Dual>
				<Group>
					<Label>Image of interviewee</Label>
					<Small>This should already be filtered and high res.</Small>
					<Input
						type="file"
						name="person"
						onChange={handlePersonImageUpload}
					/>
				</Group>
				{personImage && (
					<Group>
						<Label>Adjust image horizontal position</Label>
						<Input
							type="range"
							onChange={({ target }) =>
								setPersonImagePosition(target.value)
							}
							min={-1 * personImage.width}
							max={0}
							value={personImagePosition}
						/>
					</Group>
				)}
			</Dual>

			<Group>
				<Label>Image of book (if required)</Label>
				<Input
					type="file"
					name="book"
					onChange={handleBookImageUpload}
				/>
			</Group>
		</React.Fragment>
	);
}

export default App;
