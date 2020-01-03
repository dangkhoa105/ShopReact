import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { searchProduct } from '../../Redux/Reducer/CreateAction';
import search from '../../Redux/API/search';
import { Icon } from 'react-native-elements'
import SearchBar from 'react-native-search-bar';
import colors from '../../Design/Color'
import IconCart from '../Route/TabBarIcon/IconCart';

import iconMenu from '../../Image/icon-menu.png';
import { Button } from 'native-base';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            contentSearch:'',
        }
    }
    _search(){
        const {contentSearch} = this.state;
        search(contentSearch)
        .then(arrproduct => 
            this.props.searchProduct(arrproduct)
        )
        .catch(err => this._searchFail())
    }
    render(){
        const { header, headerTop, hearderSearch, imageMenu, imageCart, textinput } = styles;
        return(
            <View style={header}>
                <View style={headerTop}>
                    {/* <Icon
                        name='sc-telegram'
                        type='evilicon'
                        color='#ffffff'
                        size={45}
                        onPress={this.props.onOpen} 
                    /> */}
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={iconMenu} style={imageMenu} />
                    </TouchableOpacity>             
                    <View style={hearderSearch}>                                                                     
                        <TextInput
                            underlineColorAndroid='transparent'
                            style={textinput}
                            placeholder="What do you want to buy ?"
                            value={this.state.contentSearch}
                            onChangeText={(contentSearch)=>{this.setState({contentSearch})}}
                            onFocus={ this.props.goSear}
                            onSubmitEditing={this._search.bind(this)}
                        />
                    </View>
                    <View style={imageCart}>
                        <IconCart goCar={this.props.goCart}/>   
                    </View>         
                </View>      
            </View>
        );
    }
}

export default  connect(null,{searchProduct})(Header);
var { width, height } = Dimensions.get('window');
const styles=StyleSheet.create({
    header: {
        backgroundColor: colors.headerUI,
        justifyContent: 'space-evenly',
        padding: width / 25,
        paddingTop: width / 25,
        height: height / 11,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageMenu: {
        width: width / 13,
        height: height / 18,
        margin: width / 70,
        marginLeft: width / 1000,
    },
    imageCart: {
        width: width / 12,
        height: height / 19,
        margin: width / 80,
        //marginTop: width / 1000,
    },
    hearderSearch: {
        backgroundColor: 'white',
        margin: width / 50,
        justifyContent: 'space-around',
        height: height / 20,
        width: width / 1.45,
    },
    textinput: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center'
    },
})