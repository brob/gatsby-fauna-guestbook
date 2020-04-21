import React, {useState} from 'react';
import Signatures from './signatures';
import SignForm from './sign-form';

import { useStaticQuery, graphql } from "gatsby"


const Midsection = () => {
	const data = useStaticQuery(
			graphql`
			query GetSignatures {
				allSignatures {
				  nodes {
					name
					message
					_ts
					_id
				  }
				}
			}`
		);
		const [sigData, setSigData] = useState(data.allSignatures.nodes);


		return (
			<section className="section">
			<div className="container container--small">
				<h2>Sign here</h2>

				<SignForm setSigData={setSigData}></SignForm>


				<Signatures sigData={sigData}></Signatures>

			</div>
		</section>
	)
}

export default Midsection;
