import { navbar } from "vuepress-theme-hope";

export default navbar([
	"/",
	{
		text: "杂谈",
		icon: "pen-to-square",
		link: "/posts/",
	},
	{
		text: "Vue系列",
		icon: "vue",
		link: "/Vue/",
	},
	{
		text: "React系列",
		icon: "react",
		link: "/React/",
	},
	{
		text: "JS系列",
		icon: "tool",
		link: "/JS/",
	},
	{
		text: "时间轴",
		icon: "time",
		link: "/timeline/",
	},
	{
		text: "V2 文档",
		icon: "book",
		link: "https://theme-hope.vuejs.press/zh/",
	},
]);
