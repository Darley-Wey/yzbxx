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
                {/*<div id={'login-form'} onChange={LoginForm}></div>*/}
                {/*<Space direction={"vertical"} className={"w-72 text-xl text-black text-left leading-8"}>
                    //<img src={logo} className="App-logo" alt="logo" />
                    <p className={" "}>请输入研招网账号：<Input onChange={updateField} name={"username"}
                                                              value={form.username} placeholder={"帐号"} /></p>
                    <p className={""}>请输入研招网密码：<Input.Password
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        onChange={updateField} name={"password"} value={form.password} placeholder={"密码"} /></p></Space>*/}
                {/*<p><Button onClick={() => {
                    submit();
                    printValues()
                }}>提交成绩信息</Button></p>
                {/*子组件向父组件通信*/}
                {/*        <div> this message is from Child:{this.state.date}
        <Children handleChange={this.handleClick}/></div>*/}
                {/* <p>you click {count} times</p>
                    <Button onClick={() => setState(count + 1)}>Click me</Button>*/}
            </div>

        </div>
    );
}

export default Push;

/*const printValues = () => {
      /!* e.preventDefault();*!/
      console.log(form.username, form.password);
  };
  const updateField = e => {
      setUser({
          ...form,
          [e.target.name]: e.target.value
      });
  };


  function submit() {
      let url = `http://34.96.201.183:7068/schedule.json?project=crawler&spider=score&username=${form.username}&password=${form.password}`;
      fetch(url,)
          .then(res => {
              return res.json()
          })
          .then(
              (result) => {
                  setIsLoaded(true);
                  setItems(result);
                  let status = result['status']
                  if (status == 'ok') {
                      alert('登记成功')
                  } else if (status = 'error') {
                      ReactDOM.render(<Success />, document.getElementById('main'))
                      //Success();
                  }
              },
              // 注意：需要在此处处理错误
              // 而不是使用 catch() 去捕获错误
              // 因为使用 catch 去捕获异常会掩盖掉组件本身可能产生的 bug
              (error) => {
                  setIsLoaded(true);
                  setError(error);
                  console.log(errors)
              }
          )
  }*/
