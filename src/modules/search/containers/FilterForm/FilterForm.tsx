import React, {Component} from 'react';
import {Formik, Form} from 'formik';
import { Checkbox} from "../../components/Checkbox/Checkbox";
import Autocomplete from "../Autocomplete/Autocomplete";
import { Push, push } from 'connected-react-router';
import {connect} from "react-redux";
import {IApplicationState} from "../../../../store/rootReducer";
import {stringify} from "querystring";
import { autocompleteClearSearchValue } from '../../store/autocomplete/actions';

interface PropsFromDispatch {
  push: Push,
  autocompleteClearSearchValue: () => void
}

interface PropsFromState {
  searchValue: string
}

interface IProps extends PropsFromDispatch, PropsFromState {
  handleChange: any,
  location: Record<any, any>
}

export class FilterForm extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
  
  submitHandler = (values: any) => {
    let query = this.props.searchValue;

    if (!query) {
      return;
    }

   const filters = stringify(values);
    
    if (filters) {
      query += `&${filters}`;
    }
    
    this.props.push({
      pathname: 'search/recipes',
      search: `q=${query}`
    });
  };
  
  componentWillUnmount() {
    this.props.autocompleteClearSearchValue();
  }

    render() {
        return (
          <div className="search-box">
            <Formik
              initialValues={{ health: []}}
              onSubmit={(values, actions) => {
                actions.setSubmitting(true);
                this.submitHandler(values);
              }}
              render = {() => (
                <Form className="standart-modal__form">
                  <div className="standart-modal__form-body">
                    <div>
                      <Autocomplete />
                      <Checkbox name="health" value="peanut-free" label="Peanuts" />
                      <Checkbox name="health" value="fish-free" label="Fish" />
                    </div>
                    <button type="submit">submit</button>
                  </div>
                </Form>
              )}
            />
          </div>
        )
    }
}

const mapStateToProps = ({search}: IApplicationState) => ({
  searchValue: search.autocomplete.searchValue,
});

const mapDispatchToProps: PropsFromDispatch = {
  push,
  autocompleteClearSearchValue
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);