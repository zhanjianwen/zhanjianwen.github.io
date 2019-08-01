import * as React from 'react';
import { Button, Modal, Upload, Icon } from 'antd';
import './EditorImage.less'
interface IProps {
  successCBK: (value: any) => void
}


function getBase64(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
class EditorImage extends React.Component<IProps> {
  public state = {
    visible: false,
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        size: 1,
        uid: '-1',
        name: 'image.png',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        type: 'UploadFile'
      }
    ]
  }


  handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };
  handleCancel = () => {
    this.setState({ visible: false })
  };

  handleChange = (info: any) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-2);
    fileList = fileList.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });

    this.setState({ fileList });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancelUpload = () => {
    this.setState({
      visible: false,
    });
  };
  Upload = () => {
    this.setState({ visible: true })
  }
  render() {
    const props = {
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange: this.handleChange,
      multiple: true,
    };
    const { visible, previewVisible, fileList, previewImage } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="editorImage">
        <Button type="primary" onClick={this.Upload}>上传</Button>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            <Upload {...props}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancelUpload}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>

          </div>
        </Modal>
      </div>
    )
  }
}
export default EditorImage