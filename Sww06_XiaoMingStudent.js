/**
 * Created by Shaowenwen on 2018-05-04 10:34
 */
import Sww06_Student from "./Sww06_Student";

export default class Sww06_XiaoMingStudent extends Sww06_Student{

    /**1.构造参数
     * 在构造方法里的参数不仅仅是参数而且还是默认声明的成员变量。
     * @param name
     * @param sex
     * @param age
     */
    constructor(){
        super('小明','男','12');
    }

    /**2.方法-->3.去导出类--》4.去使用导出的类，使用前先导出类。如在setup.js里面
     *
     * @returns {string}
     */
    getDescription(){
        // return '姓名：'+this.name+' 性别：'+this.sex+" 年龄："+this.age;
        return "哈哈" +super.getDescription();
    }

}