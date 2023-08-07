import { TeaImage } from './tea-image.interface';

export interface Tea {
	specialBanner: string;
	name: string;
	description: string;
	image: TeaImage;
	toppings: string[];
	toppingsTextColor: string;
	toppingsBackgroundColor: string;
}
