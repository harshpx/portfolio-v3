export const sections = ["home", "about", "projects"];

export const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const scrollToDiv = (id: string) => {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "nearest",
		inline: "center",
	});
};
