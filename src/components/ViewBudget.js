import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: <i class="fa fa-inr"></i> {props.budget}</span>
			<button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;
