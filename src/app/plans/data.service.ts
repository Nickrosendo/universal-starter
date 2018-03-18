import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { Category } from '../../data/plans/categories.data';
import { Features } from '../../data/plans/features.data';
import { OceanFeatures } from '../../data/plans/ocean.data';
import { RiverFeatures } from '../../data/plans/river.data';
import { SeaFeatures } from '../../data/plans/sea.data';



@Injectable()
export class DataService {
	constructor() { }

	getCategories(): Array<object> {
		return [Category];
	}

	getFeatures(): Array<object> {
		return [Features];
	}

	getPlans(): Array<object> {
		return [RiverFeatures, SeaFeatures, OceanFeatures];
	}

}
