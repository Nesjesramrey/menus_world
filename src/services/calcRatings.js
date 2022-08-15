export function calcMean(data) {
	let values = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
	};
	let maxRating = 5;
	let scoreTotal = 0;
	let count = 0;
	let mean = 0;

	if (data.comments) {
		if (data.comments.length > 0) {
			for (let comment of data.comments) {
				values[comment.rating] += 1;
			}

			for (let i = 1; i <= maxRating; i++) {
				scoreTotal += i * values[i];
				count += values[i];
			}
			mean = (scoreTotal / count).toFixed(1);

			return '⭐ ' + mean + ' (' + count + ' votos)';
		} else {
			return 'Sin calificaciones';
		}
	}
}

export function calcRatings(data) {
	let obj = {
		totalVotes: 0,
		mean: 0,
		rating: '',
		stars5: 0,
		stars4: 0,
		stars3: 0,
		stars2: 0,
		stars1: 0,
	};

	let maxRating = 5;
	let totalAmount = 0;
	let count = 0;
	let mean = 0;
	let percentages = [];
	let values = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
	};

	if (data.comments) {
		if (data.comments.length > 0) {
			//extract values
			for (let comment of data.comments) {
				values[comment.rating] += 1;
			}

			//total of votes
			for (let i = 1; i <= maxRating; i++) {
				count += values[i];
			}

			//calc percentages
			for (let i = 0; i < maxRating; i++) {
				percentages[i] = ((values[i + 1] / count) * 100).toFixed(1);
			}

			//calc mean
			for (let i = 1; i <= maxRating; i++) {
				totalAmount += i * values[i];
			}
			mean = (totalAmount / count).toFixed(1);

			//add to obj
			obj.totalVotes = count;
			obj.mean = Number(mean);
			obj.rating = '⭐ ' + mean + ' (' + count + ' votos)';
			obj.stars5 = Number(percentages[4]);
			obj.stars4 = Number(percentages[3]);
			obj.stars3 = Number(percentages[2]);
			obj.stars2 = Number(percentages[1]);
			obj.stars1 = Number(percentages[0]);
		} else {
			obj.rating = 'Sin calificaciones';
		}

		return obj;
	}
}
