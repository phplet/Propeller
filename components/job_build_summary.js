import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const BuildHeader = require('./build_header');

class JobBuildSummary extends Component {
  render() {
    const {build, inputs} = this.props;
    const {start_time, end_time} = build;

    const inputViews = inputs.map((input, index) => {
      return (
        <View key={index} style={styles.inputRow}>
          <Icon name="arrow-down" size={14} color="#B5BBC0" style={styles.arrowIcon} />
          <Text style={styles.inputName}>
            {input.name}
          </Text>
          <View style={styles.status}>
            <Icon name="check" size={14} color="white" style={styles.statusIcon} />
          </View>
        </View>
      );
    });

    return (
      <ScrollView style={styles.container}>
        <BuildHeader job_name={build.job_name} build_number={build.name} status={build.status} />

        <Text style={styles.time}>started {start_time}</Text>
        <Text style={styles.time}>ended {end_time}</Text>
        <Text style={styles.time}>duration {end_time - start_time}</Text>

        <View style={styles.inputs}>
          <Text style={styles.textHeader}>Inputs</Text>
          <View>{inputViews}</View>
        </View>

        <Text style={styles.textHeader}>Tasks</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: '#273747',
  },
  time: {
    color: 'white',
    margin: 3,
    marginLeft: 10,
    padding: 3,
    paddingLeft: 0
  },
  textHeader: {
    color: 'white',
    padding: 10,
    paddingBottom: 5
  },
  inputs: {
    backgroundColor: '#34495E'
  },
  inputName: {
    flex: 1,
    paddingLeft: 4,
    color: '#B5BBC0',
    alignSelf: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    backgroundColor: '#5D6D7E',
    height: 44,
    paddingLeft: 10,
    marginBottom: 2
  },
  arrowIcon: {
    alignSelf: 'center',
  },
  status: {
    width: 44,
    height: 44,
    paddingTop: 14,
    backgroundColor: '#1DC762'
  },
  statusIcon: {
    alignSelf: 'center'
  }
});

module.exports = JobBuildSummary;
