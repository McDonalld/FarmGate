import { Stack } from "expo-router"

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name="Seeds" options={{headerShown: false}}/>
        <Stack.Screen name="Seedlings" options={{headerShown: false}}/>
        <Stack.Screen name="Machinery" options={{headerShown: false}}/>
        <Stack.Screen name="HireWorker" options={{headerShown: false}}/>
        <Stack.Screen name="CultivationProcess" options={{headerShown: false}}/>
        <Stack.Screen name="CropDisease" options={{headerShown: false}}/>
    </Stack>
  )
}