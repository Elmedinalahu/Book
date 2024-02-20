import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import { Ionicons } from '@expo/vector-icons';

interface PaymentMethodProps {
  paymentMode: string;
  name: string;
  icon: any;
  isIcon: boolean;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentMode,
  name,
  icon,
  isIcon,
}) => {
  const gradientColors = [COLORS.primaryGreyHex, COLORS.primaryBlackHex];

  return (
    <View
      style={[
        styles.paymentCardContainer,
        {
          borderColor: paymentMode === name ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex,
        },
      ]}
    >
      <LinearGradient
        colors={gradientColors}
        style={isIcon ? styles.gradientWallet : styles.gradientRegular}
      >
        {isIcon ? (
          <View style={styles.walletRow}>
            <Ionicons
              name={'wallet'}
              color={COLORS.primaryOrangeHex}
              size={FONTSIZE.size_30}
            />
            <Text style={styles.paymentTitle}>{name}</Text>
          </View>
        ) : (
          <>
            <Image source={icon} style={styles.paymentImage} />
            <Text style={styles.paymentTitle}>{name}</Text>
          </>
        )}
      </LinearGradient>
      <Text style={styles.paymentPrice}>$ 100.50</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentCardContainer: {
    borderRadius: BORDERRADIUS.radius_8 * 2,
    backgroundColor: COLORS.primaryGreyHex,
    borderWidth: 3,
  },
  gradientWallet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.space_12,
    paddingHorizontal: SPACING.space_24,
    borderRadius: BORDERRADIUS.radius_15 * 2,
  },
  gradientRegular: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.space_12,
    paddingHorizontal: SPACING.space_24,
    borderRadius: BORDERRADIUS.radius_15 * 2,
  },
  walletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_24,
  },
  paymentTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  paymentPrice: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
    marginTop: SPACING.space_12,
  },
  paymentImage: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    marginRight: SPACING.space_12,
  },
});

export default PaymentMethod;
