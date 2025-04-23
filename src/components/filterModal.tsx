import { Modal, View, Pressable, Text, Dimensions, StyleSheet } from 'react-native';
import { setIsFilterDrawerOpen, setSelectedCategories } from '../redux/filtersSlice';
import { FilterCategory } from './filterCategory';
import { selectAllCategories, selectIsFilterDrawerOpen, selectSelectedCatergories } from '../redux/filtersSelectors';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { useEffect, useState } from 'react';

export const FilterModal = () => {
    const dispatch = useAppDispatch();
    const isFilterDrawerOpen = useAppSelector(selectIsFilterDrawerOpen);
    const categoriesFilter = useAppSelector(selectSelectedCatergories);
    const allCategories = useAppSelector(selectAllCategories);
    const [selectedCategories, setLocalSelectedCategories] = useState(categoriesFilter);

    useEffect(()=>{
        setLocalSelectedCategories(categoriesFilter);
    },[categoriesFilter]);

    return (
        <Modal animationType="fade" transparent={true} visible={isFilterDrawerOpen} onRequestClose={() => dispatch(setIsFilterDrawerOpen(false))}>
            <View style={styles.modalContainer}>
                <View style={styles.drawerContainerStyle}>
                    {
                        allCategories.map((category) => {
                            return (
                                <FilterCategory key={`${category}FilterCategory`} title={category} isSeleced={selectedCategories.indexOf(category) !== -1} onPress={(isChecked)=>{
                                    if( isChecked){
                                        setLocalSelectedCategories([...selectedCategories, category]);
                                    } else {
                                        const filterCats = selectedCategories.filter((cat:string)=> category !== cat);
                                        setLocalSelectedCategories(filterCats);
                                    }
                                }} />
                            );
                        })
                    }
                    <Pressable
                        style={[styles.button, styles.buttonSave]}
                        onPress={() => {
                            dispatch(setIsFilterDrawerOpen(false));
                            dispatch(setSelectedCategories(selectedCategories));
                        }}>
                        <Text style={styles.textStyle}>Save</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => dispatch(setIsFilterDrawerOpen(false))}>
                        <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};



const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        width: screenWidth - 10,
        alignItems: 'center',
        margin:5,
        position: 'absolute',
        top: 50,
    },
    drawerContainerStyle: {
        backgroundColor:'white',
        width: screenWidth - 10,
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonSave: {
        backgroundColor: '#2196F3',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
        marginTop: 10,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
});
