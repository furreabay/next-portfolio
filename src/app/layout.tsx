import "../styles/globals.css";
import { Outfit, Lato } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import Navbar from "src/components/Navbar";
import Chatbot from "src/components/chatGptBot/Chatbot";

const outfitFont = Outfit({
	variable: "--display-font",
	display: "swap",
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
});

const latoFont = Lato({
	variable: "--body-font",
	display: "swap",
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
	title: "Furkan - Portfolio",
	description: "Welcome to Furkan's Next.js portfolio",
};

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${outfitFont.variable} ${latoFont.variable}`}>
			<body className={"flex flex-col"}>
				<main className="app w-[80%] mx-auto">
					<Navbar />
					{typeof window === "undefined" ? (
						<>{children}</>
					) : (
						<AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
					)}
					<Chatbot />
				</main>
			</body>
		</html>
	);
}
