import { ProductDetails } from '../components/ProductDetails';
import { ProductGallery } from '../components/ProductGallery';
import { ProductQuestions } from '../components/ProductQuestions';
import { ProductComments } from '../components/ProductComments';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function ProductInfoPage({ route }) {
    const { product } = route.params;
    return (
        <Tab.Navigator>
            <Tab.Screen name="Detalhes" options={{ headerShown: false }}>
                {() => <ProductDetails {...product} />}
            </Tab.Screen>
            <Tab.Screen name="Galeria" options={{ headerShown: false }}>
                {() => <ProductGallery {...product} />}
            </Tab.Screen>
            <Tab.Screen name="Perguntas" options={{ headerShown: false }}>
                {() => <ProductQuestions {...product}/>}
            </Tab.Screen>
            <Tab.Screen name="Comentários" options={{ headerShown: false }}>
                {() => <ProductComments {...product} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}