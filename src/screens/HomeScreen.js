import React from 'react'
import {View, Text, Button, Image} from 'react-native'

export default class HomeScreen extends React.Component {
    constructor(){
        super()   
        this.navigationToManajemen = this.navigationToManajemen.bind(this)
    }

    render(){
        return(
            <View>
                <Button
                    title="Manajemen"
                    onPress={this.navigationToManajemen}
                />
            </View>
        )
    }

     navigationToManajemen(){
        this.props.navigation.navigate('Manajemen')
    }
}
