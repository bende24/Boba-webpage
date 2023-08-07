import { ToppingBadgeCollection } from '../toppping/badge/topping-badge-collection.interface';
import { TeaBanner } from './tea-banner.interface';
import { TeaImage } from './tea-image.interface';

export interface Tea {
	specialBanner?: TeaBanner;
	name: string;
	description: string;
	image: TeaImage;
	toppings: ToppingBadgeCollection;
}
