export interface Movie {
	title: string;
	year: number;
	director: string;
	duration: string | number;
	genre: string[];
	score?: number;
}
