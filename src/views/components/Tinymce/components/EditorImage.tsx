import * as React from 'react';
import { Button } from 'antd';
interface IProps {
  successCBK: (value: any) => void
}
class EditorImage extends React.Component<IProps> {
  public state = {
    visible: false
  }
  public render() {
    return (
      <div className="editorImage">
        <Button type="primary" >上传</Button>
      </div>
    )
  }
}
export default EditorImage