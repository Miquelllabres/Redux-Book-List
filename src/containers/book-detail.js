import React , { Component } from 'react';
import { connect } from 'react-redux';

 class BookDetail extends  Component {
	render(){
		if (!this.props.book){
			return <div> Select a book to get started.</div>
		}
		return (
			<div>
				<h3>Details for:</h3>
				<div>{this.props.book.title}</div>
				<div>Number of pages: {this.props.book.pages}</div>
			</div>
			);
	}
}
function mapStateToProps(state){
	//whatever it returns will show up as props
	//inside book list
	return {
		book: state.activeBook
	};
}
export default connect (mapStateToProps)(BookDetail);