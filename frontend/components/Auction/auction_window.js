import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import ioClient from 'socket.io-client';


export default class AuctionWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // current_bid: this.props.current_bid,
    };

    this.onReceivedItem = this.onReceivedItem.bind(this);
    this.socket = ioClient('http://localhost:3000');
    this.socket.emit('Client connected!');
    this.socket.on('auction item', this.onReceivedItem);

  }


  onReceivedItem(item) {
    console.log("current auction item");
    console.log(item);
    this.props.receiveAuctionItem(item);
    // this.setState({current_item: item});
  }

  onBid(bid) {

  }

  render() {
    return (
      <View>

      </View>
    );
  }

}
AuctionWindow.navigationOptions = {
  title: 'Live',
};