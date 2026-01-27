import { Stack } from "expo-router";


export default function _layout() {
  return (
   <Stack>
    <Stack.Screen name="ForgotPassword" options={{
        headerShown: false
    }}/>
    <Stack.Screen name="OTP" options={{
      headerShown: false
    }}/>
    <Stack.Screen name="resetPass" options={{
      headerShown: false
    }} />
   </Stack>
  )
}