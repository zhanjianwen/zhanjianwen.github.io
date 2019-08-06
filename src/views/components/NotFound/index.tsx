// import * as React from 'react'
// class NotFound extends React.Component {
//     render() {
//         return (
//             <div>404</div>
//         );
//     }
// }
// export default NotFound
import * as React from 'react'
import img from '../../../statics/images/404.png';

import './index.less'
class NotFound extends React.Component {
    state = {
        animated: ''
    };
    enter = () => {
        this.setState({ animated: 'hinge' })
    };
    render() {
        return (
            <div className="notFound" style={{ height: '100%', background: '#ececec', overflow: 'hidden' }}>
                <img src={img} alt="404" className={`animated swing ${this.state.animated}`} onMouseEnter={this.enter} />
            </div>
        )
    }
}
export default NotFound