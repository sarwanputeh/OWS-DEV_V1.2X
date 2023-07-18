
import { createApp } from 'vue'
import 'vue-toast-notification/dist/theme-sugar.css';
import '@fortawesome/fontawesome-free/css/all.css';
import "html2pdf.js/dist/html2pdf.bundle.min.js"
import ToastPlugin from "vue-toast-notification";
import {
  Layout,
  Button,
  Spin,
  Result,
  Card,
  Divider,
  Col,
  Row,
  Drawer,
  Table,
  Form,
  InputNumber,
  Tag,
  Menu,
  Steps,
  Tabs,
  Input,
  DatePicker,
  Select,
  Checkbox,
  Transfer,
  TimePicker,
  Switch,
  Image,
 
 
 
  
   
} from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import "ant-design-vue/dist/antd.css";

const app = createApp(App).use(router).use(ToastPlugin);
app.config.productionTip = false;
app.use(Layout);
app.use(Button);
app.use(Spin);
app.use(Result);
app.use(Card);
app.use(Divider);
app.use(Col);
app.use(Row);
app.use(Drawer);
app.use(Table);
app.use(Form);
app.use(InputNumber);
app.use(Tag);
app.use(Menu);
app.use(Steps);
app.use(Tabs);
app.use(Input);
app.use(DatePicker);
app.use(Select);
app.use(Checkbox);
app.use(Transfer);
app.use(TimePicker);
app.use(Switch);
app.use(Image);




app.mount('#app');