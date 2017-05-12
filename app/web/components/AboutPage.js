import React, { Component } from 'react';
import Heading from '../components/Heading';
import Card from '../common/Card';

export default class extends Component {
	render() {
		return (
			<div className="page">
				<div className="">
					<Heading title="Об университете" />
					<div className="card-holder">
					<Card light title="Контакты" />
					<Card light title="Адреса" />
					</div>
					<Heading small title="Об университете" />
					<div className="card-holder card-holder-stacked">
						<Card light title="Контакты" to="/contacts" />
						<Card light title="Адреса" description="И явки" />
						<Card light title="Адреса" />
						<Card light title="Адреса" />
					</div>
					<div className="content">
						<div className="content">
							<h3>Label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa
							qui officia deserunt mollit anim id est laborum.
							</p>
							<ol>
								<li>One</li>
								<li>ore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.</li>
								<li>Three</li>
							</ol>
						</div>
						<div className="content">
							<h3>Label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa
							qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
						<div className="content">
							<Heading label="Section" />
							<h3>Label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa
							qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
