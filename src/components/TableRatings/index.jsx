import './TableRatings.css';
import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';

export default function TableRatings(ratings) {
	const [tooltipOpen, setTooltipOpen] = useState(false);
	const toggle = () => setTooltipOpen(!tooltipOpen);

	function isObjEmpty(obj) {
		for (let key in ratings) return false;
		return true;
	}

	const star = (
		<Rating fillColor={'#ffd700'} initialValue={1} size={18} readonly={true} iconsCount={1} />
	);

	function createGraph() {
		let textVotes =
			'Este gráfico representa la calificación mas elegida para este platillo, un mayor porcentaje en la barra de 5⭐, significa que la mayor parte de los votos son de 5⭐';
		let textWOVotes =
			'Este gráfico representa la calificación más elegida para este platillo, sin embargo este platillo aun no cuenta con calificaciones';
		let textTooltip = '';
		if (ratings.mean === 0) {
			textTooltip = textWOVotes;
		} else {
			textTooltip = textVotes;
		}

		try {
			return (
				<div className="ratingTable">
					<div className="data">
						<div className="mean center">{ratings.mean}</div>
						<div className="center">
							<Rating
								transition
								ratingValue={ratings.mean * 20}
								fillColor={'#ffd700'}
								emptyColor={'#888888'}
								size={20}
								readonly={true}
							/>
						</div>
						<div className="center">{ratings.totalVotes + ' votos'}</div>
					</div>

					<div className="graph" id="Tooltip">
						<Tooltip placement="bottom" isOpen={tooltipOpen} target="Tooltip" toggle={toggle}>
							{textTooltip}
						</Tooltip>
						<div className="graphContainer">
							<div className="value center">
								<p className="numStars">5</p>
								<div className="alingStars">{star}</div>
							</div>
							<div className="base">
								<div className="valueClass" style={{ width: ratings.stars5 + '%' }}></div>
							</div>
						</div>

						<div className="graphContainer">
							<div className="value center">
								<p className="numStars">4</p> {star}
							</div>
							<div className="base">
								<div className="valueClass" style={{ width: ratings.stars4 + '%' }}></div>
							</div>
						</div>

						<div className="graphContainer">
							<div className="value center">
								<p className="numStars">3</p> {star}
							</div>
							<div className="base">
								<div className="valueClass" style={{ width: ratings.stars3 + '%' }}></div>
							</div>
						</div>

						<div className="graphContainer">
							<div className="value center">
								<p className="numStars">2</p> {star}
							</div>
							<div className="base">
								<div className="valueClass" style={{ width: ratings.stars2 + '%' }}></div>
							</div>
						</div>

						<div className="graphContainer">
							<div className="value center">
								<p className="numStars">1</p> {star}
							</div>
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
