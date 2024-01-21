"use client";

import React, {useRef, useState} from "react";

// Importowanie komponentów
import Button from "./components/Button";
import {Toolbox} from "./components/Toolbox";

// Importowanie ikon
import {
	BlackColorIco,
	BrushLargeIco,
	BrushNormalIco,
	BrushSmallIco,
	GrayColorIco,
	RedColorIco,
	WhiteColorIco,
	YellowColorIco,
	OrangeColorIco,
	GreenColorIco,
	BlueColorIco,
	PurpleColorIco,
	PinkColorIco,
	Trash,
	Download,
	BrushTool,
	LineTool,
	RectangleTool,
} from "./components/Icons";

export default function DrawingBoard() {
	const canvasRef = useRef(null);
	const [color, setColor] = useState("#000000"); // Domyślny kolor: Czarny
	const [size, setSize] = useState(3); // Domyślny rozmiar: 3
	const [tool, setTool] = useState("brush"); // Domyślne narzędzie: Pędzel
	const [startPoint, setStartPoint] = useState(null); // Punkt początkowy linii

	// Event handler dla naciśniecia przycisku myszy
	const handleMouseDown = (event) => {
		event.preventDefault();
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		if (tool !== "brush") {
			setStartPoint({x: event.clientX, y: event.clientY});
		} else {
			ctx.beginPath();
			ctx.moveTo(event.clientX, event.clientY);
			canvas.addEventListener("mousemove", handleMouseMove);
		}
		canvas.addEventListener("mouseup", handleMouseUp);
	};

	// Event handler dla poruszania myszą
	const handleMouseMove = (event) => {
		if (tool === "brush") {
			event.preventDefault();
			const canvas = canvasRef.current;
			const ctx = canvas.getContext("2d");
			ctx.lineTo(event.clientX, event.clientY);
			ctx.strokeStyle = color; // kolor
			ctx.lineWidth = size; // rozmiar
			ctx.stroke();
		}
	};

	// Event handler dla puszczenia przycisku myszy
	const handleMouseUp = (event) => {
		event.preventDefault();
		const canvas = canvasRef.current;
		if (tool !== "brush" && startPoint) {
			const endPoint = {x: event.clientX, y: event.clientY};
			if (tool === "line") {
				drawLine(canvas, startPoint, endPoint);
			} else {
				drawRectangle(canvas, startPoint, endPoint);
			}
			setStartPoint(null);
		} else {
			canvas.removeEventListener("mousemove", handleMouseMove);
		}
		canvas.removeEventListener("mouseup", handleMouseUp);
	};

	// Algorytm Bresenham'a do rysowania linii
	const drawLine = async (canvas, startPoint, endPoint) => {
		const ctx = canvas.getContext("2d");

		// Obliczam różnicę wartości x i y między punktem końcowym a początkowym
		const dx = Math.abs(endPoint.x - startPoint.x);
		const dy = Math.abs(endPoint.y - startPoint.y);

		// Określam kierunek ruchu wzdłuż osi x i y
		const sx = startPoint.x < endPoint.x ? 1 : -1;
		const sy = startPoint.y < endPoint.y ? 1 : -1;

		// Ustawiam błąd jako różnicę wartości x i y
		let err = dx - dy;

		// Główna pętla
		while (true) {
			ctx.fillStyle = color;
			ctx.fillRect(startPoint.x, startPoint.y, size, size);
			// await new Promise((resolve) => setTimeout(resolve, 1));

			// Sprawdzam, czy dotarłem do punktu końcowego
			if (startPoint.x == endPoint.x && startPoint.y == endPoint.y) break;
			// Obliczamy nowy błąd
			let e2 = 2 * err;
			// Jeśli błąd jest większy od negatywnej wartości y, zwiększam błąd o wartość y i przesuwam punkt startowy wzdłuż osi x
			if (e2 > -dy) {
				err -= dy;
				startPoint.x += sx;
			}
			// Jeśli błąd jest mniejszy od wartości x, zwiększam błąd o wartość x i przesuwam punkt startowy wzdłuż osi y
			if (e2 < dx) {
				err += dx;
				startPoint.y += sy;
			}
		}
	};

	//  Rysowanie prostokąta z wykorzystaniem 4 linii
	const drawRectangle = (canvas, startPoint, endPoint) => {
		// Obliczamy współrzędne lewego dolnego rogu prostokąta
		let x1 = Math.min(startPoint.x, endPoint.x);
		let y1 = Math.min(startPoint.y, endPoint.y);

		// Obliczamy współrzędne prawego górnego rogu prostokąta
		let x2 = Math.max(startPoint.x, endPoint.x);
		let y2 = Math.max(startPoint.y, endPoint.y);

		// Rysujemy każdą ścianę prostokąta oddzielnie
		drawLine(canvas, {x: x1, y: y1}, {x: x2, y: y1}); // Dolna ściana
		drawLine(canvas, {x: x2, y: y1}, {x: x2, y: y2}); // Prawa ściana
		drawLine(canvas, {x: x2, y: y2}, {x: x1, y: y2}); // Górna ściana
		drawLine(canvas, {x: x1, y: y2}, {x: x1, y: y1}); // Lewa ściana
	};

	// Czyszczenie canvasa
	const clear = () => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};

	// Pobieranie rysunku
	const download = () => {
		const canvas = canvasRef.current;
		const tempCanvas = document.createElement("canvas");
		const tempCtx = tempCanvas.getContext("2d");

		tempCanvas.width = canvas.width;
		tempCanvas.height = canvas.height;

		// Ustawiam białe tło
		tempCtx.fillStyle = "#FFFFFF";
		tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

		// Kopiuję zawartość pierwotnego canvas na tempCanvas
		tempCtx.drawImage(canvas, 0, 0);

		const dataUrl = tempCanvas.toDataURL("image/jpeg");
		const link = document.createElement("a");
		link.download = "rysunek.jpg";
		link.href = dataUrl;
		link.click();
	};

	return (
		<>
			<div className="absolute top-0 left-0 z-10 flex gap-4 m-5">
				{/* Rozmiar */}
				<Toolbox>
					<Button
						variant="filled"
						onClick={() => setSize(1)}
						active={size === 1}>
						<BrushSmallIco />
					</Button>
					<Button
						variant="filled"
						onClick={() => setSize(3)}
						active={size === 3}>
						<BrushNormalIco />
					</Button>
					<Button
						variant="filled"
						onClick={() => setSize(5)}
						active={size === 5}>
						<BrushLargeIco />
					</Button>
				</Toolbox>
				{/* Kolory */}
				<Toolbox>
					<Button
						variant="outlined"
						onClick={() => setColor("#000000")}
						active={color === "#000000"}>
						<BlackColorIco />
					</Button>
					<Button
						variant="outlined"
						onClick={() => setColor("#ffffff")}
						active={color === "#ffffff"}>
						<WhiteColorIco />
					</Button>
					<Button
						variant="outlined"
						onClick={() => setColor("#6B7280")}
						active={color === "#6B7280"}>
						<GrayColorIco />
					</Button>
					<Button
						variant="outlined"
						onClick={() => setColor("#DC2626")}
						active={color === "#DC2626"}>
						<RedColorIco />
					</Button>
					<Button
						variant="outlined"
						onClick={() => setColor("#FACC15")}
						active={color === "#FACC15"}>
						<YellowColorIco />
					</Button>
					<Button
						variant="outlined"
						onClick={() => setColor("#F97316")}
						active={color === "#F97316"}>
						<OrangeColorIco />
					</Button>
					<Button
						variant="outlined"
						onClick={() => setColor("#16A34A")}
						active={color === "#16A34A"}>
						<GreenColorIco />
					</Button>
					<Button
						variant="outlined"
						onClick={() => setColor("#2563EB")}
						active={color === "#2563EB"}>
						<BlueColorIco />
					</Button>
					<Button
						variant="outlined"
						onClick={() => setColor("#9333EA")}
						active={color === "#9333EA"}>
						<PurpleColorIco />
					</Button>
					<Button
						variant="outlined"
						onClick={() => setColor("#EC4899")}
						active={color === "#EC4899"}>
						<PinkColorIco />
					</Button>
				</Toolbox>
				{/* Narzędzia */}
				<Toolbox>
					<Button
						variant="filled"
						onClick={() => setTool("brush")}
						active={tool === "brush"}>
						<BrushTool />
					</Button>
					<Button
						variant="filled"
						onClick={() => setTool("line")}
						active={tool === "line"}>
						<LineTool />
					</Button>
					<Button
						variant="filled"
						onClick={() => setTool("rectangle")}
						active={tool === "rectangle"}>
						<RectangleTool />
					</Button>
				</Toolbox>
			</div>

			<div className="absolute top-0 right-0 z-10 flex gap-4 m-5">
				{/* Przyciski akcji */}
				<Toolbox>
					<Button variant="filled" onClick={clear}>
						<Trash />
					</Button>
					<Button variant="filled" onClick={download}>
						<Download />
					</Button>
				</Toolbox>
			</div>

			<canvas
				ref={canvasRef}
				width={window.innerWidth}
				height={window.innerHeight}
				onMouseDown={handleMouseDown}
			/>
		</>
	);
}
