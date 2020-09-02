export enum eCustomEvents
{
	MOUSEOVER = 'MouseOver',
	MOUSEENTER = 'MouseEnter',
	MOUSELEAVE = 'MouseLeave'
}


export interface iCustomEvents {
	type: eCustomEvents;
	value: boolean;
}
