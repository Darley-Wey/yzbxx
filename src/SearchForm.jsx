import React, {useState, createContext} from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import {Button, Form, Input, Select, Table} from "antd";
import {Fail} from "./feedback";

/*const searchContext = createContext('')*/

function SearchForm(props) {
    const [formData, setData] = useState([])
    const [school, setSchool] = useState([]);
    const [loading, setLoad] = useState(false)
    const getSchool = () => {
        setLoad(true)
        setTimeout(() => setLoad(false), 1000)
        axios.get('/school').then(res => {
            setSchool(res.data)
            /*console.log(res.data)
            console.log(school)*/
        })
    }

    const onFinish = (values) => {
        axios({
            url: '/result',
            method: 'post',
            data: values
        }).then(res => {
                console.log(res.headers['content-type'])
                if (res.headers['content-type'] === 'application/json') {
                    setData(res.data)
                    //console.log(res.data)
                    //window.location.href = 'result'
                    ReactDOM.render(
                            <Table columns={columns} dataSource={res.data}
                                   onChange={onChange} />, document.getElementById('search'));
                    /*return <Table columns={columns} dataSource={data}
                                  onChange={onChange} />*/
                } else {
                    Fail()
                }
            }
        )
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div id={'search'}>
            <Form
                name="basic"
                layout={'vertical'}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name='sid'
                    label={'选择你报考的院校'}
                    rules={[{required: true, message: '请选择你的报考院校!'}]}>
                    <Select options={school} onFocus={getSchool} loading={loading} className={'text-left'} />
                </Form.Item>

                <Form.Item
                    label="你的研招网帐号"
                    name="username"
                    rules={[{required: true, message: '请输入你的研招网帐号!'}]}
                >
                    <Input />
                </Form.Item>

                {/* <Form.Item {...tailLayout} name="remember" valuePropName="unchecked">
                <Checkbox>记住我的账号</Checkbox>
            </Form.Item>*/}
                <Form.Item />
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        查询我的排名
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="button" href={'/'}>
                        返回填报页面
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

const columns = [
    {
        title: '用户',
        dataIndex: 'username',
    },
    {
        title: '专业',
        dataIndex: 'major',
        responsive: ['sm']
    },
    {
        title: '第一科',
        dataIndex: 'first_score',
        sorter: {
            compare: (a, b) => a.first_course - b.first_course,
            multiple: 1,
        },
        responsive: ['sm']
    },
    {
        title: '第二科',
        dataIndex: 'second_score',
        sorter: {
            compare: (a, b) => a.second_course - b.second_course,
            multiple: 1,
        },
        responsive: ['sm']
    },
    {
        title: '第三科',
        dataIndex: 'third_score',
        sorter: {
            compare: (a, b) => a.third_course - b.third_course,
            multiple: 1,
        },
        responsive: ['sm']
    },
    {
        title: '第四科',
        dataIndex: 'forth_score',
        sorter: {
            compare: (a, b) => a.forth_course - b.forth_course,
            multiple: 1,
        },
        responsive: ['sm']
    },
    {
        title: '总分(横屏分科)',
        dataIndex: 'sum_score',
        sorter: {
            compare: (a, b) => a.sum_score - b.sum_score,
            multiple: 2,
        },
    },
    {
        title: '备注',
        dataIndex: 'note',
        responsive: ['md'],
        width: 200
    },
];

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

/*function ResultTable(values) {
    const [data, setData] = useState({})
    axios({
        url: '/result',
        method: 'post',
        data: values
    }).then(res => {
            console.log(res.headers['Content-Type'])
            if (res.headers['Content-Type'] === 'application/json') {
                let data = res.data
                console.log(res.data)
                window.location.href = 'result'
                /!* ReactDOM.render(<Table columns={columns} dataSource={data}
                                        onChange={onChange} />, document.getElementById('body'));*!/
                /!*return <Table columns={columns} dataSource={data}
                              onChange={onChange} />*!/
            } else {
                Fail()
            }
        }
    )
    console.log('Success:', values);

    return (
        <Table columns={columns} dataSource={data}
               onChange={onChange} />)
}*/

export default SearchForm