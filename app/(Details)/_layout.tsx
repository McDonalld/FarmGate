import { Stack } from "expo-router";

export default function DetailsLayout() {
  return (
    <Stack>
        <Stack.Screen name="SeedDetails" options={{headerShown: false}}/>
        <Stack.Screen name="OnionDetails" options={{headerShown: false}}/>
        {/* <Stack.Screen name="SeedDetails" options={{headerShown: true}}/> */}
    </Stack>
  )
}