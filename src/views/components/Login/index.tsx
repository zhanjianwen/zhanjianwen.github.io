import * as React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import './index.less';
const FormItem = Form.Item

interface IProps extends FormComponentProps {
  /**用户名 */
  userName: string,
  /**密码 */
  passWord: string,
  token?: string,
  loading: boolean,
  login: (payload: object) => void,
  history: IPush
}
interface IPush {
  push: (pathname: string) => void
}

class Login extends React.Component<IProps, any> {
  public static getDerivedStateFromProps(props: IProps) {
    const { history, token } = props;
    if (token) {
      history.push('/')
    }
    return null
  }
  public state = {}
  public handleSubmit = (e: any) => {
    e.preventDefault()
    const { form, login } = this.props
    form.validateFields((err, values: object) => {
      if (!err) {
        login(values)
      }
    })
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    const { userName, passWord } = this.props;
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              initialValue: userName,
              rules: [{ required: true, message: 'Please input your userName!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <FormItem>
            {getFieldDecorator('passWord', {
              initialValue: passWord,
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </FormItem>
          <FormItem style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
        </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
};

export default Form.create()(Login)
