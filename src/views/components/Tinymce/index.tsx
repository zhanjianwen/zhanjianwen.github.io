// import { Editor } from '@tinymce/tinymce-react';
// import * as React from 'react'
// import './index.less'
// class Tinymce extends React.Component {
//   handleEditorChange(e: any) {
//     console.log(e.target.getContent());
//   }
//   public state = {
//     content: '<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul><li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li></ul>'
//   }
//   render() {
//     const { content } = this.state
//     return (
//       <div className="tinymce">
//         <aside>
//           <span>富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见</span>
//           <a target="_blank" className="link-type" href="https://panjiachen.github.io/vue-element-admin-site/component/rich-editor.html">文档</a>
//         </aside>
//         <div>
//           <Editor
//             initialValue={content}
//             init={{
//               // language:'en',
//               // plugins: 'link image code',
//               // toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
//               // height:300
//               language: 'zh_CN',
//               height: 600,
//               body_class: 'panel-body',
//               object_resizing: false,
//               toolbar: ['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen'],
//               menubar: 'file edit insert view format table',
//               plugins: ['advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount'],
//               end_container_on_empty_block: true,
//               powerpaste_word_import: 'clean',
//               code_dialog_height: 450,
//               code_dialog_width: 1000,
//               advlist_bullet_styles: 'square',
//               advlist_number_styles: 'default',
//               imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
//               default_link_target: '_blank',
//               link_title: false,
//               nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
//               init_instance_callback: (editor: any) => {
//                 // if (this.value) {
//                 //   editor.setContent(_this.value)
//                 // }
//                 // _this.hasInit = true
//                 // editor.on('NodeChange Change KeyUp SetContent', () => {
//                 //   this.hasChange = true
//                 //   this.$emit('input', editor.getContent())
//                 // })
//               },
//               setup(editor: any) {
//                 editor.on('FullscreenStateChanged', (e: any) => {
//                   // _this.fullscreen = e.state
//                 })
//               }
//             }}
//             onChange={this.handleEditorChange}
//           />
//         </div>
//       </div>

//     )
//   }
// }
// export default Tinymce



import * as React from 'react';
import { Button } from 'antd';
// import Page from '../../components/Pages/page';
import './index.less';
import defaultplugins from './plugins';
import defaultToolbar from './toolbar';
import load from './dynamicLoadScript'
import {
  fontsizeFormats,
  fontFormats
} from './font';
import EditorImage from './components/EditorImage';

interface IProps {
  tinymceId: string,
  content: string,
  toolbar: any,
  menubar: string,
  height: number,
  getContent: (value: any) => void,

};
const tinymceCDN = 'https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js'
class Tinymce extends React.Component<IProps> {
  static defaultProps = {
    tinymceId: 'react-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + ''),
    menubar: 'file edit insert view format table',
    height: 300,
    toolbar: []
  };
  public state = {
    hasChange: false,
    hasInit: false,
    content: '<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul><li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li></ul>',
    // fullscreen: false,
  }
  componentDidMount() {
    load(tinymceCDN, (err: any) => {
      if (err) {
        // this.$message.error(err.message)
        return
      }
      this.initTinymce();
    })
    // this.initTinymce()

  }
  componentWillUnmount() {
    this.destroyTinymce()
  }
  initTinymce() {
    const { tinymceId, menubar, height, toolbar } = this.props;
    const { content } = this.state;
    const _this = this
    window.tinymce.init({
      language: 'zh_CN',
      selector: `#${tinymceId}`,
      height: height,
      body_class: 'panel-body ',
      object_resizing: false,
      toolbar: toolbar.length > 0 ? toolbar : defaultToolbar,
      menubar: menubar,
      plugins: defaultplugins,
      end_container_on_empty_block: true,
      fontsize_formats: fontsizeFormats,
      font_formats: fontFormats,
      powerpaste_word_import: 'clean',
      code_dialog_height: 450,
      code_dialog_width: 1000,
      advlist_bullet_styles: 'square',
      advlist_number_styles: 'default',
      imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
      default_link_target: '_blank',
      link_title: false,
      nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
      init_instance_callback: (editor: any) => {
        if (content) {
          editor.setContent(content)
        }
        _this.setState({
          hasInit: true
        })
        editor.on('NodeChange Change KeyUp SetContent', () => {
          _this.setState({
            hasChange: true
          })
        })
      },
      setup(editor: any) {
        editor.on('FullscreenStateChanged', (e: any) => {
          _this.setState({
            fullscreen: e.state
          })
        })
      }
    })
  }
  destroyTinymce() {
    const { tinymceId } = this.props
    // const { fullscreen } = this.state
    const tinymce = window.tinymce.get(tinymceId)
    // if (fullscreen) {
    //   tinymce.execCommand('mceFullScreen')
    // }
    if (tinymce) {
      tinymce.destroy()
    }
  }
  setContent(value: any) {
    const { tinymceId } = this.props
    window.tinymce.get(tinymceId).setContent(value)
  }
  saveToGetContent() {
    const { tinymceId, getContent } = this.props
    if (getContent && typeof getContent === 'function') {
      getContent(window.tinymce.get(tinymceId).getContent())
    }
  }

  /**
   * 上传图片成功回调
   *  */
  public imageSuccessCBK = (arr: any) => {
    const { tinymceId } = this.props
    arr.forEach((v: any) => {
      window.tinymce.get(tinymceId).insertContent(`<img class="wscnph" src="${v.url}" >`)
    })
  }

  render() {
    // loading,
    const { tinymceId } = this.props
    // const { fullscreen } = this.state
    // const header = (
    //   <Page.Header breadcrumb={['富文本实例']} title={'富文本实例'} />
    // );
    return (
      <div className="tinymce">
        <aside>
          <span>富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见</span>
          <a target="_blank" className="link-type" href="https://panjiachen.github.io/vue-element-admin-site/component/rich-editor.html">文档</a>
        </aside>
        <div>
          <div>
            <textarea id={tinymceId} className='tinymce-textarea' />
          </div>
          <div className="editor-custom-btn-container">
            <EditorImage successCBK={this.imageSuccessCBK} />
          </div>
          <Button type="primary" onClick={() => { this.saveToGetContent() }}>保存</Button>
        </div>
      </div>
    );
  }
}

export default Tinymce;