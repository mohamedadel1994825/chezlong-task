import Reactotron, { networking, trackGlobalErrors } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
const reactotron = Reactotron
// .configure({ host: '127.0.0.1' }) //its for expo and set expo as local host 
.configure({ host: '192.168.1.9' }) //its for expo and set expo as local host 

// .configure({
//     name: "React Native Demo"
//   })
//for cli if it's not connected write adb reverse tcp:9090 tcp:9090
    .use(reactotronRedux())
    .use(trackGlobalErrors())
    .use(networking()) 
    .connect();
 export {reactotron};