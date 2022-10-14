import {useContext} from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme/AppStyle';
import {AuthContext} from '../context/AuthContext';


interface Props {
    iconName: string;
    size?: number;
}

const TouchableIcon = ({iconName, size = 50}: Props) => {
    const {changeFavoriteIcon} = useContext(AuthContext);

    return (
        <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}
        >
            <Icon
                name={iconName}
                size={size}
                color={colors.colorTab}/>
        </TouchableOpacity>
    );
};

export default TouchableIcon;
