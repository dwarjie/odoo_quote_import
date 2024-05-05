import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		onConsoleLog(log, type) {
			console.log("log in test: ", log);
			if (log === "message from third party library" && type === "stdout") {
				return false;
			}
		},
	},
});
