export const BrushSmallIco = () => {
	return <span className="block w-1 h-1 rounded-full bg-white"></span>;
};

export const BrushNormalIco = () => {
	return <span className="block w-2.5 h-2.5 rounded-full bg-white"></span>;
};

export const BrushLargeIco = () => {
	return <span className="block w-5 h-5 rounded-full bg-white"></span>;
};

export const BlackColorIco = () => {
	return <span className="block w-5 h-5 rounded-full bg-black"></span>;
};

export const WhiteColorIco = () => {
	return (
		<span className="block w-5 h-5 rounded-full bg-white border border-gray-400"></span>
	);
};

export const GrayColorIco = () => {
	return <span className="block w-5 h-5 rounded-full bg-gray-500"></span>;
};

export const RedColorIco = () => {
	return <span className="block w-5 h-5 rounded-full bg-red-600"></span>;
};

export const YellowColorIco = () => {
	return <span className="block w-5 h-5 rounded-full bg-yellow-400"></span>;
};

export const OrangeColorIco = () => {
	return <span className="block w-5 h-5 rounded-full bg-orange-500"></span>;
};

export const GreenColorIco = () => {
	return <span className="block w-5 h-5 rounded-full bg-green-600"></span>;
};

export const BlueColorIco = () => {
	return <span className="block w-5 h-5 rounded-full bg-blue-600"></span>;
};

export const PurpleColorIco = () => {
	return <span className="block w-5 h-5 rounded-full bg-purple-600"></span>;
};

export const PinkColorIco = () => {
	return <span className="block w-5 h-5 rounded-full bg-pink-500"></span>;
};

export function Trash(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<path
				fill="currentColor"
				d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17"></path>
		</svg>
	);
}

export function Download(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<path
				fill="currentColor"
				d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4q.425 0 .713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15q.425 0 .713.288T6 16v2h12v-2q0-.425.288-.712T19 15q.425 0 .713.288T20 16v2q0 .825-.587 1.413T18 20z"></path>
		</svg>
	);
}

export function BrushTool(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}>
			<path
				fill="currentColor"
				d="M6 21q-1.125 0-2.225-.55T2 19q.65 0 1.325-.513T4 17q0-1.25.875-2.125T7 14q1.25 0 2.125.875T10 17q0 1.65-1.175 2.825T6 21m5.75-6L9 12.25l8.95-8.95q.275-.275.688-.288t.712.288l1.35 1.35q.3.3.3.7t-.3.7z"></path>
		</svg>
	);
}

export const LineTool = () => {
	return (
		<span className="block w-5 h-[2px] rounded-full border-2 border-white -rotate-45"></span>
	);
};

export const RectangleTool = () => {
	return (
		<span className="block w-5 h-4 rounded-sm border-2 border-white"></span>
	);
};
