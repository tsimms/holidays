const EasterSunday = (year) => {
	let EasterSundayDate = false;
	const iYear = year > 0 ? year : parseInt(year);
	if (iYear) {
		if (iYear >= 1583 && iYear <= 8702) {
			const iGold = (iYear % 19) + 1;
			const iCent = Math.floor(iYear / 100) + 1;
			const iCorx = Math.floor((3 * iCent) / 4) - 12;
			const iCorz = Math.floor((8 * iCent + 5) / 25) - 5;
			const iSunday = Math.floor((5 * iYear) / 4) - iCorx - 10;
			let iEpact = (11 * iGold + 20 + iCorz - iCorx) % 30;
			if (iEpact < 0) iEpact += 30;
			if ((iEpact === 25 && iGold > 11) || iEpact === 24) iEpact++;
			let iMoon = 44 - iEpact;
			if (iMoon < 21) iMoon += 30;
			iMoon += 7 - ((iSunday + iMoon) % 7);
			const iMonth = iMoon > 31 ? 4 : 3;
			const iDay = iMoon > 31 ? iMoon - 31 : iMoon;
			EasterSundayDate = new Date(
				`${iMonth}/${iDay}/${iYear}`
			).toLocaleDateString();
		}
	}
	return EasterSundayDate;
};

export default EasterSunday;
