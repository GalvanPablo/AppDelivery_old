import AuthStack from './AuthStack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import TabNavigation from './TabNavigation'

const MainNavigator = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    return (
        <NavigationContainer>
            {isAuthenticated ? <TabNavigation /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default MainNavigator