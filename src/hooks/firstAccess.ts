import AsyncStorage from "@react-native-community/async-storage";

export  const setFirstAccess = async () => {
  await AsyncStorage.setItem('@Vipo:hasAccess', 'true');
}

export  const hasAccess = async (): Promise<string|null> => {
  const [hasAccess] = await AsyncStorage.multiGet([
    '@Vipo:hasAccess',
  ]);
  console.log("storage access", hasAccess)
  return hasAccess[1]
}