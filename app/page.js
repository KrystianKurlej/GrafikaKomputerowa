"use client";

import React, {useRef, useState} from "react";
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
	Brush,
	Rectangle,
	Circle,
} from "./components/Icons";
import Button from "./components/Button";
import {Toolbox} from "./components/Toolbox";

export default function DrawingBoard() {
	const canvasRef = useRef(null);
	const [color, setColor] = useState("#000000"); // domyślny kolor czarny
	const [brushWidth, setBrushWidth] = useState(3); // domyślny rozmiar 3
	const [tool, setTool] = useState("brush");

	// Gdy kliknę, to zaczynam rysować
	const handleMouseDown = (event) => {
		event.preventDefault();
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(event.clientX, event.clientY);
		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mouseup", handleMouseUp);
	};

	// Gdy przeciągnę mysz, to rysuję ścieżkę
	const handleMouseMove = (event) => {
		event.preventDefault();
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		ctx.lineTo(event.clientX, event.clientY);
		ctx.strokeStyle = color; // kolor
		ctx.lineWidth = brushWidth; // rozmiar
		ctx.stroke();
	};

	// Gdy puszczę mysz, to usuwam eventy
	const handleMouseUp = (event) => {
		event.preventDefault();
		const canvas = canvasRef.current;
		canvas.removeEventListener("mousemove", handleMouseMove);
		canvas.removeEventListener("mouseup", handleMouseUp);
	};

	// Czyszczenie
	const clear = () => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};

	return (
		<>
			<div className="absolute top-0 left-0 z-10 flex gap-4 m-5">
				{/* wielkość */}
				<Toolbox>
					<Button
						variant="filled"
						onClick={() => setBrushWidth(1)}
						active={brushWidth === 1}>
						<BrushSmallIco />
					</Button>
					<Button
						variant="filled"
						onClick={() => setBrushWidth(3)}
						active={brushWidth === 3}>
						<BrushNormalIco />
					</Button>
					<Button
						variant="filled"
						onClick={() => setBrushWidth(5)}
						active={brushWidth === 5}>
						<BrushLargeIco />
					</Button>
				</Toolbox>
				{/* kolory */}
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
				<Toolbox>
					<Button
						variant="filled"
						onClick={() => setTool("brush")}
						active={tool === "brush"}>
						<Brush />
					</Button>
					<Button
						variant="filled"
						onClick={() => setTool("rectangle")}
						active={tool === "rectangle"}>
						<Rectangle />
					</Button>
					<Button
						variant="filled"
						onClick={() => setTool("circle")}
						active={tool === "circle"}>
						<Circle />
					</Button>
				</Toolbox>
			</div>

			<div className="absolute top-0 right-0 z-10 flex gap-4 m-5">
				<Toolbox>
					<Button variant="filled" onClick={clear}>
						<Trash />
					</Button>
					<Button variant="filled" onClick={clear}>
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
