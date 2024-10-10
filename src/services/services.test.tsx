import axios from 'axios';
import { signUpRestaurant } from './restaurant/signUp';
import { createDish, IDish } from './dish/createDish';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const criaRestauranteCorreto = {
    cnpj: '96.366.803/0001-33',
    email: 'davigarutt5@gmail.com',
    foodType: 'picante mexicana',
    name: 'Davi Garutti Diniz',
    password: '123123@@gmail.com',
    phoneNumber: '24999117580',
    photo: "https://loremflickr.com/300/300",
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

describe('Testes na função que cria um Restaurante', () => {
    test('Criação de restaurante sucesso', async () => {
        mockedAxios.post.mockResolvedValue({
            data: {
                cnpj: '96.366.803/0001-33',
                email: 'davigarutt5@gmail.com',
                foodType: 'picante mexicana',
                name: 'Davi Garutti Diniz',
                password: '123123@@gmail.com',
                phoneNumber: '24999117580',
                photo: "https://loremflickr.com/300/300",
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


describe("createDish", () => {
    const mockDish: IDish = {
        dishName: "Pizza",
        description: "Delicious pizza",
        price: "25.00",
        foodType: "Italiana",
        photo: "https://loremflickr.com/300/300",
        restaurant: {
            id: 2,
        },
    };

    it("should create a dish successfully", async () => {
        // Mock the resolved value of axios.post
        const mockResponse = { data: { success: true } };
        mockedAxios.post.mockResolvedValueOnce(mockResponse);

        const result = await createDish(mockDish, "tokenDefault");

        expect(mockedAxios.post).toHaveBeenCalledWith(
            `${process.env.VITE_BASE_URL_BACKEND}/dish`,
            mockDish
        );
        expect(result).toEqual(mockResponse.data);
    });

    it('Criação de prato falha', async () => {
        // Simula um erro genérico
        mockedAxios.post.mockRejectedValue(new Error('Erro de validação'));

        // Espera-se que um erro seja lançado com a mensagem 'Erro de validação'
        await expect(createDish(mockDish, "tokenDefault")).rejects.toThrow('Erro de validação');
    });
});