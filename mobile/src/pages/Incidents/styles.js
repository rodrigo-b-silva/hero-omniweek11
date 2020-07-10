import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 15,
    color: "#737373"
  },
  headerTextBold: {
    fontWeight: "bold"
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: "#131313",
    fontWeight: "bold"
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737373"
  },
  incidentList: {
    marginTop: 32,
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  incidentProperty: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "bold"
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737373"
  },
  detailButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  detailButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: "bold"
  }
});