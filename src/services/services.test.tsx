import axios from 'axios';
import { signUpRestaurant } from './signUp';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const criaRestauranteCorreto = {
    cnpj: '96.366.803/0001-33',
    email: 'davigarutt5@gmail.com',
    foodType: 'picante mexicana',
    name: 'Davi Garutti Diniz',
    password: '123123@@gmail.com',
    phoneNumber: '24999117580',
    restaurantAddress: {
        addressLabel: 'Casa',
        city: 'Resende',
        neighborhood: 'Santa Isabel',
        number: '215',
        postalCode: '27522000',
        state: 'RJ',
        street: 'Rua mesmo',
    },
};

describe('Testes nas funções que executam serviços', () => {
    test('Criação de restaurante sucesso', async () => {
        mockedAxios.post.mockResolvedValue({
            data: {
                cnpj: '96.366.803/0001-33',
                email: 'davigarutt5@gmail.com',
                foodType: 'picante mexicana',
                name: 'Davi Garutti Diniz',
                password: '123123@@gmail.com',
                phoneNumber: '24999117580',
                restaurantAddress: {
                    addressLabel: 'Casa',
                    city: 'Resende',
                    neighborhood: 'Santa Isabel',
                    number: '215',
                    postalCode: '27522000',
                    state: 'RJ',
                    street: 'Rua mesmo',
                },
            },
        });
        expect(await signUpRestaurant(criaRestauranteCorreto)).toEqual(criaRestauranteCorreto);
    });

    test('Criação de restaurante falha', async () => {
        // Simula um erro genérico
        mockedAxios.post.mockRejectedValue(new Error('Erro de validação'));

        // Espera-se que um erro seja lançado com a mensagem 'Erro de validação'
        await expect(signUpRestaurant(criaRestauranteCorreto)).rejects.toThrow('Erro de validação');
    });
});
