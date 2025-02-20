import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Btn from './Btn';

const Logado = ({ route, navigation }) => {
  const { result } = route.params; // Obtém o resultado passado pelo Login

  return (
      <Btn/>
  );
};

export default Logado;
