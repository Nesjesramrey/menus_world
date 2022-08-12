import './TableRatings.css';

export default function TableRatings(ratings) {
	function isObjEmpty(obj) {
		for (let key in ratings) return false;
		return true;
	}

	function createGraph() {
		try {
			return (
				<div className="ratingTable">
					<div className="data">
						<div className="mean center">{ratings.mean}</div>
						<div className="center">⭐⭐⭐⭐⭐</div>
						<div className="center">{ratings.totalVotes + ' votos'}</div>
					</div>

					<div className="graph">
						<div className="graphContainer">
							<div className="value center">5⭐</div>
							<div className="base">
								<div className="valueClass" style={{ width: ratings.stars5 + '%' }}></div>
							</div>
						</div>

						<div className="graphContainer">
							<div className="value center">4⭐</div>
							<div className="base">
								<div className="valueClass" style={{ width: ratings.stars4 + '%' }}></div>
							</div>
						</div>

						<div className="graphContainer">
							<div className="value center">3⭐</div>
							<div className="base">
								<div className="valueClass" style={{ width: ratings.stars3 + '%' }}></div>
							</div>
						</div>

						<div className="graphContainer">
							<div className="value center">2⭐</div>
							<div className="base">
								<div className="valueClass" style={{ width: ratings.stars2 + '%' }}></div>
							</div>
						</div>

						<div className="graphContainer">
							<div className="value center">1⭐</div>
							<div className="base">
								<div className="valueClass" style={{ width: ratings.stars1 + '%' }}></div>
							</div>
						</div>
					</div>
				</div>
			);
		} catch (err) {
			console.error(err);
		}
	}

	const emptuObj = isObjEmpty(ratings);
	let element = '';

	if (!emptuObj) {
		element = createGraph();
	} else {
		element = <p></p>;
	}

	return <div>{element}</div>;
}
