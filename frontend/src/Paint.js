export const template = ({ logo }) => {
	return {
		with: async (context) => {
			context.fillStyle = "white";
			context.textBaseline = "top";
			context.fillRect(0, 0, context.canvas.width, context.canvas.height);
			context.fillStyle = "#1a1a1a";

			context.drawImage(logo, 30, 30, 160, 64);

			context.font = `200 30px "Gill Sans"`;
			context.fillText(
				"A Christian Heritage London interview",
				30,
				context.canvas.height - 30 - 30
			);
		},
	};
};

export const person = ({ image, position }) => {
	const ar = image.width / image.height;

	return {
		with: (context) => {
			context.drawImage(
				image,
				-position,
				0,
				image.width,
				image.height,
				context.canvas.width / 2,
				0,
				context.canvas.height * ar,
				context.canvas.height
			);
		},
	};
};

export const book = ({ image }) => {
	return {
		with: (context) => {
			context.drawImage(
				image,
				0,
				0,
				image.width,
				image.height,
				459,
				82,
				362,
				556
			);
		},
	};
};

export const name = (text, { fontSize = 60 }) => {
	return {
		with: async (context) => {
			const lines = text.split("\n"),
				lineHeight = fontSize * 1.2;

			context.font = `italic 800 ${fontSize}px/${lineHeight}px "URW Antiqua"`;
			context.textBaseline = "top";

			lines.forEach((line, index) => {
				context.fillText(
					line,
					30,
					context.canvas.height / 2 -
						((lines.length - 1) * lineHeight) / 2 +
						index * lineHeight
				);
			});
		},
	};
};
