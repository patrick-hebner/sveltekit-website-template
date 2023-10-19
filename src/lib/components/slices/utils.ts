import type { Slice, SliceData } from './types';

export function sliceData(slice: Slice) {
	return slice.data as SliceData;
}
