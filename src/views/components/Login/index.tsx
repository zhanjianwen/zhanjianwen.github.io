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
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <FormItem>
            {getFieldDecorator('passWord', {
              initialValue: passWord,
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </FormItem>
          <FormItem style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
        </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
};

export default Form.create()(Login)
