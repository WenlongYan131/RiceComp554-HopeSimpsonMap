import React from 'react';

const SEIR_IMAGE_PATH = '/assets/seir-model.png';
const NETWORK_IMAGE_PATH = '/assets/network-counties.png';

function VirusSpreadingModel() {
  return (
    <div>
	<h3>Compartmental Network Models</h3>
	<h4>The Basics</h4>
	<p>
	    Compartmental models are commonly used for infectious diseases.
	    The fundamentals of compartmental modeling of infectious diseases are nearly a hundred years old – Kermack and McKendrick proposes a simple compartmental model with differential equations that assign individuals to be susceptible, infected or recovered (SIR) compartments.
	    Several infectious diseases, including COVID-19, manifest an incubation period during which an individual is infected but is not yet a spreader.
	    To this end, an Exposed (E) compartment can be added, which results in an SEIR model.
	</p>
	<img src={ SEIR_IMAGE_PATH } alt="" className="img-SEIR-model"/>

	<h4>Time-varying modeling of variables:</h4>
	<p>
	    Ideally, instead of using static rate variables across time to model compartment transitions as in standard compartmental models, there should be time-varying functions that map them from known observations.
	    For example, if human mobility decreases over time, the S to E transition should reflect that.
	</p>

	<h4>Features from the location network graph:</h4>
	<p>
	    One way to incorporate inter-county effects is to represent the counties as nodes in a network graph with edges representing land borders.
	    A simple model of the inter-county effects is one or more aggregation functions applied to the immediate neighborhood of each county, and the results incorporated as new features for that county.
	</p>
	<img src={ NETWORK_IMAGE_PATH } alt="" className="img-network-counties"/>

	<p>
	    Source:
	    <a href="http://storage.googleapis.com/covid-external/COVID-19ForecastWhitePaper.pdf">
		Arik, Sercan, et al. "Interpretable Sequence Learning for COVID-19 Forecasting." <em>Advances in Neural Information Processing Systems 33</em> (2020).
	    </a>
	</p>
    </div>
  );
}

export default VirusSpreadingModel;
