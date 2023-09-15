/*
    编译命令：
        tsc <文件> [-w]    -w是监视文件变化自动生成js
        tsc -w 监视当前目录下所有文件
*/
let a: number;
a = 10;

function sum(a: number, b: number): number {
    return a + b
}

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}
// 在属性名后边加上?，表示属性是可选的
let b: { name: string, age?: number };
b = { name: '孙悟空', age: 18 };

// [propName: string]表示属性名的属性为string，:any表示属性为任意属性
let c: { name: string, [propName: string]: any };
c = { name: 'xixi', age: 18 };

/*
*   数组的类型声明：
*       类型[]
*       Array<类型>
* */
// string[] 表示字符串数组
let e: string[];
e = ['a', 'b', 'c'];
// number[] 表示数值数值
let f: number[];

let g: Array<number>;
g = [1, 2, 3];

/*
*   元组，元组就是固定长度的数组
*       语法：[类型, 类型, 类型]
* */
let h: [string, number];
h = ['hello', 123];

/*
* enum 枚举
*
* */
enum Gender {
    Male,
    Female
}

let i: { name: string, gender: Gender };
i = {
    name: '孙悟空',
    gender: Gender.Male // 'male'
}

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

k = 2;

