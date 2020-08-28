import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Typography, Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { tasks } from './data';

interface Props {
  props?: any;
  state: any;
  name: string;
  label: string;
}

const makeField = (Component) => (props: Props) => {
  const { name, rules, label } = props;
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <Component />
    </Form.Item>
  );
};

class Check extends React.Component<Props, {}> {
  constructor(props) {
    super(props);

    this.state = {
      task: {},
    };
  }

  componentDidMount() {
    this.setState({
      task: tasks[0],
    });
  }

  render() {
    const { handleSubmit } = this.props;
    const { task } = this.state;
    const items = task.items || [];
    const basics = [],
      extras = [],
      fines = [];

    const { Title } = Typography;
    const { TextArea } = Input;

    const AInput = makeField(Input);
    const ATextarea = makeField(TextArea);

    items.forEach((listItem) => {
      switch (listItem.category) {
        case 'Basic Scope':
          basics.push(listItem);
          break;
        case 'Extra Scope':
          extras.push(listItem);
          break;
        case 'Fines':
          fines.push(listItem);
          break;
        default:
      }
    });

    return (
      <>
        <Form onSubmit={handleSubmit(handleSubmit)}>
          <div>
            <div>
              <Title level={2}>Basic Scopes</Title>
              <div>
                {basics.map((basic) => {
                  return (
                    <div key={basic.id}>
                      <Title level={3}>{basic.title}</Title>
                      <div>{basic.description}</div>
                      <Field name="rate" label="Your Rate" component={AInput} />

                      <Field name="comment" label="Your Comment" component={ATextarea} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <Title level={2}>Extra Scopes</Title>
              <div>
                {extras.map((extra) => {
                  return (
                    <div key={extra.id}>
                      <Title level={3}>{extra.title}</Title>
                      <div>{extra.description}</div>
                      <Field name="rate" label="Your Rate" component={AInput} />

                      <Field name="comment" label="Your Comment" component={ATextarea} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <Title level={2}>Fines</Title>
              <div>
                {fines.map((fine) => {
                  return (
                    <div key={fine.id}>
                      <Title level={3}>{fine.title}</Title>
                      <div>{fine.description}</div>
                      <Field name="rate" label="Your Rate" component={AInput} />

                      <Field name="comment" label="Your Comment" component={ATextarea} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

Check = reduxForm({
  form: 'check',
})(Check);

export default Check;
