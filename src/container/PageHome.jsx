import React, {Component} from 'react';
import Page 		from '../components/Page';
import PageTitle  from '../components/PageTitle';
import JsonEditor from '../components/JsonEditor';
import GroupButton from '../components/GroupButton'
import PageBodyGetData from '../components/PageBodyGetData'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux'
import { compose } from 'redux'


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});


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

class PageHome extends Component {
	constructor(props) {
		super(props)
		this.onChange = this.onChange.bind(this)
		this.onClick = this.onClick.bind(this)
		this.state = {
			schema: schema
		}
	}

	onClick() {
		this.props.testButton()
	}

	onChange() {
		var schemaCustom = this.state.schema
		schemaCustom.id = schemaCustom.id + 1
		this.setState({schema: schemaCustom})
		console.log(this.editorGet.state.value)
	}

	render() {
		console.log(this.props)
		const {classes} = this.props
		return(
			<Page>
				<PageTitle>{this.props.hello}</PageTitle>
				<PageBodyGetData>
					<JsonEditor ref={(ref) => this.editorGet = ref} valueInit={this.state.schema} />
					<GroupButton>
						<Button style={{'color': 'red'}} color="primary" size="medium">Get Data</Button>
						<Button variant="outlined" onClick={this.onClick} size="large" color="primary" >Test Socket.io</Button>
						<Button variant="contained" size="large" color="primary">Get Data</Button>
						<Button variant="contained" color="secondary">
							Delete<DeleteIcon className={classes.rightIcon}>Delete</DeleteIcon>
						</Button>
					</GroupButton>
					<JsonEditor ref={(ref) => this.editorGet = ref} />
				</PageBodyGetData>
			</Page>
		);
	}
}

const mapStateToProps = state => ({
  hello: state.hello
})

const mapDispatchToProps = dispatch => {
  return({
		testButton: () => dispatch({type: "HELLO_SAGA_ASYNC", data: "send to components"})
	})
}

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps)
	)(PageHome)

// export default withStyles(styles)(PageHome);

