import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, StatusBar, TextInput } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import { useStore } from '../store/store';
import HeaderBar from '../components/HeaderBar';
import PaymentFooter from '../components/PaymentFooter';
import EmptyListAnimation from '../components/EmptyListAnimation';

const CheckoutScreen = ({navigation, route}: any) => {
  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  
  const clearInputs = () => {
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setAddress('');
    setCity('');
  };

  const buttonPressHandler = () => {
    navigation.push('Payment', { amount: CartPrice });
    clearInputs();
  };

  return (
    <View style={styles.CheckoutContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View style={[styles.ScrollViewInnerView]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Checkout" />
            {CartList.length == 0 ? (
              <EmptyListAnimation title={'Cart is Empty'} />
            ) : (
            <View style={styles.ListItemContainer}>
              <TextInput
                style={styles.InputField}
                placeholder="First Name"
                placeholderTextColor="#D17842"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
              />
              <TextInput
                style={styles.InputField}
                placeholder="Last Name"
                placeholderTextColor="#D17842"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
              />
              <TextInput
                style={styles.InputField}
                placeholder="Email"
                placeholderTextColor="#D17842"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                style={styles.InputField}
                placeholder="Phone Number"
                placeholderTextColor="#D17842"
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
              />
              <TextInput
                style={styles.InputField}
                placeholder="Address"
                placeholderTextColor="#D17842"
                value={address}
                onChangeText={(text) => setAddress(text)}
              />
              <TextInput
                style={styles.InputField}
                placeholder="City"
                placeholderTextColor="#D17842"
                value={city}
                onChangeText={(text) => setCity(text)}
              />
            </View>
                        )}
          </View>
          {CartList.length != 0 ? (
            <PaymentFooter
            buttonPressHandler={buttonPressHandler}
            buttonTitle="Pay"
            price={{ price: CartPrice, currency: '$' }}
          />
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  CheckoutContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  CheckoutTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_20,
  },
  InputField: {
    backgroundColor: COLORS.primaryGreyHex,
    borderRadius: SPACING.space_10,
    padding: SPACING.space_12,
    paddingLeft:SPACING.space_20,
    marginBottom: SPACING.space_15,
    color: COLORS.primaryWhiteHex
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20
  }
});

export default CheckoutScreen;