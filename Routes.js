import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "./pages/login";
import dashboard from "./pages/dashboard";


const stack =createNativeStackNavigator();

export default function Routes()
{
    return(
        <NavigationContainer>
            <stack.Navigator>
            <stack.Screen name ="login" component = {login}/>

            <stack.Screen name ="dashboard" component = {dashboard}/>
            
            </stack.Navigator>
            </NavigationContainer>
            

          
           
    );
}