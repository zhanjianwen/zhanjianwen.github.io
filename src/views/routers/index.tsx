import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import routesConfig from './config'
import DocumentTitle from 'react-document-title';
import AllComponents from './components'
export default class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        {
          routesConfig.map((r: any) => {
            const route = (r: any) => {
              const Component = AllComponents[r.component];
              return (
                <Route
                  key={r.route || r.path}
                  exact
                  path={r.route || r.path}
                  render={props => {
                    const reg = /\?\S*/g;
                    // 匹配?及其以后字符串
                    const queryParams = window.location.hash.match(reg);
                    // 去除?的参数
                    const { params } = props.match;
                    Object.keys(params).forEach(key => {
                      params[key] = params[key] && params[key].replace(reg, '');
                    });
                    props.match.params = { ...params };
                    const merge = { ...props, query: queryParams ? JSON.parse(queryParams[0]) : {} };
                    // 重新包装组件
                    const wrappedComponent = (
                      <DocumentTitle title={r.title}>
                        <Component {...merge} />
                      </DocumentTitle>
                    )
                    return wrappedComponent
                  }}
                />
              )
            }
            return !r.childrens ? route(r) : r.childrens.map((r: any) => route(r));
          })
        }
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    )
  }
}