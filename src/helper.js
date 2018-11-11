export const addClass = (condition, className) => {
	if (condition) return ' ' + className;
	return '';
};

export const getScrollPosition = () => {
	const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	return scrollTop;
};

export const getWindowHeight = () => {
	const height = window.innerHeight;
	return height;
};

export const getWindowWidth = () => {
	const width = window.innerWidth;
	return width;
};

export const polygon = (obj) => {
	const ctx = obj.canvas;
	const {
		width, color = 'red', y, x,
	} = obj;

	const widthDouble = width * 2;
	ctx.translate(x, y + (width * -1));
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(width, width);
	ctx.lineTo(0, widthDouble);
	ctx.lineTo((width * -1), width);
	ctx.lineTo(0, 0);
	ctx.fillStyle = color;
	ctx.fill();
	// ctx.strokeStyle = color;
	// ctx.stroke();
	ctx.setTransform(1, 0, 0, 1, 0, 0);
};

export const randInt = num => Math.floor(Math.random() * num);

export const drawRandomPolygon = (ctx) => {
	const w = ctx.canvas.width;
	const h = ctx.canvas.height;
	clearInterval(window.timer);
	window.timer = setInterval(() => {
		ctx.clearRect(0, 0, w, h);
		const diamond = randInt(50);
		for (let i = 0; i <= diamond; i += 1) {
			const y = randInt(h);
			const x = randInt(w);
			const width = randInt(100);
			const red = randInt(255);
			const blue = randInt(255);
			const green = randInt(255);

			polygon({
				canvas: ctx,
				x,
				y,
				width,
				color: `rgba(${red}, ${blue}, ${green}, .03)`,
			});
		}
	}, 200);
};
