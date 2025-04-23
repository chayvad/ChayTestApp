import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import BouncyCheckBox from 'react-native-bouncy-checkbox';


export interface FilterCategoryProps {
    title: string,
    isSeleced: boolean,
    onPress: (isChecked:boolean) => void;
}

export const FilterCategory = ({title, isSeleced, onPress}:FilterCategoryProps) => {
    return (
        <View style={styles.container} key={title}>
          <View style={styles.checkboxContainer}>
            <BouncyCheckBox
              isChecked={isSeleced}
              fillColor="#0000ff"
              onPress={(isChecked: boolean) => {onPress(isChecked);}}
            />
            <Text style={styles.label}>{title}</Text>
          </View>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    label: {
      margin: 8,
    },
  });
