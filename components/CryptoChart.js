import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, ActivityIndicator, StyleSheet ,ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';

const CryptoChart = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const [cryptoOptions, setCryptoOptions] = useState([]);
  const [priceData, setPriceData] = useState({ labels: [], datasets: [{ data: [] }] });
  const [loading, setLoading] = useState(false);

  const tickers_url = `http://127.0.0.1:5000/tickers`;

  useEffect(() => {
    fetchTickers();
  }, []);

  const fetchTickers = async () => {
    try {
      const response = await axios.get(tickers_url);
      const options = response.data.map(ticker => ({ label: ticker, value: ticker }));
      setCryptoOptions(options);
    } catch (error) {
      console.error('Failed to fetch tickers:', error);
    }
  };

  useEffect(() => {
    if (selectedCrypto) {
      fetchPriceData(selectedCrypto);
    }
  }, [selectedCrypto]);

  const fetchPriceData = async (crypto) => {
    setLoading(true);
    const url = `http://127.0.0.1:5000/${crypto}`;
    try {
      const response = await axios.get(url);
      const prices = response.data.Close.map(entry => entry[1]);
      const labels = response.data.Close.map(entry => entry[0].substring(5, 10).replace('-', '/'));
      setPriceData({
        labels,
        datasets: [{ data: prices }]
      });
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch price data:', error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedCrypto}
        onValueChange={(itemValue) => setSelectedCrypto(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Select a Crypto" value="" />
        {cryptoOptions.map(option => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : selectedCrypto && priceData.datasets[0].data.length > 0 ? (
        <View>
          <LineChart
            data={priceData}
            width={Dimensions.get('window').width - 30}
            height={Dimensions.get('window').height - 400} // Yüksekliği ayarladım
            yAxisLabel="$"
            chartConfig={styles.chartConfig}
            bezier
            style={styles.chart}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  picker: {
    height: 50,
    width: '100%',   
    marginBottom: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  chartConfig: {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  },
});

export default CryptoChart;
