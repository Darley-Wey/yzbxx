import React from "react";
import PushForm from "./PushForm";

function Push(props) {
    return (
        <div id={'push'}>
            <div className={"text-base text-yellow-500"}>
                <p>1.本系统支持所有可在研招网查分的报考院校，提供分院校分专业的排名。</p>
                <p>2.把本系统推荐给与你报考同一院校同一专业的同学，越多人登记排名数据越精准。</p>
                <p>3.研招网账号是你的唯一排名查询凭证与身份标识，未登记用户不支持查询，请妥善保管。</p>
                <p>4.系统不会记录你的研招网密码、准考证号、身份证号、姓名、所属院校等私密信息，请放心使用。</p>
                <p>5.系统只会记录和展示用户的报考院校、专业、分数及查分页面的备注信息，以及经过隐匿处理研招网账号作为用户身份标识。</p>
                <p className={"text-red-600"}>6.仅供交流学习使用，请不要将本站数据以截图等任何方式分享到站外，用户行为造成的一切不良后果由用户承担，与本站无关。</p>
            </div>
            <div className={'pt-10'}>
                    <PushForm />
                    <div id='captcha'/>
            </div>
        </div>
    );
}

export default Push;
