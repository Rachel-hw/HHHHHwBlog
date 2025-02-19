import { sidebar } from "vuepress-theme-hope";

export default sidebar({
	"/": [
		"",
		"intro",
		{
			text: "Vue系列",
			icon: "vue",
			prefix: "Vue/",
			children: "structure",
		},
		{
			text: "React系列",
			icon: "react",
			prefix: "React/",
			children: "structure",
		},
		{
			text: "JS系列",
			icon: "tool",
			prefix: "JS/",
			children: "structure",
		},
	],
});
