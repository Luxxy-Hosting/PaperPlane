import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Landing: NextPage = () => {
	return (
		<main style={{ paddingTop: 0 }}>
			<Head>
				<title>Landing</title>
			</Head>
			<div className="error-container">
				<div className="error-items">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<h1>Welcome to Share</h1>
					<div className="error-buttons">
						<br></br>
						<Link href="/login">
							<a>
								<i className="fas fa-home" /> login
							</a>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Landing;
