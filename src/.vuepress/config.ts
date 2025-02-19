import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
	base: "/HHHHHwBlog/",

	lang: "zh-CN",
	title: "HHHHHw的博客",
	description: "HHHHHw 的博客",

	theme,

	// 和 PWA 一起启用
	// shouldPrefetch: false,
});
