/**
 * @file
 *
 * @author sqliang
 */

// style
import 'font-awesome/css/font-awesome.min.css';
import 'normalize.css/normalize.css';
import 'san-mui/lib/index.css';
import './main.css';
//
import router from './router';
import App from './App.san';

// app
new App().attach(document.getElementById('app'));

//路由监听
// 路由模式 'html5 | hash'
router.setMode('html5');
router.start();

