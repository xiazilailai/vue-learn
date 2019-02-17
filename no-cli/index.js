// create at 2019/2/17

var app = new Vue({
    el: "#app",
    data: {
        message: "This is a demo"
    }
});

var app2 = new Vue({
    el: "#app-2",
    data: {
        message: "页面加载于" + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: "#app-3",
    data: {
        showMessage: true,
        message: "这是一条消息^_^"
    } 
});

var app4 = new Vue({
    el: "#app-4",
    data: {
        todoList: [
            {text: "学习Vue"},
            {text: "学习Vue-router"},
            {text: "学习VueX"},
            {text: "睡觉"}
        ]
    }
});

var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "hello vue.js ^_^"
    },
    methods: {
        reverseMessage: function(){
            this.message = [...this.message].reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: "#app-6",
    data: {
        message: "hello vue.js ^_^"
    }
});

// Vue component

// Vue.component("todo-item", {
//     template: "<li>这是个待办项</li>"
// });

Vue.component("todo-item", {
    props: ["todo"],
    template: "<li>{{todo.text}}</li>"
});

var app7 = new Vue({
    el: "#app-7",
    data:{
        todoList: [
            {id: 1,text: "学习Vue"},
            {id: 2,text: "学习Vue-router"},
            {id: 3,text: "学习VueX"},
            {id: 4,text: "睡觉"}
        ]
    }
});

var app8 = new Vue({
    el: "#app-8",
    data: {
        message: "I can not change.",
        htmlMessage: `<span style="color: red;">this should be red.</span>`,
        showMessage: true
    },
    created: function(){
        console.log(this);
    }
});

var app9 = new Vue({
    el: "#app-9",
    data: {
        message: "hello vue.js ^_^"
    },
    computed: {
        reverseMessage: function(){
            return [...this.message].reverse().join("");
        }
    },
    // methods: {reverseMessage: function(){...}},
    // watch: {message: function(val){...}}
});

var app10 = new Vue({
    el: "#app-10",
    data: {
        taskList: [
            {id: 1,text: "学习Vue"},
            {id: 2,text: "学习Vue-router"},
            {id: 3,text: "学习VueX"},
            {id: 4,text: "睡觉"}
        ],
        isActive: true,
        hasError: true,
        classObject: {
            active: true,
            "text-danger": false
        },
        activeClass: 'active',
        errorClass: 'text-danger',
        activeColor: "#ff4400",
        activeFontColor: "#FFF"
    },
    computed: {
        getClassObject: function(){
            return {
                active: this.isActive,
                "text-success": !!this.hasError
            }
        }
    }
});

var app11 = new Vue({
    el: "#app-11",
    data: {
        messageType: "A",
        message: "hello Vue.js"
    }
});

setTimeout(() => {
    app11.messageType = "B";
}, 1000);

setTimeout(() => {
    app11.messageType = "C";
}, 4000);

var app12 = new Vue({
    el: "#app-12",
    data: {
        todoList: [
            {id: 1,text: "学习Vue"},
            {id: 2,text: "学习Vue-router"},
            {id: 3,text: "学习VueX"},
            {id: 4,text: "睡觉"}
        ],
        todoObj: {
            "Jon": "买菜",
            "Han": "做饭",
            "Lin": "洗碗"
        }
    },
    computed: {
        evenTodoList: function(){
            return this.todoList.filter((_, index) => index % 2 === 0);
        }
    },
    methods: {
        oddTodoList: function(todoList){
            return todoList.filter((_, index) => index % 2 === 1);
        },
        // getNum: function(){
        //     return [1,2,3];
        // }
    }
});

setTimeout(() => {
    Vue.set(app12.todoList, 3, {id: 4,text: "吃饭"});
}, 2000);

setTimeout(() => {
    Vue.set(app12.todoObj, 'Tom', "扫地");
}, 3000);

setTimeout(() => {
    app12.todoObj = Object.assign({}, app12.todoObj, {"Jim": "遛狗"});
}, 4000);

Vue.component("task-item", {
    props: ["task"],
    template: 
    `<li>
        {{task.text}} 
        <button @click="$emit('remove')">delete</button>
    </li>`
});

var app13 = new Vue({
    el: "#app-13",
    data:{
        items: [
            {id: 1,text: "学习Vue"},
            {id: 2,text: "学习Vue-router"},
            {id: 3,text: "学习VueX"},
            {id: 4,text: "睡觉"}
        ],
        newTaskText: "",
        startId: 5
    },
    methods: {
        addTask: function(){
            this.items.push({
                text: this.newTaskText,
                id: this.startId++
            });
            this.newTaskText = "";
        }
    }
});


var app14 = new Vue({
    el: "#app-14",
    components: { // 局部组件
        "my-compnent": {
            props: ["task"],
            template: 
            `<li>
                {{task.text}} 
                <slot></slot>
                <span style="color: #FF4400;">
                    <slot name="named-solt"></slot>
                </span>
            </li>`
        }
    },
    data: {
        tasks: [
            {id: 1,text: "学习Vue"},
            {id: 2,text: "学习Vue-router"},
            {id: 3,text: "学习VueX"},
            {id: 4,text: "睡觉"}
        ]
    }
});

var app15 = new Vue({
    el: "#app-15",
    data: {
        show: true
    }
});

Vue.directive("print-value", {
    inserted: function(el, binding, vnode){
        console.log("print-value:", binding.value);
    }
});

var app16 = new Vue({
    el: "#app-16",
    data: {
        num: 1000
    }
});

