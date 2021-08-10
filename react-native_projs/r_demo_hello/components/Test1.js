import React from  "react" ;
import  {View, Button, Text, Image, ToastAndroid, Alert} from 'react-native';
// 自定义一个组件
class Test1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        }
    }

    _testClick2() {
        // 这种方式有问题
        // this.setState ({
        //     count: this.state.count+1
        // }) ;
        // 用下边这种方式OK
        this.setState((state) => {
            return {count: state.count + 1}
        });
        ToastAndroid.show("你点我了", ToastAndroid.LONG, ToastAndroid.TOP);
    }

    _toPage2 () {
        Alert.alert("跳转到新的页面")
    }

    render() {
        return <View>

            <Text style={{
                flex: 1,
                background:'#f00',
                fontSize: 26
            }}>title--</Text>

            <Text>{this.state.count}</Text>

            <Button title="测试事件" onPress={this._testClick2.bind(this)}/>

            <Button title="跳转到新的页面" onPress={this._toPage2.bind(this)}/>
        </View>
    };
}
export  default  Test1 ;
