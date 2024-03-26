import EasterSunday from './EasterSunday.js';

const PalmSunday = (year) => {
	const date = new Date(EasterSunday(year));
	date.setDate(date.getDate() - 7);
	const PalmSundayDate = date.toLocaleDateString();
	return PalmSundayDate;
};

export default PalmSunday;

