import {Button, Form, Input} from "antd";
import React from "react";
import {login} from "./utils/login";

function PushForm() {
    const onFinish = (values) => {
        login(values).then(() => {
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 6},
    };

    const tailLayout = {
        wrapperCol: {
            xs: {
                offset: 0, span: 6
            },
            sm: {
                offset: 8, span: 6
            },
        },
    };

    return (
        <Form
            {...layout}
            /*layout={'vertical'}*/
            name="basic"
            // initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="研招网帐号"
                name="username"
                rules={[{required: true, message: '请输入你的研招网帐号!'}]}
            >
                <Input placeholder={'手机号/身份证号/邮箱'} />
            </Form.Item>

            <Form.Item
                label="研招网密码"
                name="password"
                rules={[{required: true, message: '请输入你的研招网密码!'}]}
            >
                <Input.Password />
            </Form.Item>
            {/* <Form.Item {...tailLayout} name="remember" valuePropName="unchecked">
                <Checkbox>记住我的账号</Checkbox>
            </Form.Item>*/}
            <Form.Item />
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    提交成绩信息
                </Button>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="button" href={'/search'}>
                    进入排名系统
                </Button>
            </Form.Item>
        </Form>
    );
}

export default PushForm
