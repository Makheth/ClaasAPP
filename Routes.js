import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "./pages/login";
import dashboard from "./pages/dashboard";
import messages from "./message";


const stack =createNativeStackNavigator();

export default function Routes()
{
    return(
        <NavigationContainer>
            <stack.Navigator>
            <stack.Screen name ="login" component = {login}/>

            <stack.Screen name ="dashboard" component = {dashboard}/>

            <stack.Screen name ="messages" component = {messages}/>

            </stack.Navigator>
            </NavigationContainer>
            

          
           
    );
}