import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

function LibraryList(props) {
  const {libraries} = props;
  return (
    <FlatList
      style={styles.fullScreen}
      data={libraries}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => {
        return <ListItem title={item.title} id={item.id} description={item.description} />;
      }}
    />
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    width: '100%'
  }
})

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(LibraryList);
