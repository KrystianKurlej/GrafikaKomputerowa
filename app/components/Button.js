import React from "react";

const Button = ({children, onClick, active, variant}) => {
	return (
		<button
			onClick={onClick}
			className={`${
				variant === "filled"
					? active
						? "bg-indigo-700"
						: "bg-gray-400 hover:bg-indigo-400 active:bg-indigo-700"
					: variant === "outlined"
					? active
						? "border-2 border-indigo-700"
						: "border-2 border-white hover:border-indigo-400"
					: ""
			}
			w-8 h-8 rounded-full flex items-center justify-center duration-300 text-white
			`}>
			{children}
		</button>
	);
};

export default Button;
