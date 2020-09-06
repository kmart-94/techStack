import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {CardSection} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

function ListItem({title, description, id, selectLibrary, selectedLibrary}) {
  return (
    <TouchableOpacity
      onPress={ () => selectLibrary(id) }
    >
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>{title}</Text>
        </CardSection>
      </View>
      {selectedLibrary === id ?
        <View>
          <CardSection>
            <Text style={styles.descriptionStyle}>{description}</Text>
          </CardSection>
        </View>
        :
        null
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 15
  }
});

const mapStateToProps = state => {
  return {selectedLibrary: state.selectedLibrary};
};

export default connect(mapStateToProps, actions)(ListItem);
