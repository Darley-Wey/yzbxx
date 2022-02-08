import axios from "axios";
import ReactDOM from "react-dom";
import Captcha from "../Captcha";
import {Success} from "../feedback";
import {message} from "antd";


async function login(values) {
    let res = await axios({
        url: '/login',
        method: 'post',
        data: values,
        responseType: "blob"
    })
    //console.log(res.headers)
    if (String(res.data.type) === "image/jpeg") {
        let url = URL.createObjectURL(res.data)
        ReactDOM.render(<Captcha visiable={true} captcha={url} data={values} />, document.getElementById('captcha'))
        return res
    } else {
        let reader = new FileReader()
        reader.onload = ev => {
            let text = String(ev.target.result)
            console.log(text)
            //var text = (new Response(result)).text();
            //console.log(text)
            if (text === 'success') {
                values.project = 'crawler'
                values.spider = 'score'
                axios({
                    url: '/schedule.json',
                    method: 'post',
                    params: values
                }).then(res => {
                    let status = res.data.status
                    if (status === 'ok') {
                        Success()
                    } else if (status === 'error') {
                        message.error('网络繁忙，请稍后重试')
                        setTimeout(() => {
                            window.location.href = '/'
                        }, 1000);
                    }
                    console.log(status)
                })
                console.log('Success:', values);
            } else {
                message.error(text).then(() => {
                })
                setTimeout(() => {
                    window.location.href = '/'
                }, 1000);
            }
        }
        reader.readAsText(res.data)
        return res
    }
}

function getCaptcha(values) {
    axios({
        url: '/captcha',
        method: 'post',
        data: values,
        responseType: "blob"
    }).then(res => {
        if (res.data.type === 'image/jpeg') {
            let url = URL.createObjectURL(res.data)
            ReactDOM.render(<Captcha captcha={url} data={values} />, document.getElementById('captcha'))
        }
    })
}


export {login, getCaptcha}


