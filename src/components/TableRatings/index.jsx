import './TableRatings.css';

export default function TableRatings() {
	return (
		<div className="ratingTable">
			<div className="data">
				<div className="mean center">4.3</div>
				<div className="center">⭐⭐⭐⭐⭐</div>
				<div className="center">117</div>
			</div>

			<div className="graph">
				<div className="graphContainer">
					<div className="value center">5</div>
					<div className="base">
						<div className="valueClass" style={{ width: '70%' }}></div>
					</div>
				</div>

				<div className="graphContainer">
					<div className="value center">4</div>
					<div className="base">
						<div className="valueClass" style={{ width: '25%' }}></div>
					</div>
				</div>

				<div className="graphContainer">
					<div className="value center">3</div>
					<div className="base">
						<div className="valueClass" style={{ width: '5%' }}></div>
					</div>
				</div>

				<div className="graphContainer">
					<div className="value center">2</div>
					<div className="base">
						<div className="valueClass" style={{ width: '0%' }}></div>
					</div>
				</div>

				<div className="graphContainer">
					<div className="value center">1</div>
					<div className="base">
						<div className="valueClass" style={{ width: '0%' }}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
