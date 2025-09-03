import type { Action } from "svelte/action";

export const useConditionalAction = (
	node: HTMLElement,
	params: { action?: Action; enabled?: boolean },
) => {
	if (params.enabled && params.action) {
		const res = params.action(node);
		return res;
	}
};
