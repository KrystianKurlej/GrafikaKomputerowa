import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
	title: "Grafika komputerowa",
	description: "Generated by create next app",
};

export default function RootLayout({children}) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				{children}
				<footer className="bg-white absolute bottom-0 right-0 m-5 text-sm font-thin text-gray-500 z-20">
					©2024 Krystian Kurlej
				</footer>
			</body>
		</html>
	);
}
