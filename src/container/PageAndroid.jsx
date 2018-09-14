import React, {Component} from 'react';
import Page 		from '../components/Page';
import PageTitle  from '../components/PageTitle';
import JsonEditor from '../components/JsonEditor';
import GroupButton from '../components/GroupButton'
import PageBodyGetData from '../components/PageBodyGetData'
import Button from '@material-ui/core/Button';
import {Route, Link} from 'react-router-dom';
import PageSchemaForm	from './PageSchemaForm';

var schema = {
	id      : 0,
	description: "Declarative pure data DSLs are the best.",
	type       : "object",
	properties : {
		comment: {
			title      : "Your comment",
			description: "Type something here.",
			type       : "string",
			minLength  : 1
		}
	}
};

class PageAndroid extends Component {
	constructor(props) {
		super(props)
		this.onChange = this.onChange.bind(this)
		this.state = {
			schema: schema
		}
	}

	onChange() {
		var schemaCustom = this.state.schema
		schemaCustom.id = schemaCustom.id + 1
		this.setState({schema: schemaCustom})
		console.log(this.editorGet.state.value)
	}

	render() {
		// const {classes} = this.props
		return(
			<Page>
				<PageTitle>Android</PageTitle>
				<Link to={this.props.match.url + '/about'}>
					about
				</Link>
				<Link to={"/schemaForm"}>
					PageSchemaForm
				</Link>
				<PageBodyGetData>
					<JsonEditor ref={(ref) => this.editorGet = ref} valueInit={this.state.schema} />
					<GroupButton>
						<Button color="primary" size="medium">Get Data</Button>
						<Button variant="outlined" size="large" color="primary" >Get Data</Button>
						<Button variant="contained" size="large" color="primary">Get Data</Button>
					</GroupButton>
					<JsonEditor ref={(ref) => this.editorGet = ref} />
				</PageBodyGetData>
				<Route path={`${this.props.match.url}/:about`} component={About} />
				<Route path={`${this.props.match.url}/:about2`} component={PageSchemaForm} />
			</Page>
		);
	}
}

function About(props) {
	return(
		<Page>
			<PageTitle>Android => About</PageTitle>
		</Page>
	)
}

export default PageAndroid;

