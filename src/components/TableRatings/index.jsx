import './TableRatings.css';

export default function TableRatings(data, key) {
	let percentages = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
	};

	let countScores = 0;
	let maxScore = 5;
	let totalAmount = 0;

	// count ratings and total amount
	for (let i = 1; i <= maxScore; i++) {
		countScores += data[i];
		totalAmount += i * data[i];
	}

	//calculate percentage of ratings
	for (let i = 1; i <= maxScore; i++) {
		percentages[i] = ((data[i] / countScores) * 100).toFixed(1);
	}

	return (
		<div className="ratingTable">
			<div className="data">
				<div className="mean center">{(totalAmount/countScores).toFixed(1)}</div>
				<div className="center">⭐⭐⭐⭐⭐</div>
				<div className="center">{countScores}</div>
			</div>

			<div className="graph">
				<div className="graphContainer">
					<div className="value center">5</div>
					<div className="base">
						<div className="valueClass" style={{ width: (percentages[5] + '%') }}></div>
					</div>
				</div>

				<div className="graphContainer">
					<div className="value center">4</div>
					<div className="base">
						<div className="valueClass" style={{ width: (percentages[4] + '%') }}></div>
					</div>
				</div>

				<div className="graphContainer">
					<div className="value center">3</div>
					<div className="base">
						<div className="valueClass" style={{ width: (percentages[3] + '%') }}></div>
					</div>
				</div>

				<div className="graphContainer">
					<div className="value center">2</div>
					<div className="base">
						<div className="valueClass" style={{ width: (percentages[2] + '%') }}></div>
					</div>
				</div>

				<div className="graphContainer">
					<div className="value center">1</div>
					<div className="base">
						<div className="valueClass" style={{ width: (percentages[1] + '%') }}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
