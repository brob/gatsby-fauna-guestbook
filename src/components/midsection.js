import React from 'react';
import Signatures from './signatures';
import SignForm from './sign-form';
import './style.scss';
import { useStaticQuery, graphql } from "gatsby"

class Midsection extends React.Component {
	constructor(props) {
		super(props);
		this.state.sigData = useStaticQuery(
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
	}
	render() {
		return (
			<section className="section">
			<div className="container container--small">
				<h2>Sign here</h2>

				<SignForm></SignForm>


				<Signatures sigData={this.state.sigData}></Signatures>

			</div>
		</section>
		)}
	};

export default Midsection;
