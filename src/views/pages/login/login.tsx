import * as React from 'react';
import  LoginForm from '../../components/Login/index'

interface IProps{
  from?: any
}

class App extends React.Component<IProps>{
  public constructor(props:any){
    super(props)
  }
  // componentWillMount() {
  //   window.$api.system.postLogin({userName:'admin',passWord:'admin'}).then((json:any)=>{
  //     console.log(json)
  //   })
  //   console.log(window.$api)
  // }
  
  public render() {
    return (
      <div >
      <LoginForm  />
      </div>
    );
  }
}

export default App;
