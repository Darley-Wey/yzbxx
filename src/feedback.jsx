import {render} from "react-dom";
import {Button, Result} from "antd";
import React from "react";

function Success(props) {
    render(
        //return(
        <Result
            status="success"
            title="提交成功!"
            subTitle="你的账号信息已成功提交至系统任务队列，稍后即可收录你的成绩信息至排名系统"
            extra={[
                <Button type="primary" key="console" href={'/search'}>
                    进入查询页面
                </Button>,
                <Button key="console" href={'/'}>
                    返回填报页面
                </Button>,
            ]}
        />
        , document.getElementById('push'))
}

function Fail(props) {
    render(
        <Result
            title="查询失败!"
            subTitle="未在指定院校库查询到你的成绩信息，请检查你的输入或重新提交。"
            extra={[
                <Button type="primary" key="console" href={'/search'}>
                    返回查询页面
                </Button>,
                <Button key="console" href={'/'}>
                    返回填报页面
                </Button>
            ]}
        />
        , document.getElementById('search'))
}
export {Success, Fail}
