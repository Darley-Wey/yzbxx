import {Modal, Input} from 'antd';
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {login, getCaptcha} from "./utils/login";


const Captcha = (props) => {
    const [visible, setVisible] = useState(true);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('请输入验证码，字母区分大小写，点击图片可刷新。');
    const [captcha, setCaptcha] = useState(null)
    const [initialInput, setInput] = useState('')
    //useEffect(() => {setVisible(true)})
    /*   const showModal = () => {
           setVisible(true);
       };*/
    const handleOk = () => {
        setModalText('正在提交');
        setConfirmLoading(true);
        props.data.captcha = captcha
        login(props.data).then(res => {
                if (String(res.data.type) === 'image/jpeg') {
                    setTimeout(() => {
                        setConfirmLoading(false);
                        setModalText('验证码错误，请重新输入');
                        setInput('')
                    }, 1000);
                } else {
                    setTimeout(() => {
                        setVisible(false);
                        setConfirmLoading(false);
                        //ReactDOM.render(<div />,document.getElementById('captcha'))
                        //window.location.href = '/'
                    }, 500);
                }
            }
        )
    };

    const handleCancel = () => {
        //console.log('Clicked cancel button');
        setVisible(false);
        ReactDOM.render(<div />,document.getElementById('captcha'))
        // window.location.href = '/'
    };

    return (
        <>
            {/*<Button type="primary" onClick={showModal}>
                Open Modal with async logic
            </Button>*/}
            <Modal
                destroyOnClose={true}
                title="请输入验证码"
                visible={visible}
                onOk={handleOk}
                okText="提交"
                cancelText="取消"
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                maskClosable={false}
                width={300}
            >
                <p className={'text-red-600'}>{modalText}</p>
                <img src={props.captcha} alt={'验证码'} onClick={() => {
                    getCaptcha(props.data)
                }} />
                <Input allowClear value={initialInput} onChange={e => {
                    setInput(e.target.value);
                    setCaptcha(e.target.value)
                }} onPressEnter={handleOk} />
            </Modal>
        </>
    );
};


export default Captcha;